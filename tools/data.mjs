// Single source of truth for all site content. Edit here, then run: node tools/build.mjs
// Change this one line when you have the real address (no trailing slash).
export const SITE_URL = 'https://example.com';

export const SITE = {
  name: 'Salahudeen Saeeda Saeed',
  role: 'Data Science Fellow, Click-On Kaduna DSFP 6.0',
  h1: 'Data science, machine learning and embedded systems for health.',
  sub: 'First Class engineer who works across the whole span of a data system, from the sensors that produce the readings to the models and surveys that turn them into decisions.',
  intro: 'I forecast electricity demand, build IoT devices for remote care, and turn household surveys into decisions for health planning in Kaduna State.',
  title: 'Salahudeen Saeeda Saeed | Data science, machine learning and embedded systems',
  description: 'Portfolio of Salahudeen Saeeda Saeed: day-ahead electricity demand forecasting, an IoT telepresence robot for remote medical consultation, and survey analysis for health planning in Kaduna State.',
  email: 'saeederh01@gmail.com',
  github: 'https://github.com/saeeda-tech',
  githubHandle: '@saeeda-tech',
  linkedin: 'https://www.linkedin.com/in/saeeda-saeed-salahudeen',
  location: 'Kaduna, Nigeria',
  canonical: SITE_URL + '/',
};

export const FOCUS = [
  ['Forecasting and machine learning', 'Time-series forecasting with gradient boosting, validated with expanding-window backtesting.'],
  ['Embedded systems and IoT', 'ESP32 and Arduino hardware, sensors, telemetry and live dashboards for remote care.'],
  ['Health data and research', 'Survey analysis, desk reviews, data quality and data protection planning for Kaduna State.'],
];

export const ABOUT = {
  heading: 'An engineer who follows the data from sensor to decision',
  paras: [
    'I am a First Class graduate in Information and Communication Engineering (CGPA 4.85/5.00) from the Air Force Institute of Technology, Kaduna. I work across the whole span of a data system, from the embedded sensors that produce the readings to the models that forecast from them.',
    'My day-ahead electricity demand forecasting pipeline outperformed CAISO\u2019s published forecast by 39%. My thesis was an IoT telepresence robot for remote doctor consultation with live vital-sign monitoring.',
    'At KadaHive I built five Power BI dashboards, and at KadICT I build React interfaces. Through the Click-On Kaduna Data Science Fellowship I have summarised the Kaduna State General Household Survey 2020, reviewed the evidence on forecasting malaria in Nigeria, and designed a data quality workflow for field surveys.',
    'I have taught Physics and Mathematics for four years alongside full-time study, and I mentor junior students in web development.',
    'I am looking to deepen my machine learning and research skills through graduate study and fellowships, and to apply them to health and infrastructure problems in Nigeria.',
  ],
  facts: [
    ['Based in', 'Kaduna, Nigeria'],
    ['Degree', 'B.Eng. Information and Communication Engineering, AFIT'],
    ['Result', 'First Class Honours, CGPA 4.85/5.00'],
    ['Graduated', 'July 2026'],
    ['Currently', 'Data Science Fellow, Click-On Kaduna DSFP 6.0; Frontend Developer Intern, KadICT; Physics and Mathematics teacher'],
  ],
};

export const EXPERIENCE = [
  { role: 'Data Science Fellow', org: 'Click-On Kaduna Data Science Fellowship Programme (DSFP 6.0)', when: '2026 to present', points: [
    'Summarised the Kaduna State General Household Survey 2020 across 23 LGAs into a decision-focused insights deck.',
    'Wrote a desk review on forecasting malaria cases in Nigeria from climate and surveillance data.',
    'Designed a data quality workflow for a field survey, built an Excel validation workbook with drop-down lists, and planned NDPR compliance for a Kaduna State MDA.' ] },
  { role: 'Frontend Developer Intern', org: 'KadICT Innovation Hub, Kaduna', when: 'April 2025 to present', points: [
    'Develop responsive web applications and reusable component-based interfaces in React.js, using Git and GitHub.' ] },
  { role: 'Data Analytics Intern', org: 'KadaHive Innovation and Tech Hub, Kaduna', when: 'July to October 2024', points: [
    'Built five interactive Power BI dashboards, including a Crime and Drug Abuse Analytics Dashboard, using DAX to define and compute key performance indicators.',
    'Cleaned and prepared source data in Excel, and presented findings to non-technical stakeholders.' ] },
  { role: 'Physics and Mathematics Teacher', org: 'Ibn Salahudeen Science Schools, Zaria', when: 'April 2022 to present', points: [
    'Teach Physics, Mathematics and Further Mathematics to senior secondary students, with sustained attention to encouraging female students into STEM.' ] },
];

export const EDUCATION = [
  { role: 'B.Eng. Information and Communication Engineering', org: 'Air Force Institute of Technology (AFIT), Kaduna', when: 'April 2022 to July 2026', points: [
    'First Class Honours, CGPA 4.85/5.00.',
    'Thesis: Design and Implementation of an Internet of Things Based Telepresence Robot for Doctor\u2019s Consultation and Health Monitoring.' ] },
];

export const SKILLS = [
  ['Programming', 'Python (pandas, NumPy, scikit-learn, Matplotlib), SQL, R, JavaScript'],
  ['Data science', 'time-series forecasting, gradient boosting, feature engineering, walk-forward validation, permutation importance'],
  ['Analytics and BI', 'Power BI (DAX), Excel, KPI design, statistical analysis, data cleaning'],
  ['Embedded and IoT', 'ESP32, Arduino, sensor integration, UDP telemetry, remote monitoring dashboards'],
  ['Web and tooling', 'HTML, CSS, React.js, Git, GitHub, virtual environments'],
  ['Research and governance', 'desk review, survey interpretation, research design and sampling, AI-assisted literature search with source checking, data quality workflows, Excel data validation, NDPR compliance planning'],
];

export const AWARDS = [
  ['Second place, Women Transform Rangelands Hackathon', '2025', ''],
  ['Amira, Female Chapter Leader, Muslim Students Society of Nigeria (MSSN), AFIT Chapter', 'January to July 2026', 'Elected to lead the female wing, organising religious, welfare and academic support programmes for over 100 members.'],
  ['Volunteer web development mentor, AFIT', '2024 to present', 'Mentor junior students in HTML, CSS, JavaScript and React.'],
];
export const FELLOWSHIPS = [
  'Click-On Kaduna Data Science Fellowship Programme, DSFP 6.0 (current)',
  'AHYEL Tech Fellows, Data Analytics Track (ongoing)',
  '3MMT Next Gen Fellowship, Data Science Track (ongoing)',
  'DeepTech Generative AI Program (completed)',
];
export const CERTS = 'Data Analytics and Visualization; Python for Data Analytics; Business Data Analysis with Python, Excel and Power BI; Web Development; Jobberman Soft Skills.';

export const CONTACT = {
  heading: 'Let us talk',
  text: 'I am open to conversations about health data, research and data governance.',
  open: 'Open to: fully funded graduate study, research assistantships, fellowships and data roles.',
};

export const GROUPS = [
  ['forecasting', 'Forecasting and ML'],
  ['health', 'Health and survey data'],
  ['iot', 'IoT and embedded'],
  ['quality', 'Data quality and governance'],
  ['research', 'Research and policy'],
  ['bi', 'Business intelligence'],
];

const GH = (label = 'See the code on GitHub') => ({ label });

export const PROJECTS = [
  {
    slug: 'electricity-demand-forecasting', group: 'forecasting', featured: true,
    title: 'Day-ahead electricity demand forecasting', cat: 'Machine learning and forecasting', date: '2026',
    summary: 'A leakage-safe day-ahead hourly load forecasting pipeline on US EIA-930 grid data across three balancing authorities: CAISO, PJM and ERCOT.',
    key: '3.5% to 4.3% MAPE using gradient boosting on lag and calendar features alone. It outperformed CAISO\u2019s published day-ahead forecast by 39% and matched PJM\u2019s, without weather inputs.',
    big: '39%',
    problem: 'Grid operators need accurate day-ahead demand forecasts to plan generation and avoid both shortfalls and costly over-supply.',
    did: [
      'Built a leakage-safe pipeline on about 26,000 hourly observations for each of the three balancing authorities.',
      'Validated it with five-fold expanding-window backtesting.',
      'Used gradient boosting on lag and calendar features alone.',
      'Diagnosed the failure in ERCOT as extrapolation beyond training-range demand during the record 2023 summer load, shown by a systematic forecast bias of -1.85%.' ],
    limits: ['No weather inputs were used.', 'The ERCOT forecasts failed at record demand because the model extrapolated beyond its training range.'],
    tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'gradient boosting', 'expanding-window backtesting'],
    images: [],
    button: { label: 'See the code on GitHub', href: 'https://github.com/saeeda-tech/load-forecasting' },
  },
  {
    slug: 'kaduna-household-survey-2020', group: 'health', featured: true, survey: true,
    title: 'Kaduna State General Household Survey 2020: key insights', cat: 'Survey analysis', date: 'November 2026',
    summary: 'I turned the survey report into a decision-focused insights deck covering households, education, fertility, maternal care, child survival, malaria and protection.',
    key: 'Skilled help at birth is 87.1% in Chikun and 4.9% in Soba, against a state average of 29%. The average hides that gap.',
    problem: 'State averages in the 2020 survey hide wide gaps between LGAs, senatorial zones and wealth groups, so they can send resources to the wrong places.',
    did: [
      'Summarised the survey report into a 16-slide key-insights deck.',
      'Showed results by LGA, zone and household wealth, not only for the state.',
      'Separated survey results from interpretation, and labelled the planning implications as interpretation.' ],
    data: 'Run by the Kaduna State Bureau of Statistics with technical support from CRERD. The third in the series and the first with estimates for every LGA. 12,613 households, 14,206 women aged 15 to 49, 7,296 men aged 15 to 49 and 10,361 children under five, in 690 clusters (30 in each of the 23 LGAs). Results are weighted to represent the state, its three senatorial zones and each LGA.',
    results: [
      'Skilled help at birth: 87.1% in Chikun, 4.9% in Soba, 29% for the state.',
      'By household wealth: 73.5% for the richest fifth and 13.3% for the poorest fifth.',
      'Two in three women (66.7%) get antenatal care from a skilled provider, yet only 29% have skilled help at birth.',
      'Zone 1 trails on most indicators.',
      'Only 13% of children with a fever are tested for malaria.' ],
    limits: [
      'Child mortality can only be trusted at state level, because the birth-history data was too weak to go lower.',
      'Vaccination coverage leans on mothers\u2019 recall: cards were shown for 29.6% of children.',
      'Only 11.1% of babies were weighed at birth, so low birth weight is uncertain.' ],
    recs: [
      'Start with Zone 1 and the rural LGAs.',
      'Close the gap between antenatal care and delivery.',
      'Test children with fever before treating them.',
      'Use the LGA estimates to target resources.' ],
    tools: ['PowerPoint'],
    images: [
      { f: 'lga-gap.png', alt: 'Slide showing skilled help at birth by LGA: 87.1% in Chikun and 4.9% in Soba, and by household wealth: 73.5% for the richest fifth and 13.3% for the poorest fifth.', hero: true },
      { f: 'about-the-survey.png', alt: 'Slide listing the survey sample: 12,613 households, 14,206 women, 7,296 men and 10,361 children under five, across 690 clusters in 23 LGAs.', cap: 'The survey sample' },
      { f: 'antenatal-vs-delivery.png', alt: 'Bar chart showing antenatal care from a skilled provider at 66.7% against skilled help at birth at 29%.', cap: 'Antenatal care against skilled help at birth' },
      { f: 'zone-differences.png', alt: 'Table comparing eight indicators across the three senatorial zones, with Zone 1 trailing on most.', cap: 'Differences between the three senatorial zones' },
      { f: 'recommendations.png', alt: 'Four planning implications from the survey, labelled as interpretation.', cap: 'Planning implications (interpretation)' },
    ],
    button: { label: 'Download the key insights deck (PDF)', doc: 'kaduna-ghs-2020-key-insights.pdf' },
  },
  {
    slug: 'iot-telepresence-robot', group: 'iot', featured: true,
    title: 'IoT telepresence robot for remote medical consultation', cat: 'IoT and healthcare technology', date: '2026',
    summary: 'Final-year thesis: a mobile telepresence robot that lets a doctor consult a patient remotely with live vital-sign monitoring.',
    key: 'A working robot on ESP32 and Arduino that streams body temperature, heart rate and SpO2 to a live web dashboard at a 5-second data refresh interval.',
    problem: 'Where medical resources are limited, a doctor cannot always be in the room. A mobile robot with live vital signs lets a doctor consult and monitor a patient remotely.',
    did: [
      'Designed and built the robot on ESP32 and Arduino.',
      'Integrated body temperature, heart rate and SpO2 sensing with a live web dashboard.',
      'Implemented UDP-based telemetry from the remote unit at a 5-second data refresh interval, choosing a connectionless protocol to minimise overhead on constrained embedded hardware.' ],
    tools: ['ESP32', 'Arduino', 'sensor integration', 'UDP telemetry', 'web dashboard'],
    images: [],
    button: null,
  },
  {
    slug: 'data-quality-workflow', group: 'quality', featured: true,
    title: 'Data quality management workflow for a field survey', cat: 'Data quality', date: 'November 2026',
    summary: 'A ten-stage workflow for a household health survey in Kaduna State, from planning and form design to profiling, cleansing, outlier checks and release.',
    key: 'A decision gate sends data that misses its targets back for a root-cause fix. Eight quality dimensions are measured, and the raw data is never overwritten.',
    problem: 'Poor data enters through the collection system, the form design or direct edits to the database. A survey needs controls at every stage, not only cleaning at the end.',
    did: [
      'Designed ten stages: plan and set requirements, design the form, collect, profile, cleanse, transform and enhance, check outliers, measure quality, approve and release, monitor and improve.',
      'Built prevention into the tablet form: dropdown lists, required questions, number limits, a unique household ID and a duplicate warning.',
      'Set a quality target for each critical field and measured eight dimensions: accuracy, consistency, completeness, precision, timeliness, validity, auditability and uniqueness.',
      'Added separation of duty: someone who did not clean the data signs off the release.' ],
    results: ['A workflow diagram with a decision gate and a root-cause loop.', 'Root-cause fixes for common findings, for example blanks mean the question was not required in the form.'],
    limits: ['The quality targets are proposals for discussion. The course gives no fixed numbers.'],
    tools: ['Process design', 'data profiling', 'Excel'],
    images: [{ f: 'dq-workflow.png', alt: 'Flowchart of a ten-stage data quality management workflow with a decision gate and a root-cause loop.', hero: true }],
    button: { label: 'Download the two-page workflow (Word)', doc: 'data-quality-workflow.docx' },
  },
  {
    slug: 'malaria-forecasting-desk-review', group: 'health',
    title: 'Forecasting monthly malaria cases in Nigeria from climate and surveillance data', cat: 'Desk review', date: 'November 2026',
    summary: 'A desk review of forecasting from rainfall, temperature and surveillance data.',
    key: 'Rainfall and temperature carry advance information with lags of one to two months. The evidence does not yet show how much they improve forecasts under honest validation.',
    problem: 'As cited in the review (WHO, 2025), there were an estimated 282 million malaria cases and 610,000 deaths worldwide in 2024, and Nigeria carries roughly 24.3% of cases and 30.3% of deaths. Transmission follows the seasons, which is what makes forecasting possible.',
    did: ['Reviewed the literature on forecasting malaria cases from climate and surveillance data.', 'Identified what the evidence supports and where it is thin.', 'Set out the gap in how forecasts are validated.'],
    results: ['A companion project proposal sets out a study designed to close the validation gap.'],
    tools: ['Literature review', 'evidence synthesis'],
    images: [],
    button: { label: 'Read the desk review (Word)', doc: 'malaria-forecasting-desk-review.docx' },
  },
  {
    slug: 'us-petroleum-supply-analysis', group: 'forecasting',
    title: 'Long-run energy supply analysis: US petroleum products', cat: 'Independent research', date: '2026',
    summary: 'Ninety years of US Energy Information Administration data analysed for trend, seasonality and structural change.',
    key: 'Long-term trend, seasonality, structural decline and the COVID-19 demand disruption analysed in one piece of work.',
    problem: 'Long-run energy supply data hides structural changes and one-off shocks that matter for planning.',
    did: ['Analysed 90 years of US Energy Information Administration data in Python and pandas, producing long-term trend, seasonality and structural decline analyses, including the COVID-19 demand disruption.'],
    tools: ['Python', 'pandas'],
    images: [],
    button: null,
  },
  {
    slug: 'power-bi-dashboard-series', group: 'bi',
    title: 'Power BI dashboard series (KadaHive internship)', cat: 'Business intelligence', date: '2024',
    summary: 'Five interactive business intelligence dashboards built during my data analytics internship.',
    key: 'Five completed dashboards, including a Crime and Drug Abuse Analytics Dashboard, with KPIs defined and computed in DAX.',
    problem: 'Raw sales, marketing and public data is hard to act on without clear KPIs and visual summaries.',
    did: [
      'Built five interactive Power BI dashboards, including a Crime and Drug Abuse Analytics Dashboard, using DAX to define and compute key performance indicators.',
      'Cleaned and prepared source data in Excel and presented findings to non-technical stakeholders.' ],
    tools: ['Power BI', 'DAX', 'Excel'],
    images: [],
    button: null,
  },
  {
    slug: 'ai-tools-research-process', group: 'research', safeguards: true,
    title: 'AI tools across the research process', cat: 'Research methods', date: 'November 2026',
    summary: 'A map of which tool fits which chapter of a study, with a check for each stage and six safeguards for responsible use.',
    key: 'AI supports the researcher. Source checking and research integrity stay with the researcher.',
    problem: 'AI tools can speed up research, but they can also invent sources or hide weak analysis. Each stage of a study needs a different tool and a different check.',
    did: [
      'Introduction: Perplexity and Consensus for background and evidence, ChatGPT for refining objectives.',
      'Literature review: Elicit, ResearchRabbit, SciSpace, Scite and NotebookLM.',
      'Methodology: ChatGPT or Claude to critique designs and questionnaires, KoboToolbox for collection.',
      'Results and analysis: ChatGPT or Julius AI, Google Colab and Power BI, with NVivo or ATLAS.ti for qualitative coding.',
      'Discussion: Claude, ChatGPT and NotebookLM, with the reminder that correlation alone does not establish causation.' ],
    safeguardList: ['Verify references', 'Validate analysis', 'Protect participants', 'Avoid fabrication', 'Keep human judgement', 'Disclose appropriately'],
    tools: ['Elicit', 'Consensus', 'NotebookLM', 'ResearchRabbit', 'Google Colab'],
    images: [
      { f: 'ai-tools-process.png', alt: 'Infographic listing AI tools for each of the five research chapters, with a check for each.', hero: true },
      { f: 'ai-safeguards.png', alt: 'Six safeguards for using AI in research: verify references, validate analysis, protect participants, avoid fabrication, keep human judgement and disclose appropriately.', cap: 'Six safeguards for using AI in research' },
    ],
    button: null,
  },
  {
    slug: 'facility-directory-validation-workbook', group: 'quality',
    title: 'Facility directory validation workbook', cat: 'Excel and data validation', date: 'November 2026',
    summary: 'An Excel workbook that checks a monthly facility update before it goes for validation.',
    key: 'Tested on 25 practice records with planted errors, the three checks flagged all 8 problem rows.',
    problem: 'Four systems held separate facility lists that disagreed. A monthly update needs checks so duplicates, retired categories and unexplained status changes do not enter the directory.',
    did: [
      'Wrote a seven-check validation checklist and built three of the checks in Excel: allowed facility type (CoE, PHC or HC), duplicate facilities (name, LGA and ward) and status against reason for change.',
      'Added drop-down lists with Data Validation for LGA, facility type, status, reason and security status.',
      'Built a summary sheet with pass and fail counts, and a How it works sheet.' ],
    results: [
      '25 practice records (real LGAs and wards, invented facility names) with planted errors.',
      '8 rows flagged: both copies of one duplicate, three invalid facility types, two status and reason conflicts, and one missing status.' ],
    limits: ['The facility rows are practice data, not the real directory. They are practice records only.'],
    tools: ['Excel', 'Data Validation', 'COUNTIF and SUMPRODUCT'],
    images: [],
    button: { label: 'Download the workbook (Excel)', doc: 'facility-directory-validation-workbook.xlsx' },
  },
  {
    slug: 'ndpr-compliance-plan', group: 'quality',
    title: 'NDPR compliance plan for a Kaduna State MDA', cat: 'Data governance', date: 'November 2026',
    summary: 'A ten-stage plan, written as a data controller in a government ministry, department or agency.',
    key: 'Compliance is a programme, not a one-off task: structure, data mapping, lawful basis, policy, rights, security, third parties, training and audit.',
    problem: 'A government body holds staff records, citizens\u2019 contact details and, in some units, health information, and must meet the Nigeria Data Protection Regulation (NDPR).',
    did: [
      'Built on the NDPR and NITDA\u2019s Implementation Framework.',
      'Covered the Data Protection Officer and the unit under the CEO\u2019s office, a data inventory, a lawful basis for each activity, a privacy policy, retention periods and data subject rights.',
      'Added a breach procedure with notice to NITDA within 72 hours, written contracts with third parties, staff training and an annual audit filed by 15 March.' ],
    results: [
      'Penalties noted: 2% of the previous year\u2019s annual gross revenue or \u20a610 million for controllers with more than 10,000 data subjects, and 1% or \u20a62 million for smaller ones.',
      'A note to review the plan against the Nigeria Data Protection Act 2023.' ],
    limits: ['Written as an assumed scenario, so it contains no real organisation\u2019s figures.'],
    tools: ['NDPR', 'data governance'],
    images: [],
    button: { label: 'Read the plan (Word)', doc: 'ndpr-compliance-plan.docx' },
  },
  {
    slug: 'hrhmis-indicators', group: 'health',
    title: 'HRHMIS indicators and the decisions they inform', cat: 'Workforce data', date: 'November 2026',
    summary: 'Five health workforce indicators matched to the decisions they inform.',
    key: 'Each indicator is only as good as its records, so each comes with the quality check that matters most.',
    problem: 'The Kaduna State health workforce is managed on HRHMIS, and decisions on recruitment, deployment and training need indicators that planners can act on.',
    did: [
      'Staff due to retire in the next five years informs the annual recruitment plan.',
      'Cadre mix by facility informs how staff are distributed and deployed across PHCs.',
      'Staff headcount on the base nominal roll informs general staffing decisions.',
      'HRH density (health workers per 1,000 people) informs where to recruit and deploy, and tracks the SDG benchmark of 4.45.',
      'Staff on leave and their replacements informs cover arrangements.' ],
    limits: ['Indicator wording is mine. The course deck gives no formulas.'],
    tools: ['HRHMIS', 'indicators'],
    images: [],
    button: { label: 'Download the indicators (PDF)', doc: 'hrh-indicators.pdf' },
  },
  {
    slug: 'facebook-cambridge-analytica-debate', group: 'research',
    title: 'Facebook\u2013Cambridge Analytica: the case for the motion', cat: 'Policy reasoning', date: 'November 2026',
    summary: 'A 17-slide argument for the motion that the scandal was legal.',
    key: 'Wrong is not automatically the same as illegal.',
    problem: 'In a group debate, our side argued that the scandal was unethical but should be judged action by action against the law and platform rules of the time.',
    did: [
      'Separated ethical from legal and civil from criminal liability.',
      'Set out the timeline: the Graph API, the quiz app, the 2014 changes and the laws that came later (GDPR, NDPR, NDPA).',
      'Acknowledged regulator findings: the UK ICO found breaches of the Data Protection Act 1998, and the US FTC found deceptive practices by Cambridge Analytica.',
      'Explained the penalties as civil and regulatory outcomes, not criminal convictions.' ],
    limits: ['Group work.'],
    tools: ['Legal research', 'debate'],
    images: [],
    button: { label: 'View the debate deck (PowerPoint)', doc: 'group-debate-facebook-cambridge-analytica.pptx' },
  },
];
