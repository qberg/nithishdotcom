interface PersonalInfo {
  name: string;
  description: string;
  profileImage: string;
  profileImageAlt: string;
}

interface TabItem {
  label: string;
  href: string;
}

interface About {
  introduction: string;
  experience: string;
  education: string;
}

interface Contact {
  label: string;
  href: string;
}

interface WorkExperience {
  role: string;
  company: string;
  companyWebsite: string;
  duration: string;
  location: string;
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
  description: string;
  duration: string;
  imageUrl: string;
  href: string;
  tags: string[];
}

interface Sell {
  title: string;
  buzzWords: string;
}

export const personalInfo: PersonalInfo = {
  name: "Nithish Sampath",
  description:
    " Product Manager. Fintech & SaaS. Building Scalable Digital Experiences.",
  profileImage: "/profile.jpeg",
  profileImageAlt: "Nithish doing nithish things",
};

export const tabItems: TabItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "CV",
    href: "/cv",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/skills",
  },
];

export const about: About = {
  introduction:
    "I'm Nithish, a product manager passionate about fintech, SaaS, and digital transformation. With a background in payments, market research, and data-driven decision-making, I thrive at the intersection of technology and business.",

  experience:
    "Throughout my career, I've led cross-functional teams to deliver innovative solutions that drive business growth and enhance user experience. I specialize in product strategy, roadmap development, and translating complex market needs into elegant technical solutions.",

  education:
    "Currently, I'm pursuing my Master's in Technology Management at Gies College of Business, where I am expanding my expertise in product management, strategic consulting, and emerging technologies.",
};

export const contacts: Contact[] = [
  {
    label: "Mail",
    href: "mailto:ssniki2912@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/qberg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/nitishs",
  },
];

export const workExperience: WorkExperience[] = [
  {
    role: "Product Manager",
    company: "ICICI Bank Limited",
    companyWebsite: "https://www.icicibank.com/",
    duration: "July 2021 - July 2024",
    location: "Bangalore, India",
  },
  {
    role: "Cosultant",
    company: "Minsky Digital Solutions Pvt. Ltd.",
    companyWebsite: "https://www.minsky.in/",
    duration: "July 2023 - July 2024",
    location: "Remote",
  },
  {
    role: "Financial Analyste Intern",
    company: "Futures First Pvt. Ltd.",
    companyWebsite: "https://futuresfirst.com/",
    duration: "May 2020 - July 2020",
    location: "Chennai, India",
  },
];

export const education: Education[] = [
  {
    degree: "Masters in Technology Management",
    college: "Gies College of Business",
    collegeWebsite: "https://iitmadras.com",
    duration: "July 2024 - Present",
    location: "Chicago, USA",
  },
  {
    degree: "B.Tech in Naval Architecture",
    college: "IIT Madras",
    collegeWebsite: "https://iitmadras.com",
    duration: "July 2017 - June 2021",
    location: "Chennai, India",
  },
];

export const projects: Project[] = [
  {
    title: "UPI Payments Revamp – iMobile Pay",
    description:
      "Redesigned UX, added backend validation, and improved error handling, leading to an 18% traffic increase and better user retention.",
    duration: "2024",
    imageUrl: "/p1.png",
    href: "/projects/upi-payments-revamp",
    tags: ["design", "system"],
  },
  {
    title: "Digital Election Management System",
    description:
      "Redesigned UX, added backend validation, and improved error handling, leading to an 18% traffic increase and better user retention.",
    duration: "2023",
    imageUrl: "/p2.png",
    href: "/projects/upi-payments-revamp",
    tags: ["design", "system"],
  },
];

export const skills: Sell[] = [
  {
    title: "Product Management",
    buzzWords: "Roadmap Planning, PRDs, Agile/Scrum, User Stories",
  },
  {
    title: "Data and Analytics",
    buzzWords: "SQL, Python (Matplotlib, NumPy), A/B Testing",
  },
  {
    title: "UX and Design",
    buzzWords: "Wireframing, Prototyping (Figma), User Research",
  },
  {
    title: "Market Research",
    buzzWords: "Competitive Analysis, GTM Strategy",
  },
];

export const tools: Sell[] = [
  {
    title: "PM and Collaboration",
    buzzWords: "Jira, Confluence, Notion, Figma, Zeplin",
  },
  {
    title: "Data and Visualisation",
    buzzWords: "Excel, Tableau, Power BI, Google Analytics",
  },
  {
    title: "Development APIs",
    buzzWords: "Postman, REST APIs, Firebase",
  },
];
