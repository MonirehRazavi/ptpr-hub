/* =====================================================================
   PTPR Hub – editable content
   ---------------------------------------------------------------------
   Everything that changes often lives in this one file so it can be
   edited without touching index.html. Each entry is plain JavaScript:
   keep the commas, quote the text, and the site will pick it up on the
   next page load.
   ===================================================================== */

window.PTPR_DATA = {

  /* Last time a human reviewed the content on this site. Shown in the footer. */
  lastReviewed: "2026-11-09",

  /* Contact address shown on the Support, Stories and Contribute pages.
     Replace with the address you want people to write to. */
  contactEmail: "monirazav@gmail.com",

  /* -------------------------------------------------------------------
     TIMELINE – how PTPR came to be recognised.
     type: "science" | "who" | "treatment" | "molecular"
     ------------------------------------------------------------------- */
  timeline: [
    {
      year: "Before 2003",
      type: "science",
      title: "Unusual papillary tumours seen, but given other names",
      text: "Pathologists occasionally described pineal-region tumours with a papillary (finger-like) pattern, but they were filed under existing labels such as papillary ependymoma, choroid plexus papilloma or 'papillary pineocytoma'. Many of those older cases are now thought to have been PTPR.",
      source: { label: "Koziarski et al., 2014 (review)", url: "https://pubmed.ncbi.nlm.nih.gov/25440015/" }
    },
    {
      year: "2003",
      type: "science",
      title: "PTPR is named for the first time",
      text: "Anne Jouvet and colleagues in Lyon, France, publish six cases in the American Journal of Surgical Pathology and propose 'papillary tumor of the pineal region' as a distinct entity. They suggest it arises from specialised ependymal cells of the subcommissural organ, a tiny structure next to the pineal gland, rather than from the pineal gland itself.",
      source: { label: "Jouvet A et al. Am J Surg Pathol 2003;27:505-512", url: "https://pubmed.ncbi.nlm.nih.gov/12657936/" }
    },
    {
      year: "2006",
      type: "science",
      title: "First multicentre series: 31 patients",
      text: "A French-German collaboration pools 31 cases. Gross total removal was achieved in 21 of 31 patients; even so, most tumours came back. Five-year overall survival was about 73% and five-year progression-free survival about 27%, establishing PTPR as a tumour that recurs locally and needs long follow-up.",
      source: { label: "Fèvre-Montange M et al. J Neuropathol Exp Neurol 2006;65:1004-1011", url: "https://doi.org/10.1097/01.jnen.0000240462.80263.13" }
    },
    {
      year: "2007",
      type: "who",
      title: "Added to the WHO Classification of CNS Tumours (4th edition)",
      text: "The World Health Organization formally recognises PTPR as a new tumour type, listed among pineal parenchymal tumours with the ICD-O code 9395/3. The WHO definition: 'a rare neuroepithelial tumor of the pineal region in adults, characterized by papillary architecture and epithelial cytology, immunopositivity for cytokeratin and ultrastructural features suggesting ependymal differentiation'. Grading criteria were left open (grade II or III).",
      source: { label: "Louis DN et al. Acta Neuropathol 2007;114:97-109", url: "https://doi.org/10.1007/s00401-007-0243-4" }
    },
    {
      year: "2008",
      type: "science",
      title: "Characteristic MRI appearance described",
      text: "Radiologists describe what PTPR tends to look like on MRI: a well-defined pineal-region mass, often with cysts, variable T1 signal and heterogeneous contrast enhancement. There is no single 'pathognomonic' sign, so tissue diagnosis remains essential.",
      source: { label: "Chang AH et al. AJNR Am J Neuroradiol 2008;29:187-189", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22MR+imaging+of+papillary+tumor+of+the+pineal+region%22" }
    },
    {
      year: "2011",
      type: "molecular",
      title: "A shared chromosomal signature",
      text: "Cytogenetic work shows that PTPRs share a common pattern of chromosomal gains and losses, supporting the idea that they are one biological entity rather than a mixed bag of look-alikes.",
      source: { label: "Gutenberg A et al. Brain Pathol 2011", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Common+molecular+cytogenetic+pathway+in+papillary+tumors+of+the+pineal+region%22" }
    },
    {
      year: "2013",
      type: "treatment",
      title: "Largest treatment study to date: 44 patients",
      text: "An international multicentre study analyses 44 patients. Gross total resection and younger age were linked to longer survival; radiotherapy and chemotherapy showed no statistically significant effect in this retrospective series. The authors stress the high recurrence risk and the importance of complete removal where safely possible.",
      source: { label: "Fauchon F et al. J Neurooncol 2013;112:223-231", url: "https://pubmed.ncbi.nlm.nih.gov/23314823/" }
    },
    {
      year: "2013",
      type: "science",
      title: "Proliferation predicts behaviour",
      text: "Higher mitotic and proliferative activity under the microscope is associated with a worse prognosis, giving pathologists a first handle on which PTPRs are more likely to behave aggressively.",
      source: { label: "Heim S et al. Am J Surg Pathol 2014;38:106-110", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Increased+mitotic+and+proliferative+activity+are+associated+with+worse+prognosis+in+papillary+tumors+of+the+pineal+region%22" }
    },
    {
      year: "2016",
      type: "molecular",
      title: "PTPR is 'a distinct molecular entity'",
      text: "DNA methylation profiling of 24 tumours shows PTPR has its own molecular fingerprint, clearly separable from ependymoma and other pineal tumours. Loss of chromosome 10 was found in every tumour tested. Two methylation subgroups (later called PTPR-A and PTPR-B) are described; group B tends toward shorter progression-free survival.",
      source: { label: "Heim S et al. Brain Pathol 2016;26:199-205", url: "https://pubmed.ncbi.nlm.nih.gov/26113311/" }
    },
    {
      year: "2016",
      type: "who",
      title: "WHO revised 4th edition keeps PTPR",
      text: "The 2016 update of the WHO classification retains PTPR among pineal tumours as molecular diagnostics start to reshape brain-tumour classification.",
      source: { label: "Louis DN et al. Acta Neuropathol 2016;131:803-820", url: "https://doi.org/10.1007/s00401-016-1545-1" }
    },
    {
      year: "2019",
      type: "treatment",
      title: "Patient-level meta-analysis of all published cases",
      text: "A Brazilian team pools every published case with individual data (2003 to 2017). About 89% presented with hydrocephalus; surgery was performed in 82% and total removal achieved in 71%. Roughly 57% recurred, at a median of 28 months. Tumour size and having surgery were associated with 36-month survival.",
      source: { label: "Yamaki VN et al. Neurosurgery 2019", url: "https://pubmed.ncbi.nlm.nih.gov/30989225/" }
    },
    {
      year: "2019",
      type: "treatment",
      title: "Systematic review of radiotherapy",
      text: "Italian radiation oncologists review all reports of radiotherapy for PTPR. About 72% of published patients had received radiation in some form, but schedules and timing varied widely and no consensus existed.",
      source: { label: "Lancia A et al. Clin Neurol Neurosurg 2020;190:105646", url: "https://www.sciencedirect.com/science/article/abs/pii/S0303846719304421" }
    },
    {
      year: "2021",
      type: "who",
      title: "WHO CNS5: PTPR is CNS WHO grade 2 or 3",
      text: "The fifth edition of the WHO classification lists five pineal tumour types: pineocytoma, pineal parenchymal tumour of intermediate differentiation, pineoblastoma, papillary tumour of the pineal region, and the newly added desmoplastic myxoid tumour of the pineal region (SMARCB1-mutant). PTPR is assigned CNS WHO grade 2 or 3, and DNA methylation profiling is recognised as a key diagnostic tool.",
      source: { label: "Louis DN et al. Neuro-Oncology 2021;23:1231-1251", url: "https://pubmed.ncbi.nlm.nih.gov/34185076/" }
    },
    {
      year: "2024",
      type: "molecular",
      title: "76 cases profiled at the US National Cancer Institute",
      text: "The largest molecular series so far confirms the PTPR-A and PTPR-B subtypes and shows that some tumours with a PTPR methylation profile arise outside the immediate pineal region (cerebellum, brainstem, thalamus). Among 31 patients with follow-up, median progression-free survival was 63 months.",
      source: { label: "Wu Z et al. Acta Neuropathol Commun 2024", url: "https://doi.org/10.1186/s40478-024-01781-4" }
    },
    {
      year: "2025",
      type: "molecular",
      title: "A possible inherited link in one patient",
      text: "A case report describes a PTPR diagnosed by DNA methylation in a person who turned out to carry a germline PTEN mutation (PTEN hamartoma tumour syndrome). It is a single case, but it adds to earlier hints that the PTEN/PI3K pathway matters in PTPR.",
      source: { label: "Current Oncology 2025;32:172", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11941023/" }
    },
    {
      year: "2026",
      type: "science",
      title: "Review of every reported child with PTPR",
      text: "A review collects 35 paediatric cases published to date. Even after gross total resection, recurrence or regrowth was reported in about 39-44% of children, and the authors argue for long-term adjuvant strategies and risk stratification in younger patients.",
      source: { label: "Balci Topuz et al. Asia-Pac J Clin Oncol 2026;22:625-639", url: "https://onlinelibrary.wiley.com/doi/10.1111/ajco.70010" }
    }
  ],

  /* -------------------------------------------------------------------
     WORLD MAP – places from which PTPR cases have been PUBLISHED.
     This is a map of the medical literature, not a registry of every
     patient. Coordinates are [latitude, longitude] of the reporting
     centre's city. Add a new entry whenever a new paper appears.
     ------------------------------------------------------------------- */
  cases: [
    { country: "France", city: "Lyon", coords: [45.764, 4.8357],
      note: "Where PTPR was first described (6 cases, 2003) and co-ordinating centre of the 31-patient (2006) and 44-patient (2013) multicentre series.",
      sources: ["Jouvet 2003", "Fèvre-Montange 2006", "Fauchon 2013"] },
    { country: "Germany", city: "Münster / Heidelberg", coords: [51.9607, 7.6261],
      note: "Centre of the molecular work that defined PTPR as a distinct methylation entity (24 tumours, 2016) and linked proliferation to prognosis.",
      sources: ["Heim 2014", "Heim 2016", "Fauchon 2013"] },
    { country: "United States", city: "Bethesda, MD (NCI)", coords: [38.9847, -77.0947],
      note: "Largest molecular series to date (76 cases, 2024), plus early US case reports and the MD Anderson surgery-and-radiotherapy series.",
      sources: ["Wu 2024", "Dagnew 2007", "Chang 2008", "Edson 2015"] },
    { country: "Canada", city: "Quebec", coords: [46.8139, -71.208],
      note: "Case report of a man in his late 60s treated with surgery and postoperative radiotherapy, with a review of presenting symptoms.",
      sources: ["Royal-Preyra & Boucher 2025"] },
    { country: "United Kingdom", city: "Cambridge", coords: [52.2053, 0.1218],
      note: "Contributing centre to the 2013 international multicentre treatment study.",
      sources: ["Fauchon 2013"] },
    { country: "Japan", city: "Sendai / Tokyo", coords: [38.2682, 140.8694],
      note: "Early Japanese case reports (2007) and contributing centres to the 2013 multicentre study.",
      sources: ["Kawahara 2007", "Ishida 2012", "Fauchon 2013"] },
    { country: "India", city: "Mumbai / New Delhi / Chandigarh", coords: [19.076, 72.8777],
      note: "Several three-case series from Indian neuropathology departments, among the earliest from South Asia.",
      sources: ["Epari 2011", "Sharma 2011", "Radotra 2015", "Patil 2016"] },
    { country: "Poland", city: "Warsaw", coords: [52.2297, 21.0122],
      note: "Histopathological pattern series and a two-case surgical report with literature review.",
      sources: ["Matyja 2011", "Koziarski 2014", "Nowicka 2016"] },
    { country: "Brazil", city: "São Paulo", coords: [-23.5505, -46.6333],
      note: "Home of the 2019 patient-level meta-analysis that pooled all published cases.",
      sources: ["Vieira Júnior 2011", "Yamaki 2018", "Yamaki 2019"] },
    { country: "Australia", city: "Brisbane / Perth", coords: [-27.4698, 153.0251],
      note: "Early Australian description (2006) and a 72-case literature review (2011).",
      sources: ["Kern 2006", "Poulgrain 2011"] },
    { country: "Saudi Arabia", city: "Riyadh", coords: [24.7136, 46.6753],
      note: "Series of three children treated at King Fahad Medical City, including methylation subgroup results.",
      sources: ["KFMC series 2022"] },
    { country: "Iran", city: "Mashhad / Shiraz", coords: [36.2605, 59.6168],
      note: "Case report with leptomeningeal seeding (2024) and an earlier 73-patient literature review from Shiraz.",
      sources: ["Nasrollahi 2016", "Anvari 2024"] },
    { country: "China", city: "Shanghai", coords: [31.2304, 121.4737],
      note: "Case report in a 10-year-old girl with literature review (93 prior cases counted in 2015).",
      sources: ["Hua 2015"] },
    { country: "South Korea", city: "Seoul", coords: [37.5665, 126.978],
      note: "Report of PTPR presenting with leptomeningeal seeding.",
      sources: ["Kim 2010"] },
    { country: "Türkiye", city: "Istanbul", coords: [41.0082, 28.9784],
      note: "2026 paediatric case report and review of all 35 children reported with PTPR.",
      sources: ["Balci Topuz 2026"] },
    { country: "Switzerland", city: "Zurich", coords: [47.3769, 8.5417],
      note: "Paediatric series asking whether to observe or treat after gross total resection.",
      sources: ["Abela 2012"] },
    { country: "Slovenia", city: "Ljubljana", coords: [46.0569, 14.5058],
      note: "Early European case report; contributing centre to the 2013 multicentre study.",
      sources: ["Jeruc & Popovic 2008", "Fauchon 2013"] },
    { country: "Italy", city: "Rome / Florence / Palermo", coords: [41.9028, 12.4964],
      note: "Case reports and the 2019 systematic review of radiotherapy for PTPR.",
      sources: ["Santoro 2011", "Lancia 2019", "Cuccia 2025"] }
  ],

  /* Running totals of PTPR cases counted in published literature reviews.
     Add a point whenever a new review publishes a new total. */
  caseCountHistory: [
    { year: 2003, count: 6,   source: "Jouvet et al. 2003 (first series)", url: "https://pubmed.ncbi.nlm.nih.gov/12657936/" },
    { year: 2006, count: 31,  source: "Fèvre-Montange et al. 2006 (multicentre series)", url: "https://doi.org/10.1097/01.jnen.0000240462.80263.13" },
    { year: 2009, count: 58,  source: "Sharma et al. 2009 / Matyja et al. 2011 reviews", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Papillary+tumor+of+the+pineal+region%22+review+2009" },
    { year: 2011, count: 79,  source: "Gutenberg et al. 2011", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Common+molecular+cytogenetic+pathway+in+papillary+tumors+of+the+pineal+region%22" },
    { year: 2015, count: 93,  source: "Hua et al. 2015 review", url: "https://pubmed.ncbi.nlm.nih.gov/26622493/" },
    { year: 2024, count: 108, source: "Pang et al. 2024 (105 literature + 3 new)", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Determination+of+Optimal+Treatment+Plan+for+Papillary+Tumor+of+the+Pineal+Region%22" }
  ],

  /* Regional breakdown from the 2016 Shiraz literature review (73 patients). */
  regionSummary: {
    source: { label: "Nasrollahi H et al. Rep Radiother Oncol 2016", url: "https://brieflands.com/articles/rro-68372" },
    rows: [
      ["Europe", 25], ["North America", 21], ["Asia", 18],
      ["Australia", 3], ["Brazil", 2], ["Middle East (Saudi Arabia)", 1], ["Country not stated", 3]
    ]
  },

  /* -------------------------------------------------------------------
     LANDMARK PUBLICATIONS – curated list, always shown. The live feed
     below it is pulled automatically from PubMed / Europe PMC.
     ------------------------------------------------------------------- */
  keyPapers: [
    { year: 2003, authors: "Jouvet A, Fauchon F, Liberski P, et al.", title: "Papillary tumor of the pineal region.", journal: "Am J Surg Pathol 27:505-512", url: "https://pubmed.ncbi.nlm.nih.gov/12657936/", tag: "First description" },
    { year: 2006, authors: "Fèvre-Montange M, Hasselblatt M, Figarella-Branger D, et al.", title: "Prognosis and histopathologic features in papillary tumors of the pineal region: a retrospective multicenter study of 31 cases.", journal: "J Neuropathol Exp Neurol 65:1004-1011", url: "https://doi.org/10.1097/01.jnen.0000240462.80263.13", tag: "Prognosis" },
    { year: 2008, authors: "Chang AH, Fuller GN, Debnam JM, et al.", title: "MR imaging of papillary tumor of the pineal region.", journal: "AJNR Am J Neuroradiol 29:187-189", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22MR+imaging+of+papillary+tumor+of+the+pineal+region%22", tag: "Imaging" },
    { year: 2012, authors: "Abela L, Rushing EJ, Ares C, et al.", title: "Pediatric papillary tumors of the pineal region: to observe or to treat following gross total resection?", journal: "Childs Nerv Syst", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Pediatric+papillary+tumors+of+the+pineal+region%3A+to+observe+or+to+treat+following+gross+total+resection%22", tag: "Children" },
    { year: 2013, authors: "Fauchon F, Hasselblatt M, Jouvet A, et al.", title: "Role of surgery, radiotherapy and chemotherapy in papillary tumors of the pineal region: a multicenter study.", journal: "J Neurooncol 112:223-231", url: "https://doi.org/10.1007/s11060-013-1050-5", tag: "Treatment" },
    { year: 2014, authors: "Heim S, Beschorner R, Mittelbronn M, et al.", title: "Increased mitotic and proliferative activity are associated with worse prognosis in papillary tumors of the pineal region.", journal: "Am J Surg Pathol 38:106-110", url: "https://pubmed.ncbi.nlm.nih.gov/?term=%22Increased+mitotic+and+proliferative+activity+are+associated+with+worse+prognosis+in+papillary+tumors+of+the+pineal+region%22", tag: "Prognosis" },
    { year: 2016, authors: "Heim S, Sill M, Jones DTW, et al.", title: "Papillary tumor of the pineal region: a distinct molecular entity.", journal: "Brain Pathol 26:199-205", url: "https://doi.org/10.1111/bpa.12282", tag: "Molecular" },
    { year: 2019, authors: "Yamaki VN, Solla DJF, Ribeiro RR, et al.", title: "Papillary tumor of the pineal region: systematic review and analysis of prognostic factors.", journal: "Neurosurgery", url: "https://doi.org/10.1093/neuros/nyz062", tag: "Meta-analysis" },
    { year: 2020, authors: "Lancia A, Becherini C, Detti B, et al.", title: "Radiotherapy for papillary tumor of the pineal region: a systematic review of the literature.", journal: "Clin Neurol Neurosurg 190:105646", url: "https://www.sciencedirect.com/science/article/abs/pii/S0303846719304421", tag: "Radiotherapy" },
    { year: 2021, authors: "Louis DN, Perry A, Wesseling P, et al.", title: "The 2021 WHO Classification of Tumors of the Central Nervous System: a summary.", journal: "Neuro-Oncology 23:1231-1251", url: "https://pubmed.ncbi.nlm.nih.gov/34185076/", tag: "WHO classification" },
    { year: 2024, authors: "Wu Z, Dazelle K, Aldape K, et al.", title: "Papillary tumor of the pineal region: analysis of DNA methylation profiles and clinical outcomes in 76 cases.", journal: "Acta Neuropathol Commun", url: "https://doi.org/10.1186/s40478-024-01781-4", tag: "Molecular" },
    { year: 2026, authors: "Balci Topuz et al.", title: "Papillary tumors of the pineal region (PTPR) in pediatric population: a case report and literature review.", journal: "Asia-Pac J Clin Oncol 22:625-639", url: "https://onlinelibrary.wiley.com/doi/10.1111/ajco.70010", tag: "Children" }
  ],

  /* Search terms used for the live feed. */
  pubmedQuery: '("papillary tumor of the pineal region"[Title/Abstract] OR "papillary tumour of the pineal region"[Title/Abstract] OR "papillary tumors of the pineal region"[Title/Abstract] OR "papillary tumours of the pineal region"[Title/Abstract])',
  europePmcQuery: '("papillary tumor of the pineal region" OR "papillary tumour of the pineal region" OR "papillary tumors of the pineal region")',
  clinicalTrialsQuery: 'pineal region tumor',

  /* -------------------------------------------------------------------
     SUPPORT – organisations that help people with rare brain tumours.
     No PTPR-specific patient organisation exists yet (as of Nov 2026);
     this site aims to become that meeting place.
     ------------------------------------------------------------------- */
  support: [
    { name: "American Brain Tumor Association (ABTA)", region: "USA / international", url: "https://www.abta.org/", what: "Free CareLine (800-886-2282, 8:30 am to 5 pm Central, or info@abta.org), a patient-and-caregiver mentor programme, online community, help finding treatment centres and clinical trials." },
    { name: "Brain Tumour Foundation of Canada", region: "Canada", url: "https://www.braintumour.ca/", what: "Support line, virtual support groups across Canada, information for newly diagnosed adults and families." },
    { name: "The Brain Tumour Charity", region: "UK / international", url: "https://www.thebraintumourcharity.org/", what: "Support line, online communities, 'BRIAN' app for tracking your own experience, and information written for patients." },
    { name: "Pediatric Brain Tumor Foundation", region: "USA / international", url: "https://curethekids.org/", what: "Family support, an active Facebook community where parents of children with rare pineal tumours have found one another." },
    { name: "Mayo Clinic Connect – Brain Tumor group", region: "Online", url: "https://connect.mayoclinic.org/group/brain-tumor/", what: "Moderated patient forum where people compare notes on rare diagnoses and treatment centres." },
    { name: "Cancer Survivors Network (American Cancer Society)", region: "Online", url: "https://csn.cancer.org/", what: "Peer forum; at least one thread has been started by a person diagnosed with grade 3 PTPR." },
    { name: "RareConnect (EURORDIS)", region: "Online / Europe", url: "https://www.rareconnect.org/", what: "Platform for creating a moderated community around any rare disease, in several languages." },
    { name: "National Cancer Institute – Rare Brain and Spine Tumor Network", region: "USA / international", url: "https://www.cancer.gov/rare-brain-spine-tumor", what: "Information on pineal region tumours, free consultation and natural-history study (NCI-CONNECT) for people with rare CNS tumours." }
  ],

  /* -------------------------------------------------------------------
     STORIES – survivor interviews and a place to remember those who died.
     Leave the arrays empty until you have written consent to publish.
     ------------------------------------------------------------------- */
  survivorStories: [
    /* Example shape:
    { name: "A.", age: 34, country: "Canada", diagnosed: 2021, headline: "Ten months of headaches before anyone looked", text: "..." }
    */
  ],
  inMemory: [
    /* Example shape:
    { name: "Full name", years: "1979-2023", country: "France", words: "Loved cycling and bad puns.", imageDataUri: "" }
    */
  ]
};
