interface PersonalInfo {
  name: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
  profileImage: string;
  profileImageAlt: string;
}

interface TabItem {
  label: string;
  href: string;
}

interface Specialty {
  title: string;
  description: string;
}

interface About {
  introduction: string;
  experience: string;
  specialties: Specialty[];
  education: string;
}

interface Contact {
  label: string;
  href: string;
}

interface WorkExperience {
  role: string;
  company: string;
  companyWebsite?: string;
  duration: string;
  location: string;
  highlights: string[];
}

interface Education {
  degree: string;
  college: string;
  collegeWebsite: string;
  duration: string;
  location: string;
}

interface Project {
  title: string;
  summary: string;
  role: string;
  work: string;
  impact: string[];
}

interface SkillCategory {
  title: string;
  items: string;
}

interface ToolStack {
  domain: string;
  stack: string;
}

export const personalInfo: PersonalInfo = {
  name: "Nithish Sampath",
  description:
    "Product Manager | Fintech, SaaS & AI Integrations | Data-Driven Digital Experiences",
  location: "Remote, US",
  email: "nithish2917@gmail.com",
  phone: "(217)-979-0939",
  linkedin: "https://www.linkedin.com/in/nithish-s298/",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
  profileImageAlt: "Nithish Sampath",
};

export const tabItems: TabItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Experience",
    href: "/cv",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const about: About = {
  introduction:
    "I am a Product Manager with 4 years of end-to-end PM experience across fintech, digital payment platforms, and SaaS products. My background blends technical execution, data-driven prioritization, and cross-functional leadership to turn complex operational workflows and market needs into high-impact digital experiences.",

  experience:
    "Having scaled consumer payment systems processing millions of transactions and led product strategy for complex workflows, I specialize in:",

  specialties: [
    {
      title: "Fintech & Platform Strategy",
      description:
        "Core payment processing, digital wallets, mobile banking features, and identity/API integrations.",
    },
    {
      title: "Product Execution",
      description:
        "Roadmapping, Jira workflow design, PRD writing, user story mapping, and metric-driven prioritization.",
    },
    {
      title: "Scalable UX & Systems Architecture",
      description:
        "Partnering with engineering and UX teams to design intuitive customer journeys and robust backend integrations.",
    },
  ],

  education:
    "I hold a Master's in Technology Management from the Gies College of Business (University of Illinois Urbana-Champaign), where I deepened my expertise in systems development, technology commercialization, and managing innovation.",
};

export const contacts: Contact[] = [
  {
    label: "Mail",
    href: "mailto:nithish2917@gmail.com",
  },
  {
    label: "X",
    href: "https://x.com/nithishxs29?s=21",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nithish-s298/",
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Product Manager",
    company: "Kahana Group Inc",
    companyWebsite: "https://about.kahana.io",
    duration: "March 2026 – Present",
    location: "Chicago, IL",
    highlights: [
      "Led product strategy and feature delivery across cross-functional engineering, UX, and business teams for AI browser platform initiatives.",
      "Drove product roadmapping, wrote comprehensive PRDs, and managed sprint backlogs to streamline development cycles.",
      "Partnered with technical leads to define system requirements, API specifications, and database architectures that support scalable growth.",
    ],
  },
  {
    role: "Technical Product Manager",
    company: "Rescuing Leftover Cuisine Inc",
    companyWebsite: "https://www.rescuingleftovercuisine.org/",
    duration: "December 2025 – March 2026",
    location: "New York City, NY",
    highlights: [
      "Managed end-to-end product requirements, architecture planning, and Jira workflow organization for non-profit digital platforms.",
      "Translated complex operational needs into technical user stories, acceptance criteria, and system schemas for seamless developer execution.",
    ],
  },
  {
    role: "Product Manager 2",
    company: "ICICI Bank Limited",
    companyWebsite: "https://www.icicibank.com/",
    duration: "July 2021 – July 2024",
    location: "Bangalore, India",
    highlights: [
      "Owned product execution and strategy for mobile banking and digital payment platform initiatives, driving user adoption and transaction volume.",
      "Collaborated with cross-functional engineering, compliance, and design teams to launch high-availability payment features and digital workflows.",
      "Utilized data-driven insights and user behavior analytics to optimize onboarding funnels, reduce drop-off rates, and improve customer experience.",
    ],
  },
  {
    role: "Product Consultant",
    company: "Minsky Digital Solutions Pvt. Ltd.",
    companyWebsite: "https://www.minsky.in/",
    duration: "March 2023 – May 2024",
    location: "Remote",
    highlights: [
      "Consulted on digital transformation projects, specializing in product positioning, market research, and feature prioritization.",
      "Delivered clear PRDs, process maps, and go-to-market strategies to help early-to-mid stage digital products scale effectively.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Masters in Engineering/Industrial Management",
    college:
      "Gies College of Business, University of Illinois Urbana-Champaign",
    collegeWebsite: "https://giesbusiness.illinois.edu/",
    duration: "August 2025",
    location: "Champaign, United States.",
  },
  {
    degree: "B.Tech in Systems Engineering",
    college: "Indian Institute of Technology Madras",
    collegeWebsite: "https://www.iitm.ac.in/",
    duration: "July 2021",
    location: "Chennai, India.",
  },
];

export const projects: Project[] = [
  {
    title: "Digital Payments Revamp",
    summary: "iMobile Pay is the ICICI's official banking app.",
    role: "Product Manager, ICICI Bank",
    work: "Led the end-to-end revamp of the digital payment section of the app, identified frictions across payment flows. Prioritized the roadmap and partnered with design, engineering, QA, and business teams on UX improvements, design consistency, testing, and launch execution.",
    impact: [
      "35% increase in user engagement",
      "11% increase in MAUs",
      "40% reduction in UI response time",
    ],
  },
  {
    title: "Kahana AI Browser",
    summary:
      "Enterprise browser with an integrated AI assistant for knowledge work.",
    role: "Product Owner / Program Manager",
    work: "Defined customer and market requirements, prioritized features, and managed the product backlog across technical workstreams. Partnered with engineering through development, testing, and release, including AI guardrails and feedback loops to improve output quality.",
    impact: [
      "20% reduction in AI hallucination/error rates",
      "Translated complex technical requirements into usable product features",
    ],
  },
  {
    title: "RLC Roadmap + Analytics",
    summary:
      "Delivery operations and stakeholder reporting for a non-profit digital platform.",
    role: "Technical Project / Program Manager",
    work: "Joined an environment with a stalled engineering roadmap and restructured sprint execution and delivery operations. Managed bi-weekly sprints across 10+ features, built Salesforce dashboards for stakeholders, and led data cleanup to improve cross-functional coordination across distributed teams.",
    impact: [
      "~25% improvement in delivery predictability",
      "8+ Salesforce dashboards built for stakeholder decision-making",
      "~30% reduction in manual reporting",
      "Salesforce data cleanup and de-duplication across 10K+ records",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Product Strategy & Delivery",
    items:
      "Product Roadmapping, Go-To-Market (GTM) Strategy, Feature Prioritization, PRDs & User Stories, Agile/Scrum, Product Lifecycle Management",
  },
  {
    title: "Fintech & Technical PM",
    items:
      "Payment Gateways & Digital Wallets, REST APIs & System Integration, System Architecture, Database Schema Design, Identity Resolution APIs",
  },
  {
    title: "Data & Analytics",
    items:
      "Product Analytics, Funnel & Conversion Rate Optimization (CRO), A/B Testing & Experimentation, SQL Data Querying",
  },
  {
    title: "UX Strategy & Discovery",
    items:
      "Wireframing & Prototyping, Journey Mapping, User Research & Usability Testing, Design Thinking, Information Architecture",
  },
];

export const tools: ToolStack[] = [
  {
    domain: "PM, Agile & Design",
    stack: "Jira, Confluence, Figma, Notion, Linear, Trello",
  },
  {
    domain: "Data & Analytics",
    stack: "SQL, PowerBI, Google Analytics, Excel (Advanced)",
  },
  {
    domain: "APIs & Technical",
    stack: "Postman, RESTful APIs, Firebase, Swagger/OpenAPI",
  },
];
