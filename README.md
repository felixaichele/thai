# Thai Massage Kempten — 12 Image Collage

This version uses **12 overlapping images** in the central collage.

The collage is intentionally irregular: different sizes, rotations, depth layers and overlaps create a physical scrapbook / moodboard feeling.

## Files

- `index.html`
- `style.css`
- `script.js`
- `images/`

## GitHub Pages

Upload the repository to GitHub and activate:

**Settings → Pages → Deploy from a branch → main → / (root)**

No build process is required.

## SEO — Damit Google die Seite findet

Diese Version enthält bereits:

- Titel & Meta-Description mit Keywords ("Thai Massage Sulzberg", "Fußmassage", "Relax Massage", plus "Kempten" als nahegelegene, suchvolumenstärkere Stadt)
- Meta Keywords, Open Graph- und Twitter-Card-Tags für Vorschaubilder bei Google/Social Media
- Ein `<link rel="canonical">` auf die Haupt-URL
- Strukturierte Daten (JSON-LD, Typ `HealthAndBeautyBusiness`) mit Adresse, Telefonnummer, E-Mail und Leistungen — dadurch kann Google die Seite z. B. in Google Maps/lokalen Suchergebnissen besser zuordnen
- Ein echtes `<h1>` im Hero-Bereich (vorher nur ein `<div>`) sowie beschreibende, keyword-relevante `alt`-Texte für alle Bilder
- `robots.txt` (erlaubt das Crawlen) und `sitemap.xml`

**Wichtig, bevor es live geht:**

1. **URL:** `https://github.com/felixaichele/thai` ist die Adresse des GitHub-*Repositories*, nicht die der veröffentlichten Webseite. Sobald GitHub Pages aktiviert ist (Settings → Pages), liegt die Seite standardmäßig unter `https://felixaichele.github.io/thai/` — diese Adresse ist überall in `index.html`, `robots.txt` und `sitemap.xml` eingetragen. Falls du stattdessen eine eigene Domain einrichtest, müssen alle drei Dateien entsprechend angepasst werden.
2. **Adresse:** Die genaue Straße/Hausnummer in Sulzberg fehlt noch — im Kontaktbereich (`[Straße Hausnummer] · 87477 Sulzberg`) und in den strukturierten Daten (`"streetAddress": "TODO: Straße und Hausnummer eintragen"`) bitte ergänzen.
3. **Standort Sulzberg statt Kempten:** Da die Massagen künftig in Sulzberg stattfinden, wurden Adresse, Struktur-Daten und Texte darauf umgestellt. "Kempten" wurde als Neben-Keyword beibehalten (Sulzberg liegt nur 10 km südlich und ist deutlich kleiner — viele Kundinnen und Kunden werden eher nach "Thai Massage Kempten" suchen), taucht aber nicht mehr als Standortangabe auf.
4. Lege die Seite in der [Google Search Console](https://search.google.com/search-console) an, verifiziere die Domain und reiche `sitemap.xml` dort ein — das ist der schnellste Weg zur Indexierung.
5. Trage das Unternehmen zusätzlich bei **Google Unternehmensprofil** (Google Maps) mit der Adresse in Sulzberg ein — das hilft bei lokalen Suchen meist mehr als reine On-Page-SEO.
6. Achte darauf, dass jede Unterseite (falls später weitere hinzukommen) ebenfalls einen eigenen Title, eine Description und einen Eintrag in `sitemap.xml` bekommt.

## Customizing the collage

The 12 images are `.p1` through `.p12` in `style.css`.

Change:
- `left` / `right`
- `top`
- `width` / `height`
- `transform: rotate(...)`
- `z-index`

to make the collage even more chaotic or controlled.

Replace all demo images in `images/` with your own photos.
