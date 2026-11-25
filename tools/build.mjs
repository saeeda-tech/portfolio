// Static site generator (dev tool only; the output is plain HTML). Run: node tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as D from './data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { SITE, PROJECTS } = D;
const todos = []; // {page, text}
const missing = []; // {page, file, note}
let page = '';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Escape text and turn [ASK: ...] into a visible, findable placeholder.
const t = s => esc(s).replace(/\[ASK: ([^\]]*)\]/g, (m, inner) => {
  todos.push({ page, text: inner });
  return `<mark data-todo>[ASK: ${inner}]</mark>`;
});
const exists = rel => fs.existsSync(path.join(ROOT, rel));
const write = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
};
const pngSize = rel => {
  const b = fs.readFileSync(path.join(ROOT, rel));
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
};
const size = rel => {
  if (rel.endsWith('.png')) return pngSize(rel);
  if (rel.endsWith('.jpg')) {
    const b = fs.readFileSync(path.join(ROOT, rel));
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xc3) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return { w: 1200, h: 800 };
};

// ---------- shared layout ----------
const NAV = [['Work', '#work'], ['Experience', '#experience'], ['Skills', '#skills'], ['About', '#about'], ['Contact', '#contact']];

const FONTS = ['inter-latin-400-normal', 'inter-latin-500-normal', 'inter-latin-600-normal', 'space-grotesk-latin-500-normal', 'space-grotesk-latin-700-normal'];
const PRELOADS = base => FONTS.map(f => `<link rel="preload" href="${base}assets/fonts/${f}.woff2" as="font" type="font/woff2" crossorigin>`).join('\n');

function layout({ file, title, desc, body, base = '', canonical }) {
  const url = SITE.canonical + canonical;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="theme-color" content="#F5F6F4">
<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
${PRELOADS(base)}
<link rel="stylesheet" href="${base}css/styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="${base}index.html">${esc(SITE.name)}</a>
    <nav aria-label="Main"><ul>
${NAV.map(([l, h]) => `      <li><a href="${base}index.html${h}">${l}</a></li>`).join('\n')}
    </ul></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="container footer-inner">
    <p>${esc(SITE.name)} · Portfolio · 2026</p>
    <p><a href="${base}projects.html">All projects</a> · <a href="#main">Back to top</a></p>
  </div>
</footer>
<script src="${base}js/main.js" defer></script>
</body>
</html>
`;
}

// image helper; first image on a page loads eagerly, others lazily
function img(rel, alt, state, cls = '') {
  const { w, h } = size(rel);
  const eager = !state.used;
  state.used = true;
  return `<img${cls ? ` class="${cls}"` : ''} src="${state.base}${rel}" alt="${esc(alt)}" width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
}

const heroImage = p => p.images.find(i => i.hero && exists('assets/images/' + i.f));
function noteMissingImages(p) {
  for (const i of p.images) if (!exists('assets/images/' + i.f)) missing.push({ page: p.slug, file: 'assets/images/' + i.f, note: 'image' });
}

function buttonFor(p, base, cls = 'btn btn-secondary') {
  const b = p.button;
  if (!b) return '';
  if (b.href) return `<a class="${cls}" href="${esc(b.href)}">${esc(b.label)}</a>`;
  if (b.doc) {
    if (exists('assets/documents/' + b.doc)) return `<a class="${cls}" href="${base}assets/documents/${b.doc}" download>${esc(b.label)}</a>`;
    missing.push({ page: p.slug, file: 'assets/documents/' + b.doc, note: 'document (button hidden until the file exists)' });
    return '';
  }
  if (b.ask) return `<p class="case-btn">${esc(b.label)}: ${t(b.ask)}</p>`;
  return '';
}

const catLink = p => `<span class="cat">${esc(p.cat)}</span>`;

// ---------- index ----------
function renderIndex() {
  page = 'index.html';
  const st = { used: false, base: '' };
  const hasCv = exists('assets/cv.pdf');
  const hasPhoto = exists('assets/me.jpg');
  if (!hasCv) missing.push({ page: 'index.html', file: 'assets/cv.pdf', note: 'CV (Download CV buttons hidden until the file exists)' });
  if (!hasPhoto) missing.push({ page: 'index.html', file: 'assets/me.jpg', note: 'optional square photo under 300 KB' });
  const cv = cls => hasCv ? `<a class="${cls}" href="assets/cv.pdf" download>Download CV</a>` : '';
  const featured = PROJECTS.filter(p => p.featured);
  const more = PROJECTS.filter(p => !p.featured).slice(0, 6);

  const featRow = (p, i) => {
    PROJECTS.indexOf(p);
    noteMissingImages(p);
    const hi = heroImage(p);
    const visual = hi
      ? `<div class="feat-visual">${img('assets/images/' + hi.f, hi.alt, st, 'feat-img')}</div>`
      : p.big
        ? `<div class="feat-visual keyblock huge" role="img" aria-label="${esc('Key result: ' + p.big)}"><p class="stat" aria-hidden="true">${esc(p.big)}</p><p class="keytext">${t(p.key)}</p></div>`
        : `<div class="feat-visual keyblock"><p class="keylabel">Key result</p><p class="keytext">${t(p.key)}</p></div>`;
    const keyInText = hi || p.big ? `<p class="feat-key">${t(p.key)}</p>` : '';
    return `<article class="feat ${i % 2 ? 'feat-left' : 'feat-right'}">
  <div class="feat-text">
    <p class="meta">${catLink(p)} · ${esc(p.date)}</p>
    <h3><a href="projects/${p.slug}.html">${esc(p.title)}</a></h3>
    <p>${esc(p.summary)}</p>
    ${keyInText}
    <p><a class="btn btn-secondary" href="projects/${p.slug}.html">Read the case study<span class="sr-only">: ${esc(p.title)}</span></a></p>
  </div>
  ${visual}
</article>`;
  };

  const timeline = list => `<ol class="timeline">
${list.map(e => `  <li>
    <p class="when">${esc(e.when)}</p>
    <h3>${esc(e.role)}</h3>
    <p class="org">${esc(e.org)}</p>
    <ul>${e.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  </li>`).join('\n')}
</ol>`;

  const body = `
<section class="hero" aria-labelledby="top-title">
  <div class="container hero-inner">
    <div class="hero-text">
      <p class="eyebrow">${esc(SITE.role)}</p>
      <h1 id="top-title">${esc(SITE.h1)}</h1>
      <p class="sub">${esc(SITE.sub)}</p>
      <p>${esc(SITE.intro)}</p>
      <p class="btn-row"><a class="btn btn-primary" href="#work">See selected work</a><a class="btn btn-secondary" href="#contact">Get in touch</a>${cv('btn btn-secondary')}</p>
    </div>
${hasPhoto ? `    <div class="hero-photo">${img('assets/me.jpg', 'Portrait of ' + SITE.name, st, 'photo')}</div>` : ''}
  </div>
</section>

<section class="band" aria-labelledby="focus-title">
  <div class="container">
    <h2 id="focus-title" class="sr-only">Focus areas</h2>
    <div class="cards three">
${D.FOCUS.map(([h, p]) => `      <div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('\n')}
    </div>
  </div>
</section>

<section id="work" class="band alt" aria-labelledby="work-title">
  <div class="container">
    <p class="eyebrow">Selected work</p>
    <h2 id="work-title">Four projects, from problem to result</h2>
    <div class="feat-list">
${featured.map(featRow).join('\n')}
    </div>
  </div>
</section>

<section id="more" class="band" aria-labelledby="more-title">
  <div class="container">
    <p class="eyebrow">More work</p>
    <h2 id="more-title">More projects</h2>
    <div class="cards three">
${more.map(p => { noteMissingImages(p); return `      <article class="card project-card">
        <p class="meta">${catLink(p)} · ${esc(p.date)}</p>
        <h3><a href="projects/${p.slug}.html">${esc(p.title)}</a></h3>
        <p>${esc(p.summary)}</p>
      </article>`; }).join('\n')}
    </div>
    <p class="more-link"><a class="btn btn-secondary" href="projects.html">See all ${PROJECTS.length} projects</a></p>
  </div>
</section>

<section id="experience" class="band alt" aria-labelledby="exp-title">
  <div class="container">
    <p class="eyebrow">Experience and education</p>
    <h2 id="exp-title">Where I have worked and studied</h2>
    <div class="two-col">
      <div><h3 class="col-title">Experience</h3>${timeline(D.EXPERIENCE)}</div>
      <div><h3 class="col-title">Education</h3>${timeline(D.EDUCATION)}</div>
    </div>
  </div>
</section>

<section id="skills" class="band" aria-labelledby="skills-title">
  <div class="container">
    <p class="eyebrow">Skills</p>
    <h2 id="skills-title">What I work with</h2>
    <div class="cards three">
${D.SKILLS.map(([h, p]) => `      <div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('\n')}
    </div>
  </div>
</section>

<section id="awards" class="band alt" aria-labelledby="awards-title">
  <div class="container">
    <p class="eyebrow">Recognition</p>
    <h2 id="awards-title">Awards, leadership, fellowships and certifications</h2>
    <div class="two-col">
      <div>
        <h3 class="col-title">Awards and leadership</h3>
        <ul class="plain">
${D.AWARDS.map(([h, w, d]) => `          <li><strong>${esc(h)}</strong> <span class="when-inline">(${esc(w)})</span>${d ? `<br>${t(d)}` : ''}</li>`).join('\n')}
        </ul>
      </div>
      <div>
        <h3 class="col-title">Fellowships</h3>
        <ul class="plain">${D.FELLOWSHIPS.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
        <h3 class="col-title">Certifications</h3>
        <p>${t(D.CERTS)}</p>
      </div>
    </div>
  </div>
</section>

<section id="about" class="band" aria-labelledby="about-title">
  <div class="container two-col about">
    <div>
      <p class="eyebrow">About</p>
      <h2 id="about-title">${esc(D.ABOUT.heading)}</h2>
${D.ABOUT.paras.map(p => `      <p>${t(p)}</p>`).join('\n')}
    </div>
    <dl class="facts">
${D.ABOUT.facts.map(([k, v]) => `      <div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('\n')}
    </dl>
  </div>
</section>

<section id="contact" class="band alt" aria-labelledby="contact-title">
  <div class="container">
    <p class="eyebrow">Contact</p>
    <h2 id="contact-title">${esc(D.CONTACT.heading)}</h2>
    <p>${esc(D.CONTACT.text)}</p>
    <p>${esc(D.CONTACT.open)}</p>
    <ul class="contact-list">
      <li><span>Email</span> <a href="mailto:${SITE.email}">${SITE.email}</a></li>
      <li><span>GitHub</span> <a href="${SITE.github}">${SITE.githubHandle}</a></li>
      <li><span>LinkedIn</span> <a href="${SITE.linkedin}">saeeda-saeed-salahudeen</a></li>
      <li><span>Location</span> ${esc(SITE.location)}</li>
    </ul>
    <p class="btn-row"><a class="btn btn-primary" href="mailto:${SITE.email}">Email me</a>${cv('btn btn-secondary')}</p>
  </div>
</section>`;
  write('index.html', layout({ title: SITE.title, desc: SITE.description, body, canonical: '' }));
}

// ---------- projects list ----------
function renderProjects() {
  page = 'projects.html';
  const body = `
<section class="band page-head">
  <div class="container">
    <p class="eyebrow">Projects</p>
    <h1>All ${PROJECTS.length} projects</h1>
    <p class="sub">Each case study sets out the problem, what I did, the results and the limits.</p>
    <nav class="filters" aria-label="Filter projects by category"><ul>
      <li><a href="#all" data-filter="all" aria-current="true">All</a></li>
${D.GROUPS.map(([k, l]) => `      <li><a href="#${k}" data-filter="${k}">${esc(l)}</a></li>`).join('\n')}
    </ul></nav>
    <p class="count" id="count" aria-live="polite"></p>
  </div>
</section>
<section class="band alt">
  <div class="container">
    <ul class="project-list">
${PROJECTS.map(p => `      <li class="project-row" data-group="${p.group}">
        <p class="meta">${catLink(p)} · ${esc(p.date)}</p>
        <h2 class="h3"><a href="projects/${p.slug}.html">${esc(p.title)}</a></h2>
        <p>${esc(p.summary)}</p>
      </li>`).join('\n')}
    </ul>
  </div>
</section>`;
  write('projects.html', layout({ title: 'Projects | ' + SITE.name, desc: `All ${PROJECTS.length} projects by ${SITE.name}: forecasting, survey analysis, IoT, data quality and governance, filtered by category.`, body, canonical: 'projects.html' }));
}

// ---------- case studies ----------
function list(items) { return `<ul>${items.map(x => `<li>${t(x)}</li>`).join('')}</ul>`; }
function sec(title, inner) { return inner ? `<section class="case-sec"><h2>${title}</h2>${inner}</section>` : ''; }

function renderCase(p, i) {
  page = `projects/${p.slug}.html`;
  const st = { used: false, base: '../' };
  noteMissingImages(p);
  const hi = heroImage(p);
  const others = p.images.filter(x => x !== hi && exists('assets/images/' + x.f));
  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];
  const btn = buttonFor(p, '../', 'btn btn-primary');
  const body = `
<article class="container narrow case">
  <p><a class="back" href="../projects.html">\u2190 All projects</a></p>
  <p class="meta">${catLink(p)} · ${esc(p.date)}</p>
  <h1>${esc(p.title)}</h1>
  <p class="key-result">${t(p.key)}</p>
${hi ? `  <figure>${img('assets/images/' + hi.f, hi.alt, st)}${hi.cap ? `<figcaption>${esc(hi.cap)}</figcaption>` : ''}</figure>` : ''}
  ${sec('Problem', p.problem && `<p>${t(p.problem)}</p>`)}
  ${sec('What I did', p.did && list(p.did))}
  ${sec('About the data', p.data && `<p>${t(p.data)}</p>`)}
  ${sec('Results', p.results && list(p.results))}
  ${sec('Limits', p.limits && list(p.limits))}
  ${sec('Recommendations', p.recs && list(p.recs))}
  ${sec('Six safeguards', p.safeguardList && `<ol>${p.safeguardList.map(x => `<li>${esc(x)}</li>`).join('')}</ol>`)}
  ${sec('Tools', p.tools && `<ul class="tags">${p.tools.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`)}
${others.length ? `  <section class="case-sec"><h2>More images</h2><div class="gallery">${others.map(x => `<figure>${img('assets/images/' + x.f, x.alt, st)}<figcaption>${esc(x.cap || '')}</figcaption></figure>`).join('')}</div></section>` : ''}
${btn ? `  <p class="case-btn">${btn}</p>` : ''}
  <nav class="prevnext" aria-label="Other projects">
    ${prev ? `<a class="prev" href="${prev.slug}.html"><span>Previous project</span>${esc(prev.title)}</a>` : '<span></span>'}
    ${next ? `<a class="next" href="${next.slug}.html"><span>Next project</span>${esc(next.title)}</a>` : '<span></span>'}
  </nav>
</article>`;
  write(`projects/${p.slug}.html`, layout({ title: `${p.title} | ${SITE.name}`, desc: p.summary, body, base: '../', canonical: `projects/${p.slug}.html` }));
}

// ---------- extras ----------
function renderExtras() {
  page = '404.html';
  const body = `
<section class="band page-head">
  <div class="container narrow">
    <p class="eyebrow">Error 404</p>
    <h1>That page does not exist.</h1>
    <p class="sub">The link may be old or mistyped.</p>
    <p class="btn-row"><a class="btn btn-primary" href="/index.html">Go to the home page</a><a class="btn btn-secondary" href="/projects.html">See all projects</a></p>
  </div>
</section>`;
  // 404 uses absolute paths so it works at any depth
  const html = layout({ title: 'Page not found | ' + SITE.name, desc: 'The page you asked for could not be found.', body, base: '/', canonical: '404.html' });
  write('404.html', html);

  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.canonical}sitemap.xml\n`);
  const urls = ['', 'projects.html', ...PROJECTS.map(p => `projects/${p.slug}.html`)];
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE.canonical}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
  write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0B6B72"/><text x="32" y="43" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#fff">SS</text></svg>\n`);
}

function renderTodo() {
  const seenM = new Set();
  for (let i = missing.length - 1; i >= 0; i--) { const k = missing[i].file; if (seenM.has(k)) missing.splice(i, 1); else seenM.add(k); }
  const seen = new Set();
  const rows = todos.filter(x => { const k = x.page + x.text; if (seen.has(k)) return false; seen.add(k); return true; });
  const leftover = rows.length ? `\n## Unresolved placeholders (should be none)\n\n${rows.map(x => `- \`${x.page}\`: ${x.text}`).join('\n')}\n` : '';
  const md = `# Optional improvements

The site is complete without any of these. Edit text in \`tools/data.mjs\`, put files in \`assets/\`, then run \`node tools/build.mjs\`.

- [ ] **Photo:** add \`assets/me.jpg\` (square, under 300 KB) to show a portrait in the hero.
- [ ] **Certificates:** issuer and year for each certification, and a certificate link if one exists.
- [ ] **Hackathon:** one line on what you built and the problem it solved (Women Transform Rangelands).
- [ ] **IoT telepresence robot:** one measured result (range, latency or sensor accuracy), and a demo video or repository link (then add a button).
- [ ] **Repository links:** the US petroleum supply analysis and the IoT robot.
- [ ] **Power BI series:** screenshots with any private data removed, and a link to the .pbix files or a published report.
- [ ] **SITE_URL:** set \`SITE_URL\` at the top of \`tools/data.mjs\` to your real address (now https://example.com). It feeds the canonical tags, Open Graph tags, sitemap.xml and robots.txt.
${missing.length ? `\n## Files the build could not find\n\n${missing.map(x => `- \`${x.file}\` (${x.note})`).join('\n')}\n` : ''}${leftover}`;
  write('TODO.md', md);
  return rows.length;
}

renderIndex();
renderProjects();
PROJECTS.forEach(renderCase);
renderExtras();
const n = renderTodo();
console.log(`Built ${2 + PROJECTS.length + 1} pages; ${n} placeholders; ${missing.length} missing files.`);
