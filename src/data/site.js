// Central site configuration: identity, contact, navigation verticals, partners.

export const site = {
  name: 'The Ma Foi Foundation',
  tagline: 'Our Society. Our Responsibility.',
  parent: 'Ma Foi CIEL HR',
  description:
    'The CSR arm of Ma Foi CIEL HR — two decades of purpose-driven skill development across India, empowering communities and enabling livelihoods.',
  contact: {
    address: 'No. 41, 6th Ave, Block Q, Anna Nagar, Chennai, Tamil Nadu 600040',
    email: 'infotmf@mafoigroup.com',
    instagram: '@themafoifoundation',
    instagramUrl: 'https://www.instagram.com/themafoifoundation',
  },
};

// Vertical order is deliberate — DISHA first (founding brand), then CoE, then the rest.
// Non-Technical merges the former Banking & Financial Literacy, Accounting & Commerce and
// Logistics & Service Tech verticals. National Skill Mission holds the DDUGKY work moved off About.
export const verticals = [
  { key: 'disha', title: 'DISHA Scholarships', blurb: 'The Foundation’s founding flagship — scholarships & youth development since 2006.' },
  { key: 'coe', title: 'Centres of Excellence', blurb: 'State-of-the-art labs in EV, AI, Welding & CNC built with academic and industry partners.' },
  { key: 'nextgen', title: 'NextGen Tech Skilling', blurb: 'EV, AI, Data Analytics & Cloud — future-ready, placement-linked programs.' },
  { key: 'manufacturing', title: 'Technical – Manufacturing & Engineering', blurb: 'Welding, CNC, lift installation, electrical and fitter trades.' },
  { key: 'non-technical', title: 'Non-Technical', blurb: 'Banking & financial literacy, accounting & commerce, logistics and service-technician skilling.' },
  { key: 'school', title: 'School Student Development', blurb: 'Rocketry, STEM and accounting fundamentals for school-age learners.' },
  { key: 'women', title: 'Women Empowerment', blurb: 'Non-traditional trades, healthcare, livelihoods and mobility for women.' },
  { key: 'community', title: 'Community Health & Environmental', blurb: 'Mega health camps and community sustainability initiatives.' },
  { key: 'national-skill-mission', title: 'National Skill Mission', blurb: 'Nationally-backed livelihood skilling through the DDUGKY government mission.' },
];

// Partner logos: 24 of the client's promised 30 are live (see public/images/partners/).
// The 9 newest crops came from a low-res composite reference sheet — good enough to preview
// and ship, but should be swapped for original individual brand assets (PNG/SVG) when the
// client supplies them. 6 logos are still outstanding from the client.
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
  { slug: 'mahindra-rise', name: 'Mahindra Rise' },
  { slug: 'movate', name: 'Movate' },
  { slug: 'tech-mahindra-foundation', name: 'Tech Mahindra Foundation' },
  { slug: 'ddu-gky', name: 'DDU-GKY' },
  { slug: 'policybazaar', name: 'Policybazaar' },
  { slug: 'icici-foundation', name: 'ICICI Foundation' },
  { slug: 'tata-coffee', name: 'Tata Coffee' },
  { slug: 'rpg-foundation', name: 'RPG Foundation' },
  { slug: 'fedbank', name: 'Fedbank Financial Services' },
];

// Top-level nav (Programs is a mega-menu built from verticals + programs).
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/what-we-offer' },
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
