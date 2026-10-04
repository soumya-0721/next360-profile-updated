export const TBC = "[TO BE CONFIRMED]" as const;

export const company = {
  legalName: "Next360 Organic Products Pvt. Ltd.",
  established: "",
  tagline: "Building Technology. Creating Measurable Value.",
  positioning:
    "A technology-driven company building digital platforms, business software, AI-enabled solutions, marketplace infrastructure and practical technology systems for real-world businesses, institutions and communities.",
  vision:
    "Build a practical technology ecosystem that makes trusted commerce, connected infrastructure and digital business solutions accessible and scalable.",
  mission:
    "Build real-world products, improve business operations and digital visibility, and create long-term technology partnerships through modern software.",
  philosophy: "Technology should not only look innovative. It should create measurable value.",
  approach:
    "Identify the problem, build the solution, deploy it, create measurable value. We do not build technology simply for demonstrations.",
  team: {
    extended: "30+",
    developers: "15+",
    interns: "6+",
  },
  contact: {
    email: "office@next360.in",
    phone: "+91-9989163332",
    website: "https://next360.in",
    address:
      "T-Hub Phase 2 Launch, 20 Inorbit Mall Road, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081",
  },
  registration: {
    cin: "U47912TS2026PTC212259",
    pan: "AALCN3880H",
    gstin: "36AALCN3880H1Z3",
  },
} as const;

export const photos = {
  hero: "/images/hero-farm.jpg",
  organic: "/images/organic-market.jpg",
  field: "/images/field-landscape.jpg",
  haybales: "/images/field-haybales.jpg",
} as const;

export const technologyDomains = [
  {
    index: "01",
    name: "Digital Commerce",
    icon: "fa-solid fa-cart-shopping",
    summary:
      "Next360 Organic Marketplace: verified organic, natural and eco-friendly products with a focus on traceability and trusted commerce.",
    items: [
      "Next360 Organic Marketplace",
      "Verified organic, natural and eco-friendly products",
      "Traceability and trusted commerce",
    ],
  },
  {
    index: "02",
    name: "Business Technology",
    icon: "fa-solid fa-building-columns",
    summary:
      "Hospital management systems, CRM platforms, IVR systems and workflow automation.",
    items: [
      "Hospital management systems",
      "CRM platforms",
      "IVR systems",
      "Workflow automation",
    ],
  },
  {
    index: "03",
    name: "AI & Computer Vision",
    icon: "fa-solid fa-brain",
    summary:
      "AI-assisted software development, facial recognition, intelligent vehicle detection and automated monitoring systems.",
    items: [
      "AI-assisted software development",
      "Facial recognition",
      "Intelligent vehicle detection",
      "Automated monitoring systems",
    ],
  },
  {
    index: "04",
    name: "Digital Infrastructure",
    icon: "fa-solid fa-server",
    summary:
      "EV charging solutions, CCTV infrastructure and digital screen infrastructure.",
    items: ["EV charging solutions", "CCTV infrastructure", "Digital screen infrastructure"],
  },
  {
    index: "05",
    name: "Digital Advertising",
    icon: "fa-solid fa-bullhorn",
    summary:
      "Digital screens, advertising inventory and transit advertising solutions.",
    items: ["Digital screens", "Advertising inventory", "Transit advertising solutions"],
  },
  {
    index: "06",
    name: "Digital Growth",
    icon: "fa-solid fa-chart-line",
    summary:
      "SEO, search visibility and technology-enabled digital growth solutions.",
    items: ["SEO", "Search visibility", "Technology-enabled digital growth"],
  },
] as const;

export const deliverySteps = [
  {
    no: "01",
    title: "Identify",
    note: "Understand the real operating problem before any engineering starts.",
    icon: "fa-solid fa-magnifying-glass-chart",
  },
  {
    no: "02",
    title: "Build",
    note: "Engineer the required solution against that problem.",
    icon: "fa-solid fa-screwdriver-wrench",
  },
  {
    no: "03",
    title: "Deploy",
    note: "Put the solution into a real operating environment.",
    icon: "fa-solid fa-cloud-arrow-up",
  },
  {
    no: "04",
    title: "Measure",
    note: "Evaluate whether it creates useful business value.",
    icon: "fa-solid fa-chart-simple",
  },
] as const;

export const executionModel = deliverySteps;

export const corporateStructure = {
  root: "NEXT360",
  rootNote: "Technology & Digital Solutions Organization",
  branches: [
    {
      index: "01",
      name: "DIGITAL COMMERCE",
      note: "",
      children: ["NEXT360 ORGANIC MARKETPLACE"],
    },
    {
      index: "02",
      name: "BUSINESS TECHNOLOGY",
      note: "",
      children: ["Hospital management systems", "CRM and IVR systems"],
    },
    {
      index: "03",
      name: "AI & COMPUTER VISION",
      note: "",
      children: ["Facial recognition", "Intelligent vehicle detection"],
    },
    {
      index: "04",
      name: "DIGITAL INFRASTRUCTURE",
      note: "",
      children: ["EV charging solutions", "CCTV and digital screens"],
    },
    {
      index: "05",
      name: "DIGITAL ADVERTISING",
      note: "",
      children: ["Advertising inventory", "Transit advertising"],
    },
    {
      index: "06",
      name: "SLICK TECHNOLOGIES",
      note: "Sub-company of Next360",
      children: ["SlickCode", "SlickSEO", "Slixo", "Organize", "Let's Connect"],
    },
  ],
} as const;

export const academicCollaboration = [
  {
    title: "Student Internships",
    note: "Opportunities for students to gain practical exposure to real-world technology projects.",
  },
  {
    title: "Industry Projects",
    note: "Industry-oriented projects involving software, AI, computer vision, digital platforms and business technology.",
  },
  {
    title: "Workshops & Training",
    note: "Technical and entrepreneurship-oriented sessions for students.",
  },
  {
    title: "Faculty & Industry Interaction",
    note: "Knowledge-sharing sessions with industry professionals and technology teams.",
  },
  {
    title: "Project-Based Learning",
    note: "Opportunities for students to work on practical technology problems and products.",
  },
  {
    title: "Placement & Career Engagement",
    note: "Potential engagement with students based on organizational requirements and suitable skill sets.",
  },
] as const;

export const mentorship = [
  {
    name: "Vinod Reddy Vembuluru",
    org: "INTOWN",
    title: "Founder & CEO, INTOWN",
    note: "Founder & CEO, INTOWN. Fifteen-plus years in sales and marketing, including the successful implementation of three startups, guiding Next360 on go-to-market, business development and growth.",
    photo: "/images/mentors/mentor-vinod.jpg",
    profile:
      "https://www.linkedin.com/in/vinodintown?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    profileLabel: "View profile",
  },
  {
    name: "Santhan",
    org: "Google Gemini",
    title: "Project Manager",
    note: "Project Manager. Guiding Next360 on technology, product development and industry practices.",
    photo: "/images/mentors/mentor-google.jpg",
    profile:
      "https://www.linkedin.com/in/connect-to-santanu?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    profileLabel: "View profile",
  },
] as const;

export const panelMembers = [
  {
    name: "Indrasena R S",
    role: "Project Technical Lead, AI & Data Solutions · Bell Integration",
    photo: "/images/mentors/member-indrasena.jpg",
    profile:
      "https://www.linkedin.com/in/indrasena-r-s-a1478a87?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Vikram Vembuluru",
    role: "Development Team Lead · EPAM Systems",
    photo: "/images/mentors/member-vikram.jpg",
    profile:
      "https://www.linkedin.com/in/vikram-vembuluru?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Sri Saiteja Annareddy",
    role: "Founder · Cero Hero",
    photo: "/images/mentors/member-saiteja.jpg",
    profile:
      "https://www.linkedin.com/in/sri-saiteja-annareddy?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
] as const;

export const collaborators = [
  {
    name: "ACS",
    note: "Technology and project collaboration, including government-facing infrastructure projects.",
    logo: "/images/partners/partner-acs.png",
  },
  {
    /* The live site references this logo but the asset is not served, so it renders as text. */
    name: "Logiq Gen – AI Nestham",
    note: "Technology and AI-oriented collaboration supporting digital and AI initiatives.",
    logo: "",
  },
  {
    name: "INTOWN",
    note: "Sales, marketing, business development and strategic growth collaboration.",
    logo: "/images/partners/partner-intown.png",
  },
] as const;

export const leadership = [
  {
    name: "Samhith Reddy Sangam",
    role: "Founder & Chief Executive Officer",
    shortRole: "Founder & CEO",
    bio: "Founder and Chief Executive Officer at Next360, leading the company’s vision, strategy, and business growth. Drives Next360’s mission to build technology-driven solutions across organic commerce, healthcare, and emerging sectors. Focused on innovation, sustainability, and creating meaningful opportunities that contribute to a stronger, future-ready Bharat.",
    photo: "/images/leadership/ceo-samhith(1).jpg",
    /* Background-removed version of `photo`, used in the hero only. The
       leadership section always renders `photo` untouched. */
    cutout: "/images/leadership/ceo-samhith-cutout.png",
    portfolio: "https://samhithreddysangam.portfolio.next360.in/",
  },
] as const;

export const ceo = leadership[0];

export const teamCapabilities = [
  "Artificial Intelligence & Computer Vision",
  "Web & Mobile Application Development",
  "Software & SaaS Development",
  "Digital Marketplaces",
  "Business Automation",
  "CRM & IVR Systems",
  "Digital Infrastructure",
  "EV Technology",
  "Digital Advertising",
  "SEO & Digital Growth",
] as const;

export const companySnapshot = [
  { label: "Company", value: "Next360 Organic Products Pvt. Ltd." },
  { label: "Flagship Venture", value: "Next360 Organic Marketplace" },
  { label: "Extended Network", value: "30+ Professionals" },
  { label: "Core Developers", value: "15+" },
  { label: "Interns", value: "6+" },
  { label: "Sub-company", value: "Slick Technologies" },
  { label: "Key Collaborators", value: "ACS, Logiq Gen – AI Nestham, INTOWN" },
  { label: "Mentorship", value: "Google Gemini Project Manager, INTOWN CEO, T-Hub" },
  {
    label: "Core Domains",
    value: "AI, Software, Digital Commerce, Infrastructure & Automation",
  },
  { label: "Registered Office", value: "T-Hub Phase 2, Hyderabad" },
  { label: "Website", value: "next360.in" },
  { label: "Email", value: "office@next360.in" },
  { label: "CIN", value: "U47912TS2026PTC212259" },
] as const;

export const profileArchitecture = [
  { no: "01", title: "Cover", note: "Identity and positioning." },
  { no: "02", title: "Company Overview", note: "Who Next360 is and what it does." },
  { no: "03", title: "Company Story", note: "Establishment, journey and milestones." },
  { no: "04", title: "Business Verticals", note: "Six technology and business domains." },
  { no: "05", title: "Next360 Organic", note: "Flagship venture, in full." },
  { no: "06", title: "Selected Projects", note: "Proven projects and deployments." },
  { no: "07", title: "IT Services", note: "Software, infrastructure, support, managed services." },
  { no: "08", title: "Technology Capabilities", note: "Technology connected to real work." },
  { no: "09", title: "SLICK Technologies", note: "Sub-company of Next360 and its five products." },
  { no: "10", title: "Team", note: "30+ extended network, 15+ developers, 6+ interns." },
  { no: "11", title: "Delivery Capabilities", note: "Identify, build, deploy, measure." },
  { no: "12", title: "Future Direction", note: "Credible forward-looking direction." },
  { no: "13", title: "Contact", note: "Corporate contact information." },
] as const;

export const capabilityLists = [
  {
    index: "01",
    title: "Agritech",
    icon: "fa-solid fa-seedling",
    note: "",
    verification: "",
    items: [
      "Agriculture technology",
      "Organic products",
      "Digital commerce",
      "Agricultural ecosystems",
      "Supply chains",
      "Market access",
      "Agriculture platforms",
    ],
  },
  {
    index: "02",
    title: "IT Services",
    icon: "fa-solid fa-laptop-code",
    note: "",
    verification: "",
    items: [
      "Software development",
      "Web and mobile applications",
      "Backend engineering",
      "Enterprise software",
      "IT infrastructure",
      "User and endpoint support",
      "Service desk",
      "Monitoring",
      "Asset management",
      "Managed technology services",
      "Technical projects",
    ],
  },
] as const;

export const verticals = [
  {
    index: "01",
    name: "Agritech",
    summary:
      "Agriculture technology, organic products, digital commerce, agricultural ecosystems, supply chains, market access and agriculture platforms.",
    points: [],
    flagship: true,
    href: "/agritech",
  },
] as const;

export const projects = [
  {
    slug: "next360-organic-marketplace",
    name: "Next360 Organic Marketplace",
    category: "Digital Commerce",
    overview:
      "A verification-first marketplace focused on organic, natural and eco-friendly products, connecting consumers, farmers, producers, retailers and institutions through verification, traceability and trusted commerce.",
    purpose:
      "Close the trust gap between buyers and producers of organic products by making verification and origin checkable at the point of purchase.",
    solution:
      "Marketplace platform with seller verification, product-level traceability and certification visibility, built and operated by Next360.",
    capabilities: [
      "Product verification",
      "Certification visibility",
      "Seller onboarding",
      "Product-level traceability",
      "Trusted commerce",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Flagship venture built and operated by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "mallaram-digital-village",
    name: "Mallaram Digital Village",
    category: "Digital Governance & Rural Technology",
    overview:
      "A digital governance and rural technology platform designed and developed for Mallaram Gram Panchayat, Telangana. It brings digital governance, citizen services, village information and technology-enabled rural services together through a unified digital ecosystem. The initiative has received national-level recognition.",
    purpose:
      "Bring village information, citizen services and rural technology services into one accessible platform.",
    solution:
      "A single publicly accessible platform covering governance, services, alerts, complaints and village data.",
    capabilities: [
      "Digital village information",
      "Smart farming services",
      "Weather and agricultural alerts",
      "Public complaint management",
      "Village funds and project information",
      "Digital village mapping",
      "Education-related digital services",
      "Village infrastructure information",
      "Real-time digital updates",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Designed and developed by Next360 for Mallaram Gram Panchayat.",
    status: "Live",
    confirmed: true,
  },
  {
    slug: "orr-intelligent-cctv-vehicle-monitoring",
    name: "ORR Intelligent CCTV & Vehicle Monitoring",
    category: "Government Infrastructure & Computer Vision",
    overview:
      "An official state government project involving CCTV infrastructure along the Outer Ring Road (ORR), delivered through Next360's collaboration with ACS.",
    purpose:
      "Support traffic monitoring and violation evidence workflows across the Outer Ring Road.",
    solution:
      "Computer vision applied to deployed CCTV infrastructure for detection, recording and evidence processing.",
    capabilities: [
      "Intelligent vehicle detection",
      "Vehicle identification and recording",
      "Automated capture of vehicle-related information",
      "Digital monitoring",
      "Traffic-violation evidence workflows",
      "Challan-related data processing",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Technology collaboration with ACS on a state government project.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "facial-recognition-attendance-system",
    name: "Facial Recognition Attendance System",
    category: "AI & Business Process Automation",
    overview:
      "A facial recognition-based attendance system developed by Next360 to automate attendance management.",
    purpose: "Automate attendance marking and remove manual attendance handling.",
    solution:
      "Face-based identification feeding centralized attendance records and reporting.",
    capabilities: [
      "Face-based identification",
      "Automated attendance marking",
      "Digital attendance records",
      "Centralized attendance management",
      "Automated reporting",
      "Reduced manual intervention",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Designed and developed by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    category: "Business Technology",
    overview: "Technology solutions for hospital administration and operational workflows.",
    purpose: "Help hospital organizations digitize and manage operational processes.",
    solution: "Hospital administration and operational workflow software.",
    capabilities: ["Hospital administration", "Operational workflow management"],
    technology: [] as string[],
    domains: [] as string[],
    role: "Developed by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "ev-charging-solutions",
    name: "EV Charging Solutions",
    category: "Digital Infrastructure",
    overview:
      "Technology initiatives supporting EV charging station operations and digital management.",
    purpose: "Contribute to the development of connected mobility infrastructure.",
    solution: "EV charging station operations and digital management technology.",
    capabilities: [
      "Charging station operations",
      "Digital management",
      "Connected mobility infrastructure",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Developed by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "digital-screens-transit-advertising",
    name: "Digital Screens & Transit Advertising",
    category: "Digital Advertising",
    overview:
      "Digital screen infrastructure, advertising inventory and transit-screen deployment connecting physical infrastructure with digital advertising technology.",
    purpose: "Connect physical screen inventory with digital advertising operations.",
    solution: "Screen infrastructure, inventory management and transit deployment.",
    capabilities: [
      "Digital screen infrastructure",
      "Advertising inventory",
      "Transit-screen deployment",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Delivered by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "crm-ivr-systems",
    name: "CRM & IVR Systems",
    category: "Business Technology",
    overview: "Business communication and workflow solutions covering CRM and IVR.",
    purpose: "Manage leads, customers, follow-ups and automated call handling.",
    solution: "CRM and IVR systems wired into business communication workflows.",
    capabilities: [
      "CRM",
      "Lead management",
      "Customer management",
      "Follow-ups",
      "IVR",
      "Automated call routing",
      "Business communication workflows",
    ],
    technology: [] as string[],
    domains: [] as string[],
    role: "Built by Next360.",
    status: TBC,
    confirmed: true,
  },
  {
    slug: "vanyabhumi",
    name: "Vanyabhumi",
    category: "Digital Commerce",
    overview:
      "A digital e-commerce platform built by Next360 for selling products online through an owned storefront.",
    purpose: "Give sellers an owned online channel to list products and take orders directly.",
    solution: "Storefront, product catalog, cart, checkout and order management in one platform.",
    capabilities: ["Product catalog", "Cart and checkout", "Order management"],
    technology: [] as string[],
    domains: [] as string[],
    role: "Designed and developed by Next360.",
    status: "Live",
    confirmed: true,
  },
  {
    slug: "ayurvena",
    name: "Ayurvena",
    category: "Business Technology",
    overview:
      "An outpatient (OP) appointment booking system connecting patients with hospitals and clinics.",
    purpose:
      "Replace phone and queue-based OP booking with online doctor search and slot booking.",
    solution:
      "Doctor search, OP slot booking, appointment reminders and payments in one system.",
    capabilities: ["Doctor search", "OP slot booking", "Appointment reminders", "Payments"],
    technology: [] as string[],
    domains: [] as string[],
    role: "Designed and developed by Next360.",
    status: "In Development",
    confirmed: true,
  },
] as const;

export const organicDomains = [
  "Agriculture",
  "Organic Products",
  "Digital Commerce",
  "Technology",
  "Operations",
  "Customer Experience",
] as const;

export const organicBlocks = [
  {
    no: "01",
    title: "What Next360 Organic is",
    approved:
      "Flagship venture: a verification-first marketplace focused on organic, natural and eco-friendly products, connecting consumers, farmers, producers, retailers and institutions through verification, traceability and trusted commerce.",
    detail:
      "It is built and operated by Next360 as its flagship venture, and it applies the same discipline the company applies to client work: identify the operating problem, build the solution, deploy it, then measure whether it creates value.",
    status: "Approved structure, detail pending",
  },
  {
    no: "02",
    title: "Why it was created",
    approved:
      "Organic products are sold on trust, but trust is usually unverifiable at the point of purchase.",
    detail:
      "A buyer cannot confirm from a listing whether a product is genuinely organic, which farm it came from, or how it was handled between harvest and shelf. Next360 Organic was created to close that gap: every product carries its verification and its origin, so the claim can be checked rather than believed.",
    status: "Approved structure, detail pending",
  },
  {
    no: "03",
    title: "Problem and opportunity",
    approved: "The problem is a trust gap in organic commerce, not a lack of products.",
    detail:
      "Producers who work to a genuine standard struggle to prove it at retail scale, and buyers who want to pay for verified organic have no reliable way to check. The opportunity sits between them: a platform where verification is the entry condition for selling, and where institutional buyers can source with the documentation they need.",
    status: "Approved structure, detail pending",
  },
  {
    no: "04",
    title: "Vision",
    approved: "Make verified organic commerce the default, not the exception.",
    detail:
      "A marketplace where traceability is infrastructure rather than paperwork, where a farmer, a producer and a retailer can all trade on the same proof, and where a buyer can trace a product back to its source without asking anyone.",
    status: "Approved structure, detail pending",
  },
  {
    no: "05",
    title: "How technology is used",
    approved: "Technology is used to make verification practical at marketplace scale.",
    detail:
      "Seller onboarding, product listing, certification records and traceability data are handled as structured platform data rather than manual paperwork. This is the same engineering Next360 applies across its business technology and AI practices, applied to a supply chain it is building for itself.",
    status: "Approved structure, detail pending",
  },
  {
    no: "06",
    title: "Product and category ecosystem",
    approved:
      "Spans agriculture, organic products, digital commerce, technology, operations and customer experience.",
    detail:
      "The six areas are not separate initiatives. Agricultural sourcing feeds product verification, verification feeds the catalogue, the catalogue drives commerce, and operations and customer experience decide whether a first purchase turns into a repeat one.",
    status: "Approved structure, detail pending",
  },
  {
    no: "07",
    title: "Platform operations",
    approved: "Sellers are onboarded through a verification process before they can list.",
    detail:
      "Verification is the gate, not an afterthought added later. Seller onboarding, product approval and certification records are handled in-platform so that the state of any listing is known at all times.",
    status: "Approved structure, detail pending",
  },
  {
    no: "08",
    title: "Customer experience",
    approved: "Built for buyers who intend to verify, and for institutions that must.",
    detail:
      "A consumer should be able to see why a product qualifies before buying it. An institutional buyer needs the same proof in a form it can use. Both are served by putting verification data in front of the product rather than behind a support request.",
    status: "Approved structure, detail pending",
  },
  {
    no: "09",
    title: "Vendor and producer ecosystem",
    approved: "Applies where relevant to the initiative.",
    detail:
      "Farmers and producers are the supply side of the marketplace, and onboarding them with verification is what makes the catalogue trustworthy downstream. Next360 runs academic and industry collaboration programmes that also build relationships with the people who work in this supply chain.",
    status: "Approved structure, detail pending",
  },
  {
    no: "10",
    title: "Delivery and fulfilment",
    approved: "Applies where relevant to the initiative.",
    detail:
      "Delivery is treated as part of the same chain the marketplace makes visible, so origin and handling stay connected to the product through to the buyer.",
    status: "Approved structure, detail pending",
  },
  {
    no: "11",
    title: "Technology infrastructure",
    approved: "Platform engineering, product data and traceability records.",
    detail:
      "Next360 builds its own software products and deploys platforms for real operating environments, including the Mallaram Digital Village platform for a Telangana gram panchayat and CCTV infrastructure on the Outer Ring Road. That deployment experience is what this initiative is built on.",
    status: "Approved structure, detail pending",
  },
  {
    no: "12",
    title: "Platform capabilities",
    approved:
      "Product verification, certification visibility, seller onboarding, product-level traceability and trusted commerce.",
    detail:
      "These five capabilities are the platform. Everything else described above exists to make them work in a live marketplace.",
    status: "Approved structure, detail pending",
  },
  {
    no: "13",
    title: "Current status",
    approved: "",
    detail:
      "The only status vocabulary published for this initiative is the actual one. Nothing is listed as live, in development or launched until it is, and no coverage, user or outcome figure is published until it can be evidenced.",
    status: "Status pending",
  },
  {
    no: "14",
    title: "Future direction",
    approved: "Deepen verification coverage before widening the catalogue.",
    detail:
      "The credible direction is extending verification across more categories and more producer regions, and supporting institutional sourcing, rather than adding listings faster than the verification behind them can be maintained.",
    status: "Approved structure, detail pending",
  },
] as const;

export const statusVocabulary = [
  "Live",
  "Active Development",
  "In Development",
  "Prototype",
  "Concept",
] as const;

export const slickDescriptor =
  "SLICK Technologies, a Next360 sub-company building its own software products." as const;

export const slickProducts = [
  {
    name: "SlickCode",
    positioning: "",
    scope: [
      "AI-assisted software development platform",
      "Developer productivity",
      "Developer tooling",
    ],
    rule: "Only verified or planned functionality is described.",
    status: TBC,
  },
  {
    name: "Let's Connect",
    positioning: "",
    scope: ["Digital networking and connection platform", "Connections"],
    rule: "Only verified functionality is described.",
    status: TBC,
  },
  {
    name: "SlickSEO",
    positioning: "",
    scope: [
      "AI-assisted SEO and search optimization platform",
      "Search optimization",
      "Marketing technology",
    ],
    rule: "Only verified functionality is described.",
    status: TBC,
  },
  {
    name: "Slixo",
    positioning: "",
    scope: [
      "Billing, invoicing and customer management product",
      "Business operations",
      "Business workflows",
    ],
    rule: "Presented as a Slick Technologies product.",
    status: TBC,
  },
  {
    name: "Organize",
    positioning: "Save now. Find anytime.",
    scope: [
      "Personal productivity and information management product",
      "Information management",
    ],
    rule: "Never described as a clone, duplicate or inspired product.",
    status: TBC,
  },
] as const;

export const legalRoutes = [
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "terms", label: "Terms & Conditions" },
  { slug: "cookies", label: "Cookie Policy" },
  { slug: "legal", label: "Legal Notice" },
] as const;