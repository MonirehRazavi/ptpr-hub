/* Research map data: built live from PubMed (plus the site's own publication list).
   Every paper that mentions papillary tumour of the pineal region is placed in each
   country where one of its authors works, according to the affiliations printed in PubMed. */
(function () {
  const QUERY = '"papillary tumor of the pineal region"[tiab] OR "papillary tumour of the pineal region"[tiab] OR "papillary tumors of the pineal region"[tiab] OR "papillary tumours of the pineal region"[tiab] OR "papillary tumor of pineal region"[tiab] OR "papillary tumour of pineal region"[tiab] OR "papillary tumor of the pineal"[tiab] OR "papillary tumors of pineal"[tiab] OR "papillary pineal tumor"[tiab] OR "papillary tumor of the pineal gland"[tiab] OR (PTPR[tiab] AND pineal[tiab])';
  const CACHE_KEY = 'ptpr-research-v2', CACHE_DAYS = 3;

  // [map region code, display name, lat, lng, extra name patterns]
  const C = [
    ['US','United States',39.8,-98.6,['USA','U\\.S\\.A','United States','United States of America']],
    ['CA','Canada',56.1,-106.3,['Canada']],
    ['MX','Mexico',23.6,-102.5,['Mexico','México']],
    ['BR','Brazil',-14.2,-51.9,['Brazil','Brasil']],
    ['AR','Argentina',-38.4,-63.6,['Argentina']],
    ['CL','Chile',-35.7,-71.5,['Chile']],
    ['CO','Colombia',4.6,-74.3,['Colombia']],
    ['PE','Peru',-9.2,-75.0,['Peru','Perú']],
    ['VE','Venezuela',6.4,-66.6,['Venezuela']],
    ['CU','Cuba',21.5,-77.8,['Cuba']],
    ['GB','United Kingdom',54.0,-2.5,['United Kingdom','UK','U\\.K','England','Scotland','Wales','Northern Ireland']],
    ['IE','Ireland',53.4,-8.2,['Ireland']],
    ['FR','France',46.6,2.2,['France']],
    ['DE','Germany',51.2,10.4,['Germany','Deutschland']],
    ['NL','Netherlands',52.1,5.3,['Netherlands','The Netherlands']],
    ['BE','Belgium',50.5,4.5,['Belgium']],
    ['CH','Switzerland',46.8,8.2,['Switzerland']],
    ['AT','Austria',47.5,14.6,['Austria']],
    ['IT','Italy',41.9,12.6,['Italy','Italia']],
    ['ES','Spain',40.5,-3.7,['Spain','España']],
    ['PT','Portugal',39.4,-8.2,['Portugal']],
    ['GR','Greece',39.1,21.8,['Greece']],
    ['PL','Poland',51.9,19.1,['Poland']],
    ['CZ','Czechia',49.8,15.5,['Czech Republic','Czechia']],
    ['SK','Slovakia',48.7,19.7,['Slovakia']],
    ['HU','Hungary',47.2,19.5,['Hungary']],
    ['RO','Romania',45.9,24.97,['Romania']],
    ['BG','Bulgaria',42.7,25.5,['Bulgaria']],
    ['RS','Serbia',44.0,21.0,['Serbia']],
    ['HR','Croatia',45.1,15.2,['Croatia']],
    ['SI','Slovenia',46.15,14.99,['Slovenia']],
    ['BA','Bosnia and Herzegovina',43.9,17.7,['Bosnia']],
    ['AL','Albania',41.15,20.17,['Albania']],
    ['DK','Denmark',56.3,9.5,['Denmark']],
    ['SE','Sweden',60.1,18.6,['Sweden']],
    ['NO','Norway',60.5,8.5,['Norway']],
    ['FI','Finland',61.9,25.7,['Finland']],
    ['EE','Estonia',58.6,25.0,['Estonia']],
    ['LT','Lithuania',55.2,23.9,['Lithuania']],
    ['UA','Ukraine',48.4,31.2,['Ukraine']],
    ['RU','Russia',61.5,105.3,['Russia','Russian Federation']],
    ['TR','Türkiye',38.96,35.2,['Turkey','Türkiye','Turkiye']],
    ['IL','Israel',31.0,34.85,['Israel']],
    ['LB','Lebanon',33.85,35.86,['Lebanon']],
    ['JO','Jordan',30.6,36.2,['Jordan']],
    ['SY','Syria',34.8,39.0,['Syria']],
    ['IQ','Iraq',33.2,43.7,['Iraq']],
    ['IR','Iran',32.4,53.7,['Iran']],
    ['SA','Saudi Arabia',23.9,45.1,['Saudi Arabia','Kingdom of Saudi Arabia','KSA']],
    ['AE','United Arab Emirates',23.4,53.8,['United Arab Emirates','UAE']],
    ['QA','Qatar',25.35,51.18,['Qatar']],
    ['KW','Kuwait',29.3,47.5,['Kuwait']],
    ['OM','Oman',21.5,55.9,['Oman']],
    ['PK','Pakistan',30.4,69.3,['Pakistan']],
    ['IN','India',20.6,78.96,['India']],
    ['BD','Bangladesh',23.7,90.4,['Bangladesh']],
    ['NP','Nepal',28.4,84.1,['Nepal']],
    ['LK','Sri Lanka',7.9,80.8,['Sri Lanka']],
    ['TW','Taiwan',23.7,120.96,['Taiwan']],
    ['CN','China',35.9,104.2,['China','P\\.R\\. China','PR China','Hong Kong']],
    ['JP','Japan',36.2,138.25,['Japan']],
    ['KR','South Korea',35.9,127.8,['Korea','Republic of Korea']],
    ['TH','Thailand',15.9,100.99,['Thailand']],
    ['VN','Vietnam',14.06,108.3,['Vietnam','Viet Nam']],
    ['MY','Malaysia',4.2,101.98,['Malaysia']],
    ['SG','Singapore',1.35,103.82,['Singapore']],
    ['ID','Indonesia',-0.8,113.9,['Indonesia']],
    ['PH','Philippines',12.9,121.8,['Philippines']],
    ['AU','Australia',-25.3,133.8,['Australia']],
    ['NZ','New Zealand',-40.9,174.9,['New Zealand']],
    ['EG','Egypt',26.8,30.8,['Egypt']],
    ['MA','Morocco',31.8,-7.1,['Morocco','Maroc']],
    ['TN','Tunisia',33.9,9.5,['Tunisia']],
    ['DZ','Algeria',28.0,1.66,['Algeria']],
    ['LY','Libya',26.3,17.2,['Libya']],
    ['SD','Sudan',12.86,30.2,['Sudan']],
    ['ET','Ethiopia',9.1,40.5,['Ethiopia']],
    ['KE','Kenya',-0.02,37.9,['Kenya']],
    ['NG','Nigeria',9.08,8.68,['Nigeria']],
    ['GH','Ghana',7.95,-1.02,['Ghana']],
    ['SN','Senegal',14.5,-14.45,['Senegal','Sénégal']],
    ['CM','Cameroon',7.37,12.35,['Cameroon']],
    ['TZ','Tanzania',-6.37,34.9,['Tanzania']],
    ['ZA','South Africa',-30.6,22.9,['South Africa']]
  ];
  const BY = {}; C.forEach(c => BY[c[0]] = c);
  const PATS = C.map(c => [c[0], new RegExp('(^|[^A-Za-z])(' + c[4].join('|') + ')(?![A-Za-z])', 'g')]);
  // Last-resort hints for affiliations that name a US state but not the country
  const US_HINT = /\b(Alabama|Arizona|Arkansas|California|Colorado|Connecticut|Florida|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Nebraska|Nevada|New Jersey|New York|North Carolina|Ohio|Oklahoma|Oregon|Pennsylvania|Tennessee|Texas|Utah|Virginia|Washington|Wisconsin|NM state)\b|,\s?[A-Z]{2}\s\d{5}/;

  const EMAIL = /[\w.+-]+@[\w-]+(\.[\w-]+)+/g;
  function cleanAff(s) {
    return s.replace(/Electronic address:?/gi, '').replace(EMAIL, '').replace(/\s*[;,.]\s*$/, '').replace(/\s{2,}/g, ' ').replace(/[\s.;,]+$/, '').trim();
  }
  function countryOf(aff) {
    let s = aff.replace(EMAIL, ' ').replace(/New Mexico/g, 'NM state').replace(/Northern Ireland/g, 'United Kingdom').replace(/New South Wales/g, 'NSW');
    if (/Taiwan/.test(s)) return 'TW';
    let best = null, pos = -1;
    for (const [code, re] of PATS) { re.lastIndex = 0; let m; while ((m = re.exec(s))) { if (m.index >= pos) { pos = m.index; best = code; } } }
    if (!best && US_HINT.test(s)) best = 'US';
    return best;
  }
  const norm = s => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '');
  function emailFits(email, first, last) {
    const local = norm(email.split('@')[0]); const l = norm(last), f = norm(first);
    if (l.length >= 3 && (local.includes(l.slice(0, Math.min(5, l.length))))) return true;
    if (f.length >= 3 && local.includes(f.slice(0, Math.min(5, f.length)))) return true;
    const ini = (f[0] || '') + l; return ini.length > 3 && local.startsWith(ini.slice(0, 4));
  }

  function parsePubmed(xml) {
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    const txt = (el, sel) => { const n = el.querySelector(sel); return n ? n.textContent.trim() : ''; };
    return [...doc.querySelectorAll('PubmedArticle')].map(a => {
      const pmid = txt(a, 'MedlineCitation > PMID');
      const doiEl = [...a.querySelectorAll('ArticleIdList > ArticleId')].find(x => x.getAttribute('IdType') === 'doi');
      const year = txt(a, 'Article Journal JournalIssue PubDate Year') || (txt(a, 'Article Journal JournalIssue PubDate MedlineDate').match(/\d{4}/) || [''])[0] || txt(a, 'ArticleDate Year');
      const authors = [...a.querySelectorAll('AuthorList > Author')].map(au => {
        const last = txt(au, 'LastName'), first = txt(au, 'ForeName'), coll = txt(au, 'CollectiveName');
        const affs = [...au.querySelectorAll('AffiliationInfo > Affiliation')].map(x => { const t = x.textContent.trim(); return { text: t, code: countryOf(t) }; });
        return { last, first, coll, affs };
      }).filter(x => x.last);
      return {
        src: 'PubMed', srcUrl: 'https://pubmed.ncbi.nlm.nih.gov/' + pmid + '/',
        pmid, doi: doiEl ? doiEl.textContent.trim().toLowerCase() : '', year: +year || null,
        title: txt(a, 'ArticleTitle').replace(/\.$/, ''), journal: txt(a, 'Journal > Title') || txt(a, 'MedlineTA'), authors
      };
    });
  }

  function aggregate(papers, extra) {
    const countries = {}; let unplaced = 0;
    const get = code => countries[code] || (countries[code] = { code, name: BY[code][1], coords: [BY[code][2], BY[code][3]], papers: [], people: {} });
    papers.forEach(p => {
      const url = p.doi ? 'https://doi.org/' + p.doi : (p.url || p.srcUrl);
      const lead = p.authors.length ? p.authors[0].last + (p.authors.length > 1 ? ' et al.' : '') : '';
      const ref = { title: p.title, year: p.year, journal: p.journal, url, lead, src: p.src, srcUrl: p.srcUrl };
      const inC = new Set(); let lastC = null;
      p.authors.forEach((au, idx) => {
        let placed = false;
        au.affs.forEach(af => {
          const raw = af.text, code = af.code; if (!code || !BY[code]) return; placed = true; inC.add(code); lastC = code;
          const key = norm(au.last) + '|' + norm(au.first).slice(0, 1);
          const c = get(code); const person = c.people[key] || (c.people[key] = { name: (au.first ? au.first + ' ' : '') + au.last, affs: {}, emails: {}, papers: 0, latest: 0, lastPaper: null });
          if (person._seen !== p.pmid) { person._seen = p.pmid; person.papers++; if ((p.year || 0) >= person.latest) { person.latest = p.year || 0; person.lastPaper = ref; } }
          const aff = cleanAff(raw); if (aff) person.affs[aff] = Math.max(person.affs[aff] || 0, p.year || 0);
          (raw.match(EMAIL) || []).forEach(e => { e = e.replace(/\.$/, '').toLowerCase(); if (emailFits(e, au.first, au.last)) person.emails[e] = Math.max(person.emails[e] || 0, p.year || 0); });
        });
        // Older PubMed records list only the first author's address: assume co-authors work in the same country
        if (!placed && idx > 0) { const f = p.authors[0].affs.find(x => x.code && BY[x.code]); if (f) inC.add(f.code); }
      });
      if (!inC.size) { unplaced++; return; }
      inC.forEach(code => get(code).papers.push(ref));
    });
    (extra || []).forEach(e => { if (!e.code || !BY[e.code]) { unplaced++; return; } get(e.code).papers.push(e.ref); });
    const list = Object.values(countries).map(c => {
      c.papers.sort((a, b) => (b.year || 0) - (a.year || 0));
      c.people = Object.values(c.people).map(p => {
        const affs = Object.entries(p.affs).sort((a, b) => b[1] - a[1]);
        const emails = Object.entries(p.emails).sort((a, b) => b[1] - a[1]);
        return { name: p.name, aff: affs.length ? affs[0][0] : '', affYear: affs.length ? affs[0][1] : null, email: emails.length ? emails[0][0] : '', emailYear: emails.length ? emails[0][1] : null, papers: p.papers, latest: p.latest, lastPaper: p.lastPaper };
      }).sort((a, b) => (b.papers - a.papers) || (b.latest - a.latest) || a.name.localeCompare(b.name));
      return c;
    }).sort((a, b) => b.papers.length - a.papers.length || a.name.localeCompare(b.name));
    return { countries: list, total: papers.length + (extra || []).length, extra: (extra || []).length, unplaced, built: Date.now() };
  }

  // OpenAlex (openalex.org): an open index of scholarly works that also covers journals, books and
  // conference abstracts that PubMed does not index. Institutions come with ISO country codes.
  const OA_QUERIES = ['"papillary tumor of the pineal region"', '"papillary tumour of the pineal region"', '"papillary tumors of the pineal region"', '"papillary tumours of the pineal region"', '"papillary tumor of pineal region"', '"papillary tumor of the pineal"', '"papillary pineal tumor"'];
  const OA_TYPES = new Set(['article', 'review', 'book-chapter', 'conference-paper', 'conference-abstract', 'preprint', 'letter', 'editorial', 'report', 'dissertation', 'book']);
  async function fetchOpenAlex() {
    const works = new Map();
    await Promise.all(OA_QUERIES.map(async q => {
      let cursor = '*', guard = 0;
      while (cursor && guard++ < 10) {
        const u = 'https://api.openalex.org/works?per_page=200&cursor=' + encodeURIComponent(cursor) + '&filter=title_and_abstract.search:' + encodeURIComponent(q) + '&select=id,doi,ids,title,publication_year,type,primary_location,authorships';
        const r = await (await fetch(u)).json();
        (r.results || []).forEach(w => works.set(w.id, w));
        if (!(r.results || []).length) break; cursor = r.meta && r.meta.next_cursor;
      }
    }));
    return [...works.values()];
  }
  function oaToPaper(w) {
    const loc = w.primary_location || {}; const doi = (w.doi || '').replace(/^https?:\/\/doi\.org\//i, '').toLowerCase();
    return {
      src: 'OpenAlex', srcUrl: w.id, pmid: '', doi, year: w.publication_year || null, url: doi ? '' : (loc.landing_page_url || w.id),
      title: (w.title || '').replace(/<[^>]+>/g, '').replace(/\.$/, ''), journal: (loc.source && loc.source.display_name) || '',
      authors: (w.authorships || []).map(a => {
        const nm = (a.author && a.author.display_name) || ''; const parts = nm.trim().split(/\s+/);
        const affs = (a.institutions || []).filter(i => i.country_code).map(i => ({ text: i.display_name + (BY[i.country_code] ? ', ' + BY[i.country_code][1] : ''), code: i.country_code }));
        if (!affs.length && (a.countries || []).length) affs.push({ text: '', code: a.countries[0] });
        return { last: parts.slice(-1)[0] || nm, first: parts.slice(0, -1).join(' '), affs };
      }).filter(x => x.last)
    };
  }
  const tnorm = t => (t || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]/g, '');

  // Papers on the site that PubMed does not index: place them with the registry's country, where known
  function extras(pmDois, seenT) {
    const pubs = window.PTPR_PUBS || [], cases = window.PTPR_CASES || [];
    const nameToCode = {}; C.forEach(c => { nameToCode[c[1].toLowerCase()] = c[0]; });
    nameToCode['türkiye'] = 'TR'; nameToCode['turkey'] = 'TR'; nameToCode['south korea'] = 'KR';
    const out = [];
    pubs.forEach(p => {
      const u = (p.url || '').toLowerCase(); const doi = u.includes('doi.org/') ? u.split('doi.org/')[1] : '';
      if (u.includes('pubmed.ncbi.nlm.nih.gov') || (doi && pmDois.has(doi)) || (seenT && seenT.has(tnorm(p.title) + '|' + p.year))) return;
      const cs = cases.find(c => c.source && (c.source.url || '').toLowerCase() === u);
      const code = cs ? nameToCode[(cs.country || '').toLowerCase()] : null;
      out.push({ code, ref: { title: p.title, year: p.year, journal: p.journal, url: p.url, lead: p.authors || '', src: 'This site', srcUrl: '#publications' } });
    });
    return out;
  }

  async function build() {
    try { const c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); if (c && Date.now() - c.built < CACHE_DAYS * 864e5) return c; } catch (e) {}
    const base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
    const s = await (await fetch(base + 'esearch.fcgi?db=pubmed&retmode=json&retmax=2000&term=' + encodeURIComponent(QUERY))).json();
    const ids = s.esearchresult.idlist; let papers = [];
    for (let i = 0; i < ids.length; i += 200) {
      const body = new URLSearchParams({ db: 'pubmed', retmode: 'xml', id: ids.slice(i, i + 200).join(',') });
      const r = await fetch(base + 'efetch.fcgi', { method: 'POST', body });
      if (!r.ok) throw new Error('PubMed ' + r.status);
      papers = papers.concat(parsePubmed(await r.text()));
    }
    let oa = [];
    try { oa = await fetchOpenAlex(); } catch (e) { oa = []; }
    const byPmid = {}; oa.forEach(w => { const id = w.ids && w.ids.pmid ? String(w.ids.pmid).replace(/\D/g, '') : ''; if (id) byPmid[id] = w; });
    // Older PubMed records often print no address: borrow the institutions OpenAlex has for the same paper
    papers.forEach(p => { if (!p.authors.some(a => a.affs.some(x => x.code)) && byPmid[p.pmid]) { const q = oaToPaper(byPmid[p.pmid]); if (q.authors.some(a => a.affs.length)) p.authors = q.authors; } });
    const seenDoi = new Set(papers.map(p => p.doi).filter(Boolean)), seenT = new Set(papers.map(p => tnorm(p.title) + '|' + p.year));
    const pmids = new Set(papers.map(p => p.pmid));
    oa.forEach(w => {
      const id = w.ids && w.ids.pmid ? String(w.ids.pmid).replace(/\D/g, '') : '';
      if ((id && pmids.has(id)) || !OA_TYPES.has(w.type) || !w.title) return;
      const q = oaToPaper(w); const k = tnorm(q.title) + '|' + q.year;
      if ((q.doi && seenDoi.has(q.doi)) || seenT.has(k)) return;
      if (q.doi) seenDoi.add(q.doi); seenT.add(k); papers.push(q);
    });
    const data = aggregate(papers, extras(seenDoi, seenT));
    data.pubmed = pmids.size; data.openalex = papers.length - pmids.size;
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch (e) {}
    return data;
  }

  window.PTPR_RESEARCH = { build, countryOf, QUERY };
})();
