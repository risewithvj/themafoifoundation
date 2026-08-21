// All program pages generate from this list via src/pages/programs/[slug].astro.
// Content is drawn from 02-CONTENT-AND-IMAGE-MAP.md (source of truth: The_Ma_Foi_Foundation.pdf).
// `folders` = image folder keys in src/data/images.json; thin folders are supplemented with
// 'general' contextual photos (decision approved by client). `review: true` = copy needs sign-off.

export const programs = [
  // ---------------- DISHA (founding flagship — listed first) ----------------
  {
    slug: 'disha-scholarship',
    title: 'DISHA Scholarship Program',
    vertical: 'disha',
    summary: 'Full higher-education scholarships for meritorious students from economically disadvantaged families.',
    stats: [
      { value: '200', label: 'Beneficiaries' },
      { value: 'Since 2018', label: 'Ongoing' },
      { value: 'Chennai', label: 'Location' },
    ],
    body: [
      'DISHA is The Ma Foi Foundation’s founding flagship — launched in 2006 alongside the Foundation itself to open the door to higher education for students who have the merit but not the means.',
      'The DISHA Scholarship Program provides full scholarship support — covering arts & science and engineering seats — for economically disadvantaged, meritorious students who have completed their higher secondary education, delivered in partnership with a partner foundation.',
      'By removing the financial barrier at the most decisive moment in a young person’s life, DISHA turns academic promise into a completed degree and a career.',
    ],
    folders: ['scholarship', 'general'],
  },
  {
    slug: 'disha-sports',
    title: 'Gems of DISHA — Sports Academy',
    vertical: 'disha',
    summary: 'A sports academy nurturing discipline, teamwork and talent among young people.',
    stats: [
      { value: '2009', label: 'Launched' },
      { value: 'Youth', label: 'Focus' },
      { value: 'DISHA', label: 'Founding initiative' },
    ],
    body: [
      'Launched in 2009 as part of the Foundation’s founding DISHA initiative, Gems of DISHA is a sports academy dedicated to youth development.',
      'Through structured coaching and competition, the academy builds discipline, teamwork, resilience and confidence — life skills that carry young people well beyond the field of play.',
    ],
    folders: ['disha-sports'],
  },

  // ---------------- Centres of Excellence ----------------
  {
    slug: 'ev-centre-of-excellence',
    title: 'Electric Vehicle (EV) Centre of Excellence',
    vertical: 'coe',
    summary: 'A state-of-the-art facility training students in electric-mobility technologies.',
    stats: [
      { value: '300+', label: 'Annual capacity' },
      { value: '2024 & 2026', label: 'Established' },
      { value: 'Bangalore · Chennai', label: 'Loyola ITI & Don Bosco' },
    ],
    body: [
      'The EV Centre of Excellence is a state-of-the-art facility built to train students in electric-mobility technologies, established at Loyola ITI (Bangalore) and the Don Bosco Technical Campus (Chennai).',
      'The centre houses an advanced EV Maintenance Lab giving hands-on exposure to battery management systems (BMS), motor controllers, high-voltage systems and EV powertrain diagnostics.',
      'It prepares students and working technicians for careers across the fast-growing EV ecosystem.',
    ],
    folders: ['ev-coe'],
  },
  {
    slug: 'ai-lab',
    title: 'Artificial Intelligence (AI) Lab',
    vertical: 'coe',
    summary: 'A high-end lab for Generative AI, NLP, Computer Vision and Ethical AI.',
    stats: [
      { value: '500+', label: 'Annual capacity' },
      { value: '2025', label: 'Established' },
      { value: 'Bangalore', label: 'Mount Carmel College' },
    ],
    body: [
      'Established in 2025 at Mount Carmel College, Bangalore, the AI Lab is a high-end facility for Generative AI, Natural Language Processing, Computer Vision and Ethical AI.',
      'It is equipped with 10 AI workstations (HP Omen 35L, Intel Core i7, NVIDIA RTX 4060 GPUs, HP Series 5 monitors) preloaded with Python, Anaconda, TensorFlow, PyTorch and NVIDIA libraries.',
      'The lab gives students industry-grade compute and tooling to build, train and deploy real AI models.',
    ],
    folders: ['ai-coe'],
  },
  {
    slug: 'welding-centre-of-excellence',
    title: 'Advanced Welding Centre of Excellence',
    vertical: 'coe',
    summary: 'Industry-grade welding booths with robotics and PLC-controlled automation.',
    stats: [
      { value: '50+', label: 'Annual capacity' },
      { value: '2022', label: 'Established' },
      { value: 'Bhubaneswar', label: 'Government ITI' },
    ],
    body: [
      'Established in 2022 at a Government ITI in Bhubaneswar, the Advanced Welding Centre of Excellence features industry-grade welding booths with fume extraction and a centralized gas manifold (Argon, CO₂, Oxygen).',
      'Trainees work across TIG (GTAW), MIG (GMAW) and ARC (SMAW) machines alongside automated welding systems, robotics integration and PLC-controlled setups.',
      'Training covers carbon steel, stainless steel, aluminium and titanium — preparing welders for demanding, high-specification industrial work.',
    ],
    folders: ['welding'],
  },
  {
    slug: 'cnc-lab',
    title: 'CNC (Computer Numerical Control) Lab',
    vertical: 'coe',
    summary: 'An Industry 4.0-aligned CNC lab with lathes, milling and simulation controllers.',
    stats: [
      { value: '300+', label: 'Annual capacity' },
      { value: '2022', label: 'Established' },
      { value: 'Chennai', label: 'Government ITI, Chengalpattu' },
    ],
    body: [
      'Established in 2022 at a Government ITI in Chengalpattu, the CNC Lab equips students with hands-on command of CNC lathes and milling machines.',
      'Learners train on Siemens and Fanuc simulation controllers, CAD/CAM software and G-code / M-code programming, aligned to Industry 4.0 manufacturing practices.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- NextGen Tech ----------------
  {
    slug: 'ev-maintenance-training',
    title: 'EV Maintenance Training Program',
    vertical: 'nextgen',
    summary: 'A 3-month NSDC-aligned EV maintenance program with on-the-job training.',
    stats: [
      { value: '384+', label: 'Candidates' },
      { value: '2024–2026', label: 'Duration' },
      { value: 'Bangalore · Pune', label: 'Loyola & Don Bosco ITI' },
    ],
    body: [
      'A 3-month NSDC-aligned program for ITI students — including one month of on-the-job training — delivered at Loyola ITI, Bangalore and Don Bosco ITI, Pune.',
      'The program has achieved 70%+ placements in the EV and automotive sector, giving young technicians a direct route into electric mobility careers.',
    ],
    folders: ['ev-training'],
  },
  {
    slug: 'data-analytics-placement',
    title: 'Data Analytics — Placement Program',
    vertical: 'nextgen',
    summary: 'A placement-focused analytics program for unemployed graduates.',
    stats: [
      { value: '502', label: 'Candidates' },
      { value: '2024–2026', label: 'Duration' },
      { value: 'Bangalore · Kolkata', label: 'Location' },
    ],
    body: [
      'A 3-month, placement-focused program for unemployed graduates covering Excel, SQL, Python, Tableau and Power BI.',
      'With 70%+ placement outcomes, it converts graduates into job-ready data analysts for employers across sectors.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'ai-fundamentals',
    title: 'AI Fundamentals Program',
    vertical: 'nextgen',
    summary: 'A 40-hour online AI certification for youth aged 18 and above.',
    stats: [
      { value: '4,000+', label: 'Students' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Tamil Nadu', label: 'Multi-city' },
    ],
    body: [
      'A 40-hour online certification delivered across multiple cities in Tamil Nadu for youth aged 18 and above.',
      'The program builds foundational AI knowledge through a digital learning platform, making future-ready skills accessible at scale.',
    ],
    folders: ['ai-coe'],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing Program',
    vertical: 'nextgen',
    summary: 'A certification-based cloud computing program delivered digitally.',
    stats: [
      { value: '200', label: 'Students' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Chennai · Madurai', label: 'Location' },
    ],
    body: [
      'A certification-based Cloud Computing program delivered through a digital platform to students in Chennai and Madurai.',
      'It introduces the core concepts and practical skills that underpin modern cloud-first technology careers.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'generative-ai-training',
    title: 'Generative AI Training Program',
    vertical: 'nextgen',
    summary: 'A faculty development workshop and student AI conference following the AI Lab setup.',
    stats: [
      { value: '30', label: 'Participants' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Bangalore', label: 'Mount Carmel College' },
    ],
    body: [
      'Following the setup of the AI Lab at Mount Carmel College, the Foundation ran a 3-day Faculty Development Workshop on Generative AI.',
      'The program culminated in a student AI conference featuring live demonstrations — embedding AI capability in both faculty and learners.',
    ],
    folders: ['ai-coe'],
  },
  {
    slug: 'data-analytics-python',
    title: 'Data Analytics with Python Program',
    vertical: 'nextgen',
    summary: 'A certification program building practical Python analytics skills.',
    stats: [
      { value: '200', label: 'Students' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Tamil Nadu', label: 'Location' },
    ],
    body: [
      'A certification-based, digitally delivered program across Tamil Nadu focused on practical data-analytics skills using Python.',
      'Learners gain hands-on experience turning data into insight — a foundational capability for analytics and engineering roles.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- Banking & Financial Literacy ----------------
  {
    slug: 'bfsi-skilling',
    title: 'BFSI Skilling Program',
    vertical: 'non-technical',
    summary: 'The Foundation’s flagship banking & financial-services skilling program.',
    stats: [
      { value: '2,576+', label: 'Candidates' },
      { value: '2017–2026', label: 'Duration' },
      { value: 'TN · Bangalore · Kolkata', label: 'Location' },
    ],
    body: [
      'A flagship program running since 2017 across Tamil Nadu, Bangalore and Kolkata, building domain expertise for the Banking, Financial Services and Insurance sector.',
      'It combines domain knowledge, digital banking skills and workplace readiness with strong placement linkages — one of the Foundation’s most enduring and highest-volume programs.',
    ],
    folders: ['bfsi'],
  },
  {
    slug: 'business-correspondent',
    title: 'Business Correspondent & Business Facilitator Training',
    vertical: 'non-technical',
    summary: 'Last-mile financial-inclusion training in digital transactions and account facilitation.',
    stats: [
      { value: '35', label: 'Candidates' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Chennai', label: 'Location' },
    ],
    body: [
      'A focused program in Chennai training candidates as Business Correspondents and Business Facilitators — the last mile of financial inclusion.',
      'Trainees learn to enable digital transactions and account facilitation, extending formal banking services to underserved communities.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'financial-literacy',
    title: 'Financial Literacy & Planning Program for Graduates',
    vertical: 'non-technical',
    summary: 'Building financial-planning awareness among graduating students.',
    stats: [
      { value: '400', label: 'Candidates' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Gurgaon · Mumbai · Kolkata · Chennai', label: 'Location' },
    ],
    body: [
      'Delivered across Gurgaon, Mumbai, Kolkata and Chennai, this program builds financial-planning awareness among graduates entering the workforce.',
      'It equips young people to budget, save and invest with confidence — foundational literacy for lifelong financial well-being.',
    ],
    folders: ['financial-literacy'],
  },
  {
    slug: 'security-market-training',
    title: 'Security Market Training',
    vertical: 'non-technical',
    summary: 'Awareness of capital markets and investment ecosystems, delivered pan-India.',
    stats: [
      { value: '300', label: 'Candidates' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Pan India', label: 'Location' },
    ],
    body: [
      'A pan-India program building awareness of capital markets and investment ecosystems.',
      'Participants gain a grounding in how securities markets work — knowledge that supports both careers in finance and informed personal investing.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'gold-loan-training',
    title: 'Gold Loan Training Program',
    vertical: 'non-technical',
    summary: 'Operational and customer-engagement skills for the gold-loan sector, with placements.',
    stats: [
      { value: '306', label: 'Candidates' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Virudhunagar · Tuticorin · Madurai', label: 'Location' },
    ],
    body: [
      'Delivered across Virudhunagar, Tuticorin and Madurai, this program builds the operational and customer-engagement skills needed in the gold-loan sector.',
      'It combines domain training with placement support, opening steady careers in a large regional lending industry.',
    ],
    folders: ['mfi-gl', 'general'],
  },
  {
    slug: 'microfinance-training',
    title: 'Microfinance Training Program',
    vertical: 'non-technical',
    summary: 'Credit processes, client relationships and field operations for microfinance.',
    stats: [
      { value: '38', label: 'Candidates' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Chennai', label: 'Location' },
    ],
    body: [
      'A Chennai-based program covering credit processes, client relationship management and field operations in microfinance.',
      'It prepares candidates for frontline roles that bring small-scale credit to entrepreneurs and households.',
    ],
    folders: ['mfi-gl', 'general'],
  },
  {
    slug: 'bfsi-retail-residential',
    title: 'BFSI, Retail, IT-ITeS & HR — Residential Program',
    vertical: 'non-technical',
    summary: 'A residential skilling model with integrated placement support.',
    stats: [
      { value: '700', label: 'Candidates' },
      { value: '2020–2023', label: 'Duration' },
      { value: 'Chennai', label: 'St. Peter’s College, Avadi' },
    ],
    body: [
      'Run at St. Peter’s College, Avadi (Chennai), this residential skilling program spanned BFSI, Retail, IT-ITeS and HR domains.',
      'The immersive residential model, paired with integrated placement support, prepared 700 candidates for multi-sector employment.',
    ],
    folders: ['bfsi'],
  },

  // ---------------- Accounting & Commerce ----------------
  {
    slug: 'customer-care-training',
    title: 'Senior Customer Care Service Training Program',
    vertical: 'non-technical',
    summary: 'Communication excellence and workplace readiness for customer-service roles.',
    stats: [
      { value: '384', label: 'Candidates' },
      { value: '2025–2026', label: 'Duration' },
      { value: 'Chennai', label: 'Location' },
    ],
    body: [
      'A Chennai-based program developing communication excellence, problem-solving and workplace readiness for customer-service roles.',
      'Delivered as an NSDC-linked project with Capgemini, it prepares candidates to deliver senior-level customer care with confidence.',
    ],
    folders: ['customer-care'],
  },
  {
    slug: 'tally-training',
    title: 'Tally Training Program',
    vertical: 'non-technical',
    summary: 'Financial management and Tally software skills with placement support.',
    stats: [
      { value: '100', label: 'Candidates' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Bangalore', label: 'Location' },
    ],
    body: [
      'A Bangalore-based program building practical skills in financial management and Tally accounting software.',
      'With placement support built in, it prepares candidates for accounting and bookkeeping roles across small and medium enterprises.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- Manufacturing & Engineering ----------------
  {
    slug: 'lift-installation',
    title: 'Lift Installation & Maintenance Program',
    vertical: 'manufacturing',
    summary: 'NSDC-aligned training in vertical-transportation systems, with strong placements.',
    stats: [
      { value: '120', label: 'Candidates' },
      { value: '2025–2027', label: 'Duration' },
      { value: 'Bangalore', label: 'Location' },
    ],
    body: [
      'An NSDC-aligned program in Bangalore — one month of training plus on-the-job training — focused on the installation and maintenance of vertical-transportation systems.',
      'Delivered in partnership with KONE, the program achieves 70%+ placement in vertical-mobility companies.',
    ],
    folders: ['lift'],
  },
  {
    slug: 'advanced-welding-training',
    title: 'Advanced Welding Training Program',
    vertical: 'manufacturing',
    summary: 'A 3-month NSDC-aligned intensive welding program with ~70% placement.',
    stats: [
      { value: '60', label: 'Candidates' },
      { value: '2023–2026', label: 'Duration' },
      { value: 'Bhubaneswar', label: 'Location' },
    ],
    body: [
      'A 3-month NSDC-aligned intensive at the Advanced Welding Centre of Excellence in Bhubaneswar.',
      'Trainees master multiple welding processes to industrial specification, achieving roughly a 70% placement rate into skilled welding roles.',
    ],
    folders: ['welding'],
  },
  {
    slug: 'electrician-training',
    title: 'Electrician Training Program',
    vertical: 'manufacturing',
    summary: 'Electrical systems, installation and maintenance, with placement support.',
    stats: [
      { value: '50', label: 'Candidates' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Nagpur', label: 'Location' },
    ],
    body: [
      'A Nagpur-based program covering electrical systems, installation and maintenance.',
      'It prepares candidates for placement in industrial and service organisations as qualified electricians.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'cnc-faculty-training',
    title: 'CNC Simulation & Faculty Training Program',
    vertical: 'manufacturing',
    summary: 'Faculty capacity-building in CNC simulation and advanced manufacturing.',
    stats: [
      { value: '50', label: 'Beneficiaries' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Chengalpattu', label: 'Location' },
    ],
    body: [
      'A faculty capacity-building program in Chengalpattu focused on CNC simulation and advanced manufacturing machinery.',
      'By upskilling trainers, the program multiplies impact — strengthening the quality of CNC instruction for many future cohorts.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'fitter-training',
    title: 'Fitter Training Program',
    vertical: 'manufacturing',
    summary: 'Fitting, assembly and maintenance of machinery.',
    stats: [
      { value: '50', label: 'Candidates' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Nagpur', label: 'Location' },
    ],
    body: [
      'A Nagpur-based trade program in the fitting, assembly and maintenance of machinery.',
      'It equips candidates with the hands-on mechanical skills sought across manufacturing and engineering workshops.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'plumbing-training',
    title: 'Plumbing Training Program',
    vertical: 'manufacturing',
    review: true,
    unlisted: true, // page builds + reachable by direct link/sitemap, but hidden from nav/index until content is confirmed
    summary: 'Hands-on plumbing trade skilling for employment and self-employment. (Content pending client review.)',
    stats: [
      { value: 'Trade skilling', label: 'Program type' },
      { value: 'NSDC-aligned', label: 'Framework' },
      { value: 'To be confirmed', label: 'Location & cohort' },
    ],
    body: [
      'This page is built from the “Plumbing Training Program” photo set found in the project archive. It is not yet described in the content map, so the copy below is provisional and should be confirmed against the master deck before publishing.',
      'The Plumbing Training Program provides hands-on skilling in pipefitting, fixture installation, and maintenance of water and sanitation systems — preparing candidates for employment and self-employment in the building-services trades.',
    ],
    folders: ['plumbing'],
  },

  // ---------------- Logistics & Service Tech ----------------
  {
    slug: 'warehouse-management',
    title: 'Warehouse Management Training Program',
    vertical: 'non-technical',
    summary: 'Warehouse operations, inventory and digital logistics, with supply-chain placements.',
    stats: [
      { value: '125', label: 'Candidates' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Jaipur', label: 'Location' },
    ],
    body: [
      'A Jaipur-based program covering warehouse operations, inventory management and digital logistics systems.',
      'It leads to placements with supply-chain and e-commerce firms, where trained warehouse professionals are in steady demand.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'home-appliance-technician',
    title: 'Home Appliance Technician Program',
    vertical: 'non-technical',
    summary: 'Appliance repair and maintenance with employment and self-employment pathways.',
    stats: [
      { value: '450', label: 'Candidates' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Chennai', label: 'Location' },
    ],
    body: [
      'A high-volume Chennai program in the repair and maintenance of home appliances.',
      'It opens both employment and self-employment pathways, enabling technicians to build independent service livelihoods.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- School Student Development ----------------
  {
    slug: 'rocketry-stem',
    title: 'Rocketry & STEM Awareness Program',
    vertical: 'school',
    summary: 'Hands-on rocketry and space-science exposure for school students.',
    stats: [
      { value: '500', label: 'Students' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Telangana', label: 'Location' },
    ],
    body: [
      'A hands-on program in Telangana bringing rocketry, space science and STEM exposure to school students.',
      'By making science tangible and exciting, it sparks curiosity and early aspiration toward technical and scientific careers.',
    ],
    folders: ['rocketry'],
  },
  {
    slug: 'school-tally-career-guidance',
    title: 'Tally Training & Career Guidance (School Students)',
    vertical: 'school',
    summary: 'Accounting fundamentals and career guidance for school students.',
    stats: [
      { value: '300', label: 'Students' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Chengalpattu', label: 'Location' },
    ],
    body: [
      'A Chengalpattu program pairing accounting fundamentals through Tally with structured career guidance for school students.',
      'It gives young learners both a practical skill and a clearer sense of the pathways open to them after school.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- Women Empowerment ----------------
  {
    slug: 'gda-healthcare',
    title: 'General Duty Assistant (GDA) — Healthcare Training',
    vertical: 'women',
    summary: 'NSDC-aligned patient-care training with 70%+ hospital placements.',
    stats: [
      { value: '885+', label: 'Beneficiaries' },
      { value: '2021–2026', label: 'Duration' },
      { value: 'Chennai · Bangalore · Nagpur · Pune · Chengalpattu', label: 'Location' },
    ],
    body: [
      'An NSDC-aligned program — three months of training plus one month of on-the-job training — in patient care and hospital support, delivered across five cities.',
      'With 70%+ placements in hospitals, the GDA program has become a dependable route to healthcare careers, with strong participation from women.',
    ],
    folders: ['gda'],
  },
  {
    slug: 'food-processing',
    title: 'Food Processing & Livelihood Program',
    vertical: 'women',
    summary: 'A potato-chips production unit and entrepreneurship training for women in Dhar, MP.',
    stats: [
      { value: '105', label: 'Women' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Dhar, Madhya Pradesh', label: 'Location' },
    ],
    body: [
      'A livelihood program for 105 women in Dhar, Madhya Pradesh, centred on a potato-chips production unit.',
      'Hands-on training, market linkages and entrepreneurship support helped participants turn a local crop into a sustainable income stream.',
    ],
    folders: ['food-processing'],
  },
  {
    slug: 'sewing-machine-operator',
    title: 'Sewing Machine Operator Program',
    vertical: 'women',
    summary: '240 hours of structured tailoring training with machinery support for enterprise.',
    stats: [
      { value: '170+', label: 'Women' },
      { value: '2022–2025', label: 'Duration' },
      { value: 'Chengalpattu · Bandra (Mumbai)', label: 'Location' },
    ],
    body: [
      'A 240-hour structured tailoring program delivered in Chengalpattu and Bandra (Mumbai) for more than 170 women.',
      'Participants earn certificates and receive machinery support to launch their own tailoring enterprises, building independent livelihoods.',
    ],
    folders: ['sewing'],
  },
  {
    slug: 'forklift-operator-women',
    title: 'Forklift Operator Training for Women',
    vertical: 'women',
    summary: 'NSDC-certified material-handling training in a non-traditional trade for women.',
    stats: [
      { value: '35', label: 'Women' },
      { value: '2022–2023', label: 'Duration' },
      { value: 'Sriperumbudur', label: 'Location' },
    ],
    body: [
      'An NSDC-certified, 50-day program in Sriperumbudur training women in material-handling-equipment (MHE) operations and safety protocols.',
      'By opening a non-traditional trade to women, the program challenges occupational stereotypes and creates well-paid industrial roles.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'automotive-service-women',
    title: 'Automotive Service Technician Training (Women)',
    vertical: 'women',
    summary: 'ASDC-aligned vehicle servicing and maintenance training for women.',
    stats: [
      { value: '80', label: 'Women' },
      { value: '2021–2023', label: 'Duration' },
      { value: 'Bangalore', label: 'Sri K K Naidu ITI & Seva Sadan' },
    ],
    body: [
      'An NSDC-aligned, ASDC-linked program (300–450 hours) delivered at Sri K K Naidu ITI and Seva Sadan Technical Institute, Bangalore.',
      'Women trainees learn vehicle servicing and maintenance to industry standard — entering another traditionally male-dominated trade with confidence.',
    ],
    folders: ['automobile'],
  },
  {
    slug: 'drivers-license-mobility',
    title: 'Driver’s License & Mobility Program',
    vertical: 'women',
    summary: 'Licensing support and vehicle-ownership linkages for women-driven auto services.',
    stats: [
      { value: '75', label: 'Women' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Chennai · Thiruvallur', label: 'Location' },
    ],
    body: [
      'A 2-month program in Chennai and Thiruvallur training women in three- and four-wheeler operation, with licensing support built in.',
      'Through women-driven auto services and vehicle-ownership linkages, it turns mobility into both independence and enterprise.',
    ],
    folders: ['drivers-license'],
  },

  // ---------------- Community Health & Environmental ----------------
  {
    slug: 'mega-health-camps',
    title: 'Mega Health Camps',
    vertical: 'community',
    summary: 'Free consultations and diagnostic screening for the community.',
    stats: [
      { value: '500+', label: 'Beneficiaries' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Bangalore', label: 'Location' },
    ],
    body: [
      'Community health camps in Bangalore providing general consultations, dental care and vision screening.',
      'Camps also offered blood-sugar, blood-pressure, ECG and pulmonary-function tests — bringing preventive healthcare directly to people who need it.',
    ],
    folders: ['other', 'general'],
  },
  {
    slug: 'tree-plantation',
    title: 'Tree Plantation Initiative',
    vertical: 'community',
    summary: 'A community-driven sustainability initiative — 250 saplings planted.',
    stats: [
      { value: '250', label: 'Saplings planted' },
      { value: '2024–2025', label: 'Duration' },
      { value: 'Bangalore', label: 'Location' },
    ],
    body: [
      'A community-driven sustainability initiative in Bangalore that saw 250 saplings planted and cared for.',
      'Alongside skilling, it reflects the Foundation’s commitment to environmental responsibility and greener communities.',
    ],
    folders: ['other', 'general'],
  },

  // ---------------- National Skill Mission (DDUGKY — moved from About page) ----------------
  {
    slug: 'ddugky-national-skill-mission',
    title: 'DDUGKY — National Skill Mission',
    vertical: 'national-skill-mission',
    summary: 'Large-scale, nationally-backed livelihood skilling for rural youth under the Government of India’s DDUGKY mission.',
    stats: [
      { value: '2020', label: 'Joined the mission' },
      { value: 'Rural youth', label: 'Focus' },
      { value: 'Government of India', label: 'Skilling mission' },
    ],
    body: [
      'In 2020 the Foundation joined the Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDUGKY) — a Government of India skilling mission focused on rural youth. It is a formal government mission rather than a single program, and marks our step into large-scale, nationally-backed livelihood skilling.',
      'This partnership deepened our reach into underserved communities and strengthened our placement-linked delivery model.',
    ],
    folders: ['ddugky'],
  },
];

// Programs shown in nav, indexes and related lists. `unlisted` pages still build and are
// reachable by direct link / sitemap, but are hidden from listing UI until their content is confirmed.
export const listedPrograms = programs.filter((p) => !p.unlisted);
export const verticalOf = (key) => listedPrograms.filter((p) => p.vertical === key);
export const programBySlug = (slug) => programs.find((p) => p.slug === slug);
