# Missing & Placeholder Assets

This document tracks assets that are missing, broken, or using SVG placeholders.
Update this file as real assets are added to the project.

---

## City/Case Study Images

The following city images currently use **SVG colour-illustration placeholders**
(generated 2026-03-21).  Replace them with real photographs when available.

| File | Case Study | Status |
|------|-----------|--------|
| `assets/images/norfolk.svg` | Norfolk, Virginia – Coastal Resilience | ⚠️ SVG placeholder |
| `assets/images/minneapolis.svg` | Minneapolis – Green Infrastructure | ⚠️ SVG placeholder |
| `assets/images/phoenix.svg` | Phoenix – Urban Heat Island | ⚠️ SVG placeholder |
| `assets/images/rotterdam.svg` | Rotterdam – Water Resilience | ⚠️ SVG placeholder |
| `assets/images/paris.svg` | Paris – Urban Forestry | ⚠️ SVG placeholder |
| `assets/images/singapore.svg` | Singapore – Sustainability | ⚠️ SVG placeholder |
| `assets/images/bogota.svg` | Bogotá – Climate Action | ⚠️ SVG placeholder |
| `assets/images/copenhagen.svg` | Copenhagen – Cycling & Carbon Neutral | ⚠️ SVG placeholder |
| `assets/images/melbourne.svg` | Melbourne – Urban Forest | ⚠️ SVG placeholder |
| `assets/images/medellin.svg` | Medellín – Green Corridors | ⚠️ SVG placeholder |
| `assets/images/london.svg` | London – Heat Risk Strategy | ⚠️ SVG placeholder |
| `assets/images/jakarta.svg` | Jakarta – Flood Resilience | ⚠️ SVG placeholder |
| `assets/images/cape-town.svg` | Cape Town – Water Scarcity | ⚠️ SVG placeholder |

### To replace a placeholder

1. Obtain a suitably licensed photograph (Creative Commons, Unsplash, or original).
2. Save it as a JPEG/WebP, ideally **1200 × 675 px** (16:9) and < 200 KB.
3. Place it in `assets/images/` with the same base name (e.g., `norfolk.jpg`).
4. Update the `image_url` field in both `_case_studies/<slug>.md` and `_data/case_studies.yml`.

---

## Social / Open Graph Image

| File | Status |
|------|--------|
| `assets/images/og-image.svg` | ⚠️ SVG placeholder (was empty `og-image.png`) |

Replace with a real 1200×630 PNG branded graphic and update `_includes/head.html`
to reference the new file.

---

## Stub / Invalid Files (not deleted, but not functional)

The following files were present in the repository as text stubs (content:
`# Placeholder for … case study image`). They are no longer referenced by
any layout or data file, but have been retained to avoid breaking any cached
URLs.

| File | Note |
|------|------|
| `assets/images/bogota.jpg` | Text stub, superseded by `bogota.svg` |
| `assets/images/copenhagen.jpg` | Text stub, superseded by `copenhagen.svg` |
| `assets/images/minneapolis.jpg` | Text stub, superseded by `minneapolis.svg` |
| `assets/images/norfolk-placeholder.jpg` | Text stub, superseded by `norfolk.svg` |
| `assets/images/paris.jpg` | Text stub, superseded by `paris.svg` |
| `assets/images/phoenix.jpg` | Text stub, superseded by `phoenix.svg` |
| `assets/images/rotterdam.jpg` | Text stub, superseded by `rotterdam.svg` |
| `assets/images/singapore.jpg` | Text stub, superseded by `singapore.svg` |
| `assets/images/og-image.png` | Empty (0 bytes), superseded by `og-image.svg` |

---

## Tool Icons

All 12 tool icon SVGs are present and working:

| File | Used by |
|------|---------|
| `assets/images/climate-central.svg` | Climate Central |
| `assets/images/energy.svg` | City Energy Dashboard |
| `assets/images/esri.svg` | ArcGIS Urban |
| `assets/images/flood.svg` | FloodMap.net, NOAA SLR |
| `assets/images/green-infra.svg` | Green Infrastructure Coalition |
| `assets/images/heat.svg` | Urban Heat Island Effect Tool, Cool Roofs |
| `assets/images/i-tree.svg` | i-Tree Tools |
| `assets/images/leed.svg` | LEED Rating System |
| `assets/images/nature.svg` | Forest Carbon Calculator |
| `assets/images/noaa.svg` | NOAA Sea Level Rise Viewer |
| `assets/images/planning.svg` | Land-Use Simulation |
| `assets/images/resilience.svg` | Climate Resilience Toolkit |

> **Note:** Some tools share icons (e.g., Cool Roofs uses `heat.svg`). Consider
> creating dedicated icons as the project grows.

---

## External / Linked Assets

These URLs are referenced in YAML data files and are **not hosted in this repo**.
Verify periodically that they remain accessible.

| URL | Tool |
|-----|------|
| https://www.climatecentral.org | Climate Central |
| https://www.itreetools.org | i-Tree Tools |
| https://coast.noaa.gov/slr/ | NOAA Sea Level Rise Viewer |
| https://greeninfrastructure.net | Green Infrastructure Coalition |
| https://www.epa.gov/water-research/national-stormwater-calculator | Stormwater Calculator |
| https://coolroofs.org/resources/calculator | Cool Roofs Calculator |
| https://www.fs.usda.gov/ccrc/topics/urban-forests | Forest Carbon Calculator |
| https://www.esri.com/en-us/arcgis/products/arcgis-urban | ArcGIS Urban |
| https://www.usgbc.org/leed | LEED Rating System |
| https://www.climate.gov/maps-pubs/city-energy-dashboard | City Energy Dashboard |
| https://climate.copernicus.eu | Copernicus Climate Change Service |
| https://www.climate.gov | Climate Resilience Toolkit |
| https://www.unep.org/explore-topics/climate-action/what-we-do/climate-action-note/state-of-finance-for-nature.html | UNEP Urban Resilience |
| https://www.citygreen.com | CityGreen |
| https://www.floodmap.net | FloodMap.net |
| https://www.climatejust.org.uk | Climate Just |
| https://openclimatefix.org | Open Climate Fix |
| https://www.epa.gov/heat-islands | Urban Heat Island Effect Tool |
