/* Influence 720 — shared render core.
 * Layout algorithm and SVG rendering primitives ported directly from
 * 00-source/influence360-yachts.html (DATA_FOUNDATION_BRIEF.md §2 forensic audit),
 * generalized per PHASED_BUILD_PLAN.md §2's Phase 2 requirement: colorFn/sizeFn are
 * injected by the caller, never hardcoded, and domain count is read from the caller's
 * own per-vertical domain list rather than 360's hardcoded 9.
 *
 * A dashboard using this file supplies:
 *   - RingEngine.render(svgEl, { nodes, domains, ring, colorFn, sizeFn, labelFn,
 *       edges, activeId, showLabels, onSelect, onHover }) for the radial graph.
 *   - RingEngine.theme.apply() / .set(mode) for the shared dark/light toggle.
 *   - RingEngine.tooltip.show(evt, title, meta, desc) / .hide() for the shared tooltip.
 * Nothing here renders text labels by default — 360's own base-view density comes from
 * bare colored dots; labels only render for an active/selected node or when the caller
 * explicitly turns on showLabels. That restraint is load-bearing, not an oversight.
 */
const RingEngine = (() => {
  const TAU = Math.PI * 2;
  const SECTOR_GAP = 0.04; // radians, ~2.29 deg — verbatim from 360

  // 360's own exact ring config (DATA_FOUNDATION_BRIEF.md §2.2) — the default every
  // dashboard uses unless it has a documented reason to deviate.
  const DEFAULT_RING = {
    RI: {0: 80, 1: 210, 2: 400, 3: 630, 4: 840},
    RO: {0: 200, 1: 390, 2: 620, 3: 830, 4: 1020},
    RC: {0: '#6a9de0', 1: '#c9a84c', 2: '#e07a30', 3: '#4a8aba', 4: '#2e5070'},
    RL: {0: 'APEX', 1: 'COI SIGNATORY', 2: 'COI CONDITIONAL', 3: 'TRANSACTION CRITICAL', 4: 'OPERATIONAL'},
  };

  function sectorStart(domainId, nDomains) {
    return ((domainId - 1) / nDomains) * TAU - TAU / 4 + SECTOR_GAP / 2;
  }
  function sectorAngleFor(nDomains) {
    return (TAU / nDomains) - SECTOR_GAP;
  }

  // Group-by-ring×domain, score-sort, angular+radial placement, then N passes of
  // pairwise repulsion within each ring×domain group — verbatim algorithm from 360's
  // buildLayout(), generalized to take an injected sizeFn/scoreFn instead of the
  // yacht-specific nR()/compScore() formulas.
  function buildLayout(nodes, { domains, ring = DEFAULT_RING, sizeFn, scoreFn, ringOf, domainOf }) {
    const nDomains = domains.length;
    const domainIndex = new Map(domains.map((d, i) => [d.id, i + 1])); // 1-indexed, matches sectorStart's (domainId-1)
    const placed = [];
    const groups = {};
    for (const n of nodes) {
      const r = ringOf(n), d = domainOf(n);
      const key = `${r}|${d}`;
      (groups[key] = groups[key] || []).push(n);
    }
    for (const [key, group] of Object.entries(groups)) {
      const [ringNum, domainId] = key.split('|').map(Number);
      const ri = ring.RI[ringNum] ?? 200, ro = ring.RO[ringNum] ?? 400;
      const domIdx = domainIndex.get(domainId) || 1;
      const sa = sectorStart(domIdx, nDomains), sw = sectorAngleFor(nDomains), ea = sa + sw;
      group.sort((a, b) => scoreFn(b) - scoreFn(a));
      const count = group.length;
      const maxCs = scoreFn(group[0]) || 1, minCs = scoreFn(group[count - 1]) || 0;
      const range = maxCs - minCs;
      group.forEach((n, idx) => {
        const r = sizeFn(n);
        const margin = Math.max(0.06, (r + 10) / ((ri + ro) / 2));
        const usable = Math.max(0, sw - 2 * margin);
        const angle = count === 1 ? sa + sw / 2 : sa + margin + (idx / (count - 1)) * usable;
        const cs = scoreFn(n), rPad = r + 5;
        let rmid;
        if (range < 0.5) {
          const t = count === 1 ? 0.5 : idx / (count - 1);
          rmid = (ri + rPad) + t * ((ro - rPad) - (ri + rPad));
        } else {
          const t = (cs - minCs) / range;
          rmid = (ro - rPad) - t * ((ro - rPad) - (ri + rPad));
        }
        rmid = Math.max(ri + rPad, Math.min(ro - rPad, rmid));
        placed.push({ n, r, ring: ringNum, domain: domainId, x: Math.cos(angle) * rmid, y: Math.sin(angle) * rmid, angle, rmid, sa, ea, ri, ro });
      });
    }
    for (let pass = 0; pass < 60; pass++) {
      for (let i = 0; i < placed.length; i++) {
        const a = placed[i];
        for (let j = i + 1; j < placed.length; j++) {
          const b = placed[j];
          if (a.ring !== b.ring || a.domain !== b.domain) continue;
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.001;
          const minD = a.r + b.r + 6;
          if (dist >= minD) continue;
          const push = (minD - dist) / dist * 0.5;
          const px = dx * push * 0.5, py = dy * push * 0.5;
          a.x -= px; a.y -= py; b.x += px; b.y += py;
          for (const p of [a, b]) {
            const pr = Math.hypot(p.x, p.y);
            if (pr < p.ri + p.r) { const s = (p.ri + p.r) / pr; p.x *= s; p.y *= s; }
            else if (pr > p.ro - p.r) { const s = (p.ro - p.r) / pr; p.x *= s; p.y *= s; }
            const pa = Math.atan2(p.y, p.x), pr2 = Math.hypot(p.x, p.y);
            const am = (p.r + 4) / (pr2 || 1);
            if (pa < p.sa + am) { const na = p.sa + am; p.x = Math.cos(na) * pr2; p.y = Math.sin(na) * pr2; }
            else if (pa > p.ea - am) { const na = p.ea - am; p.x = Math.cos(na) * pr2; p.y = Math.sin(na) * pr2; }
            p.angle = Math.atan2(p.y, p.x); p.rmid = Math.hypot(p.x, p.y);
          }
        }
      }
    }
    return placed;
  }

  function svgEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  function render(svg, opts) {
    const { nodes, domains, ring = DEFAULT_RING, colorFn, sizeFn, scoreFn = sizeFn,
            ringOf, domainOf, labelFn, edges = [], activeId = null, showLabels = false,
            dimFn = null,
            onSelect = () => {}, onHover = () => {}, onLeave = () => {}, vx = 0, vy = 0, vz = 1 } = opts;
    const W = svg.clientWidth || 1200, H = svg.clientHeight || 900;
    const cx = W / 2, cy = H / 2;
    svg.innerHTML = '';
    const scene = svgEl('g', { transform: `translate(${cx + vx},${cy + vy}) scale(${vz})` });
    svg.appendChild(scene);

    const MAX_R = ring.RO[4] + 40;
    domains.forEach(dom => {
      const idx = domains.indexOf(dom) + 1;
      const sa = sectorStart(idx, domains.length), ea = sa + sectorAngleFor(domains.length);
      const p = svgEl('path', {
        d: `M 0 0 L ${Math.cos(sa) * MAX_R} ${Math.sin(sa) * MAX_R} A ${MAX_R} ${MAX_R} 0 0 1 ${Math.cos(ea) * MAX_R} ${Math.sin(ea) * MAX_R} Z`,
        fill: dom.col, 'fill-opacity': '0.035',
      });
      scene.appendChild(p);
    });

    [0, 1, 2, 3, 4].forEach(r => {
      if (ring.RI[r] === undefined) return;
      const rmid = (ring.RI[r] + ring.RO[r]) / 2;
      [ring.RI[r], ring.RO[r]].forEach(rad => {
        scene.appendChild(svgEl('circle', {
          cx: 0, cy: 0, r: rad, fill: 'none', stroke: ring.RC[r],
          'stroke-width': rad === ring.RI[r] ? '0.5' : '1',
          'stroke-dasharray': rad === ring.RI[r] ? '2 12' : '4 10', 'stroke-opacity': '0.4',
        }));
      });
      const lt = svgEl('text', {
        x: 0, y: -(rmid + 6), 'text-anchor': 'middle', 'font-size': '16', 'font-weight': '600',
        'letter-spacing': '0.08em', fill: ring.RC[r], opacity: '0.85',
      });
      lt.textContent = ring.RL[r];
      scene.appendChild(lt);
    });

    domains.forEach((dom, i) => {
      const idx = i + 1;
      const angle = sectorStart(idx, domains.length);
      scene.appendChild(svgEl('line', {
        x1: Math.cos(angle) * (ring.RI[0] - 10), y1: Math.sin(angle) * (ring.RI[0] - 10),
        x2: Math.cos(angle) * (ring.RO[4] + 20), y2: Math.sin(angle) * (ring.RO[4] + 20),
        stroke: dom.col, 'stroke-dasharray': '5 5', 'stroke-width': '1.5', 'stroke-opacity': '0.55',
      }));
      const midA = angle + sectorAngleFor(domains.length) / 2;
      const labelR = ring.RO[4] + 90;
      const g = svgEl('g', { transform: `translate(${Math.cos(midA) * labelR},${Math.sin(midA) * labelR})` });
      const lines = dom.name.split(' & ').length > 1 ? [dom.name.split(' & ')[0] + ' &', dom.name.split(' & ').slice(1).join(' & ')] : [dom.name];
      lines.forEach((txt, li) => {
        const t = svgEl('text', {
          x: 0, y: (li - (lines.length - 1) / 2) * 16, 'text-anchor': 'middle', 'dominant-baseline': 'middle',
          'font-size': '11', 'font-weight': '700', 'letter-spacing': '0.03em', fill: dom.col, opacity: '0.85',
        });
        t.textContent = txt;
        g.appendChild(t);
      });
      scene.appendChild(g);
    });

    const layout = buildLayout(nodes, { domains, ring, sizeFn, scoreFn, ringOf, domainOf });
    const byId = new Map(layout.map(p => [p.n.id, p]));

    edges.forEach(e => {
      const a = byId.get(e.from), b = byId.get(e.to);
      if (!a || !b) return;
      scene.appendChild(svgEl('line', {
        x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: e.color || '#8a8a8a',
        'stroke-width': e.width || '1', 'stroke-opacity': e.opacity || '0.3',
        'stroke-dasharray': e.dash || 'none',
      }));
    });

    layout.forEach(p => {
      const isActive = activeId === p.n.id;
      // Dimming is visual-only — a dimmed node is still a full element in the DOM and the
      // nodes array, still fully clickable, and still a valid endpoint for cross-link line
      // drawing. Never remove/skip a node here; opacity is the only thing dimFn is allowed
      // to touch. See dashboard0's filter bar for the caller-supplied dimFn.
      const isDimmed = !isActive && !!(dimFn && dimFn(p.n));
      const col = colorFn(p.n);
      const g = svgEl('g', { cursor: 'pointer', 'data-nid': p.n.id });
      if (isDimmed) g.setAttribute('opacity', '0.2');
      if (isActive) {
        g.appendChild(svgEl('circle', { cx: p.x, cy: p.y, r: p.r + 7, fill: col, 'fill-opacity': '0.18' }));
      }
      const baseOpacity = isActive ? 0.92 : (0.42 + (scoreFn(p.n) / 10) * 0.43);
      g.appendChild(svgEl('circle', {
        cx: p.x, cy: p.y, r: p.r, fill: col, 'fill-opacity': Math.max(0.12, baseOpacity),
        stroke: col, 'stroke-width': isActive ? '2.5' : '1.5',
      }));
      if (showLabels || isActive) {
        const label = labelFn ? labelFn(p.n) : (p.n.label || '');
        const ang = p.angle, ca = Math.cos(ang), sa2 = Math.sin(ang);
        const gap = isActive ? p.r * 1.6 + 12 : p.r * 1.5 + 10;
        const lx = p.x + ca * gap, ly = p.y + sa2 * gap;
        const anchor = ca >= 0.1 ? 'start' : (ca <= -0.1 ? 'end' : 'middle');
        const t = svgEl('text', { x: lx, y: ly, 'text-anchor': anchor, 'font-size': '10', 'font-weight': '600', fill: 'var(--text2)', 'pointer-events': 'none' });
        t.textContent = label.length > 26 ? label.slice(0, 25) + '…' : label;
        scene.appendChild(t);
      }
      g.addEventListener('click', () => onSelect(p.n));
      g.addEventListener('mouseenter', evt => onHover(evt, p.n));
      g.addEventListener('mouseleave', onLeave);
      scene.appendChild(g);
    });

    return { layout, byId };
  }

  // ── Shared theming (verbatim from 360) ──────────────────────────────────
  const theme = {
    KEY: 'ring720_theme',
    apply() {
      const mode = localStorage.getItem(theme.KEY) || 'system';
      const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      const resolved = mode === 'system' ? (dark ? 'dark' : 'light') : mode;
      document.body.classList.toggle('theme-dark', resolved === 'dark');
    },
    set(m) { localStorage.setItem(theme.KEY, m); theme.apply(); },
    toggle() {
      const isDark = document.body.classList.contains('theme-dark');
      theme.set(isDark ? 'light' : 'dark');
    },
  };

  // ── Shared tooltip ───────────────────────────────────────────────────────
  const tooltip = {
    el: null,
    ensure() {
      if (!tooltip.el) {
        tooltip.el = document.createElement('div');
        tooltip.el.id = 'tt';
        document.body.appendChild(tooltip.el);
      }
      return tooltip.el;
    },
    show(evt, title, meta, desc) {
      const el = tooltip.ensure();
      el.innerHTML = `<span class="tt-meta">${meta || ''}</span><span class="tt-title">${title}</span><span class="tt-desc">${desc || ''}</span>`;
      el.style.left = (evt.clientX + 16) + 'px';
      el.style.top = (evt.clientY + 12) + 'px';
      el.style.opacity = '1';
    },
    hide() { if (tooltip.el) tooltip.el.style.opacity = '0'; },
  };

  // one-shot onboarding hint, 6s, hard-removed — never a recurring/looping element
  function showOnboardingHint(text) {
    if (localStorage.getItem('ring720_hint_seen')) return;
    localStorage.setItem('ring720_hint_seen', '1');
    const wrap = document.createElement('div');
    wrap.id = 'theme-hint';
    wrap.innerHTML = `<div id="theme-hint-box"><span id="theme-hint-icon">&#9679;</span><span>${text}</span></div>`;
    document.body.appendChild(wrap);
    setTimeout(() => wrap.remove(), 6200);
  }

  return { buildLayout, render, sectorStart, sectorAngleFor, DEFAULT_RING, theme, tooltip, showOnboardingHint, svgEl };
})();
