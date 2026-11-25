# Optional improvements

The site is complete without any of these. Edit text in `tools/data.mjs`, put files in `assets/`, then run `node tools/build.mjs`.

- [ ] **Photo:** add `assets/me.jpg` (square, under 300 KB) to show a portrait in the hero.
- [ ] **Certificates:** issuer and year for each certification, and a certificate link if one exists.
- [ ] **Hackathon:** one line on what you built and the problem it solved (Women Transform Rangelands).
- [ ] **IoT telepresence robot:** one measured result (range, latency or sensor accuracy), and a demo video or repository link (then add a button).
- [ ] **Repository links:** the US petroleum supply analysis and the IoT robot.
- [ ] **Power BI series:** screenshots with any private data removed, and a link to the .pbix files or a published report.
- [ ] **SITE_URL:** set `SITE_URL` at the top of `tools/data.mjs` to your real address (now https://example.com). It feeds the canonical tags, Open Graph tags, sitemap.xml and robots.txt.

## Files the build could not find

- `assets/me.jpg` (optional square photo under 300 KB)
