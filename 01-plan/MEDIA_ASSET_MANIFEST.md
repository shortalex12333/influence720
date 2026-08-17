# Influence 720 Homepage — Media Asset Specification Manifest

> **Document Status**: Definitive Media Requirements & Placeholder Specification Guide for the **Influence 720** Executive Homepage (`index.html`).
> **Purpose**: Serves as a turnkey visual asset menu for replacing temporary dark glass placeholders with production-grade graphics, renders, or videos.

---

## Required Media Assets List

| Asset ID | Target HTML Element | Recommended Aspect Ratio | Optimal Resolution | Visual Content & Description | Target File Path to Replace |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Media Asset #1** | `#media-hero-overview` | **16:9** (Landscape) | **1920 × 1080 px** | **Hero Platform Overview**: High-resolution dark mode graphic or 3D render of the 5-Vertical Petal Wheel Canvas (`RingEngine.render`), highlighting the gold cross-links (`#dcae5c`) between Yacht, Aviation, Real Estate, Auto, and Personal Risk. | `images/hero-platform-overview.png` (or `.mp4` loop) |
| **Media Asset #2** | `#media-architecture-diagram` | **16:9** (Landscape) | **1920 × 1080 px** | **3-Tier Architecture Schematic**: Elegant architectural diagram showing the data flow from **Influence 360 Ontology (Foundational Layer)** → **Salesforce CRM + Applied Epic ERP + Coverage Corpus DB (Data Layer)** → **720 Radial Suite Dashboards D0-D6 (Application Layer)**. | `images/influence720-architecture-diagram.png` |
| **Media Asset #3** | `#media-verticals-showcase` | **21:9** (Panoramic) | **2560 × 1080 px** | **5 Multi-Vertical Universes Showcase**: Wide panoramic collage or rendered banner displaying floating radial wheel icons for **Yacht** (S1-S7), **Aviation** (Jets), **Real Estate** (Estates), **Auto Collection** (Fleets), and **Personal Risk** (SPVs/Umbrella). | `images/5-vertical-universes-banner.png` |

---

## How to Insert Media Later

To drop an image or video into any placeholder location:

1. Copy your media file into the `05-build/images/` directory (e.g. `05-build/images/hero-overview.png`).
2. Open `index.html` (or `05-build/index.html`).
3. Locate the corresponding placeholder container ID (e.g. `<div class="media-placeholder" id="media-hero-overview">...</div>`).
4. Replace the inner placeholder `div` with your `<img>` tag or `<video>` element:
   ```html
   <!-- Image Example -->
   <img src="images/hero-overview.png" alt="Influence 720 Hero Engine" style="width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.15)">

   <!-- Video Loop Example -->
   <video autoplay loop muted playsinline style="width:100%; border-radius:12px; border:1px solid rgba(255,255,255,0.15)">
     <source src="images/hero-engine-loop.mp4" type="video/mp4">
   </video>
   ```
