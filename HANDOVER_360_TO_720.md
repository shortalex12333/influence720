# Handover — From the Influence 360 Standard, to Whoever Builds 720 Next

**Status: the current 720 build is not acceptable. This document exists so the next pass does not
repeat the same failures.** It is a post-mortem, a standard, and a task list, in that order. Read all
three sections before touching a file.

---

## 1. What the standard actually is

Influence 360 (`00-source/influence360-yachts.html`) is not a mood board — it is a working, dense,
disciplined artifact, and every property below is a *specific, checkable* thing 720 must match, not a
vibe:

- **187 nodes, 624 relationship edges**, rendered with real visual density — never a handful of dots in
  a mostly-empty circle. If a screen looks sparse, that is a data problem, not a styling problem, and it
  is not done.
- **Radius and angle both carry real, load-bearing meaning** (ring = decision distance, domain = category
  segment), scaffolded with visible ring circles and sector fills so the geometry is legible without
  reading a single label.
- **One consistent visual grammar, applied without exception.** Every node, every edge, every panel
  follows the same rules. Nothing is a one-off.
- **Total stillness until the user acts.** No motion, no animation, no auto-playing anything, anywhere.
  Density and restraint are what read as "instrument panel," not movement.
- **Every string on screen is a considered, professional label.** Nothing internal, nothing shorthand,
  nothing that reads as a work-in-progress note, ever reaches the rendered page.
- **Dark/light theming is a first-class, fully-worked system**, not an afterthought toggle.

That is the bar. Not "inspired by" — matched, specifically, on every point above, before anything ships.

---

## 2. Post-mortem: exactly how 720 failed that bar

No excuses below, just what happened and why it happened, so it doesn't happen again.

### 2.1 Internal shorthand leaked directly into client-facing UI
The producer roster's `archetype` field was authored using internal analytical shorthand from an early
planning conversation — `"The Sniper"`, `"The Grinder"`, `"The Legacy"`, `"The Silo"`. That field was then
rendered **verbatim, unfiltered**, across three separate screens: the Dashboard 1 producer selector and
center-node subtitle, the Dashboard 3 leadership rollup, and the Dashboard 5 producer rail. Nobody
building or reviewing those screens asked "would this string embarrass someone if an SVP read it out
loud." That is the actual root cause: **no separation ever existed between an internal reasoning label
and a field that gets rendered as UI text.** They were the same field. (Corrected in
`generator/gen_720_dataset.py` — archetypes are now sober descriptors: "High-Yield, Low-Touch," etc. —
but the *pattern* that allowed it is the thing to actually fix, not just this one field.)

### 2.2 An animated scrolling ticker on Dashboard 5
A literal `@keyframes` infinite-scroll marquee was built for the "regional whitespace" stat strip — an
actual stock-ticker-tape animation. This directly contradicts §1's stillness requirement and reads as a
cheap gimmick, not an enterprise instrument. Root cause: the builder reached for "Bloomberg Terminal" as
a literal scrolling-ticker metaphor instead of the thing 360 actually does to earn that comparison —
density and typographic confidence, held still. (Fixed — static stat strip, no motion.)

### 2.3 The dataset started far too thin to look like a real book
The first working version of Dashboard 1 had roughly 4 known + 4 untapped contacts per producer — a
near-empty circle. This happened because the staged dataset was built to prove one flagship narrative
chain (a single cross-pollination story), not to feel like an actual Salesforce contact list. It was
called "built and verified" at that scale before anyone looked at it against §1's density bar. (Patched
after direct user inspection — ~100 contacts/producer, category segmentation, ring scaffolding added —
but this should never have needed a user to catch it visually first.)

### 2.4 The actual failure underneath all three: self-reported verification was trusted over direct inspection
Every one of the above shipped with a subagent report saying some version of "verified live in a
browser," "confirmed rendering correctly." Those reports were taken at face value and used to move on to
other work, instead of independently opening every file and looking at it, critically, next to 360,
before calling anything done. **A completion report is a claim, not evidence.** The only thing that
actually caught these problems was the user opening the files themselves and reacting to what they saw.
That should have happened first, by whoever built it, every time.

### 2.5 No explicit "match 360, specifically" instruction was ever given to a builder
Every build brief in this project specified data wiring and interaction mechanics in exhaustive detail.
None of them said, in so many words: *"the bar is 360, put your output next to it side by side, and if it
would look embarrassing in that comparison, it is not done."* That sentence should be the first line of
every future build brief, not an assumption.

### 2.6 The data layer was reactive, not foundational
The dataset (`generator/gen_720_dataset.py`) was written to unblock five HTML files that needed to exist
quickly. It grew by patches, in response to problems found after the fact (missing `responsible_node_id`,
missing category field, missing volume) — never authored up front, at real depth, as the thing everything
else should be built *on top of*.

---

## 3. Standing rules for whoever works on this next

1. **No dashboard is "done" until it has been opened, screenshotted, and visually compared against 360
   directly by the person who built it** — not described as done, not reported as verified by a subagent,
   *looked at*.
2. **No internal codename, nickname, or shorthand may exist in any field that a render function can put
   on screen.** If a concept needs an internal name for reasoning about it, that name lives in comments
   or planning docs, never in a data field with a path to the DOM.
3. **No animation, motion, or auto-playing element that 360 itself doesn't use.** Stillness is the
   standard, not a fallback.
4. **Data thinness is a visual defect, not a separate data-quality issue.** If a screen looks sparse,
   that blocks ship the same as a broken layout would.
5. **Every build brief includes §1 of this document, verbatim, as a requirement — not a reference link.**

---

## 4. Task for the next worker

**Do not write HTML first.** The next pass starts with the data foundation, at real depth, and with real
research behind the design decisions — not another sprint straight to five parallel HTML files off an
internally-authored spec, which is what produced everything in §2.

### 4.1 Primary deliverable: a genuinely in-depth Excel database
Build out the staged dataset as a properly modeled, deep Excel workbook set — not the current thin
~470-node / ~30-account pass. This means materially more staged clients across all five verticals, a
fuller role taxonomy per vertical (not a handful of titles reused on a loop), richer relationship and
referral histories, and enough volume per producer/account that the *data itself* would hold up under
scrutiny before a single chart is drawn on top of it. The Excel layer is the foundation the dashboards
render, not an export generated after the fact to keep two artifacts in sync — build it that way.

### 4.2 Before that: fan out agents for actual research, not construction
Every prior use of multi-agent fan-out in this project was used to **build** — five agents each writing
one HTML file from a spec. That is not what's needed next. Fan out agents to **research**:

- What do real enterprise-grade, data-dense instrument panels actually do — Bloomberg Terminal, Palantir
  Foundry/Gotham, and comparable real reference points — specifically on density, typographic hierarchy,
  color restraint, and the total absence of decorative motion.
- Re-derive, explicitly, why 360 itself works — not from memory or assumption, but by reading its actual
  rendering code and design choices again, and writing down the specific, checkable principles behind
  them (the same way §1 above is written: specific and checkable, not aspirational adjectives).
- Validate any new design decision against those findings *before* a build agent is given a brief, not
  after a build agent has already produced something that needs fixing.

Research first, synthesis second, a written brief that includes §1 of this document third, build last.
That ordering is the actual fix — not just the specific bugs listed in §2.
