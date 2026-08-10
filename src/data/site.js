// Central site configuration: identity, contact, navigation verticals, partners.

export const site = {
  name: 'The Ma Foi Foundation',
  tagline: 'Our Society. Our Responsibility.',
  parent: 'CIEL HR',
  description:
    'The CSR arm of CIEL HR — two decades of purpose-driven skill development across India, empowering communities and enabling livelihoods.',
  contact: {
    address: 'No. 41, 6th Ave, Block Q, Anna Nagar, Chennai, Tamil Nadu 600040',
    email: 'infotmf@mafoigroup.com',
    instagram: '@themafoifoundation',
    instagramUrl: 'https://www.instagram.com/themafoifoundation',
  },
};

// Vertical order is deliberate — DISHA first (founding brand), then CoE, then the rest.
export const verticals = [
  { key: 'disha', title: 'DISHA Programs', blurb: 'The Foundation’s founding flagship — scholarships & youth development since 2006.' },
  { key: 'coe', title: 'Centres of Excellence', blurb: 'State-of-the-art labs in EV, AI, Welding & CNC built with academic and industry partners.' },
  { key: 'nextgen', title: 'NextGen Tech Skilling', blurb: 'EV, AI, Data Analytics & Cloud — future-ready, placement-linked programs.' },
  { key: 'bfsi', title: 'Banking & Financial Literacy', blurb: 'BFSI domain skilling, financial inclusion and capital-markets awareness.' },
  { key: 'accounting', title: 'Accounting & Commerce', blurb: 'Customer service excellence and Tally-based accounting skilling.' },
  { key: 'manufacturing', title: 'Manufacturing & Engineering', blurb: 'Welding, CNC, lift installation, electrical and fitter trades.' },
  { key: 'logistics', title: 'Logistics & Service Tech', blurb: 'Warehouse management and home-appliance service technician training.' },
  { key: 'school', title: 'School Student Development', blurb: 'Rocketry, STEM and accounting fundamentals for school-age learners.' },
  { key: 'women', title: 'Women Empowerment', blurb: 'Non-traditional trades, healthcare, livelihoods and mobility for women.' },
  { key: 'community', title: 'Community Health & Environmental', blurb: 'Mega health camps and community sustainability initiatives.' },
];

export const partners = [
  { slug: 'hdfc-parivartan', name: 'HDFC Bank Parivartan' },
  { slug: 'jombay', name: 'Jombay' },
  { slug: 'ciel', name: 'CIEL HR' },
  { slug: 'bajaj-finserv', name: 'Bajaj Finserv' },
  { slug: 'apexon-ignite', name: 'Apexon Ignite' },
  { slug: 'kone', name: 'KONE' },
  { slug: 'anbu-foundation', name: 'Anbu Foundation' },
  { slug: 'aster-dm', name: 'Aster DM Healthcare' },
  { slug: 'ibm-skillsbuild', name: 'IBM SkillsBuild' },
  { slug: 'capgemini', name: 'Capgemini' },
  { slug: 'accenture', name: 'Accenture' },
  { slug: 'sms-group', name: 'SMS Group' },
  { slug: 'nasscom-foundation', name: 'Nasscom Foundation' },
  { slug: 'bharat-cares', name: 'Bharat Cares' },
  { slug: 'nsdc', name: 'NSDC' },
];

// Top-level nav (Programs is a mega-menu built from verticals + programs).
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Offer', href: '/what-we-offer' },
  { label: 'Programs', href: '/programs', mega: true },
  { label: 'Impact', href: '/impact' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: 'Contact', href: '/contact' },
];

export const homeStats = [
  { value: '2 Lakh+', label: 'Lives impacted across India' },
  { value: '6,520', label: 'Youth trained (2025–26)' },
  { value: '1,500', label: 'Beneficiaries placed' },
  { value: '6', label: 'States of impact' },
  { value: '10', label: 'Partner institutes' },
  { value: '12', label: 'Skill domains' },
  { value: '2', label: 'Centres of Excellence' },
  { value: '30+', label: 'Programs delivered' },
];
