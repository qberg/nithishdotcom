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
    " Product Manager | Fintech & SaaS | Building Scalable Digital Experiences.",
  profileImage: "/profile.jpeg",
  profileImageAlt: "Nithish doing nithish things",
};

export const tabItems: TabItem[] = [
  {
    label: "Profile",
    href: "/about",
  },
  {
    label: "Career",
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
    "I'm Nithish, a product manager passionate about fintech, SaaS, and digital technologies. With a background in product development, market research, and data-driven decision-making, I thrive at the intersection of technology and business.",

  experience:
    "Throughout my career, I've led cross-functional teams to deliver innovative solutions that drive business growth and enhance user experience. I specialize in product strategy, user journeys, roadmapping, prioritization, and translating complex market needs into elegant digital solutions.",

  education:
    "Currently, I'm pursuing my Master's in Technology Management at Gies College of Business, where I am expanding my expertise in product management, systems development, and managing innovations.",
};

export const contacts: Contact[] = [
  {
    label: "Mail",
    href: "mailto:nithish2@illinois.edu",
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
    company: "ICICI Bank Limited",
    companyWebsite: "https://www.icicibank.com/",
    duration: "July 2021 - July 2024",
    location: "Bangalore, India",
  },
  {
    role: "Product Consultant",
    company: "Minsky Digital Solutions Pvt. Ltd.",
    companyWebsite: "https://www.minsky.in/",
    duration: "March 2023 - May 2024",
    location: "Remote",
  },
  {
    role: "Product Analyst Intern",
    company: "Futures First Pvt. Ltd.",
    companyWebsite: "https://futuresfirst.com/",
    duration: "May 2020 - July 2020",
    location: "Bangalore, India",
  },
];

export const education: Education[] = [
  {
    degree: "Masters in Technology Management",
    college: "University of Illinois Urbana-Champaign",
    collegeWebsite: "https://giesbusiness.illinois.edu/",
    duration: "July 2024 - Present",
    location: "Illinois, USA",
  },
  {
    degree: "B.Tech in Ocean Engineering",
    college: "Indian Institute of Technology Madras",
    collegeWebsite: "https://www.iitm.ac.in/",
    duration: "July 2017 - June 2021",
    location: "Chennai, India",
  },
];

export const projects: Project[] = [
  {
    title: "Digital Payments Revamp – Mobile Application",
    description:
      "Redesigned the UPI payments experience on the iMobile Pay app by improving journeys, introducing backend validations, and streamlining payments flow. This led to a 15% increase in traffic and enhanced user retention.",
    duration: "2024",
    imageUrl: "/p1.png",
    href: "/projects/upi-payments-revamp",
    tags: ["design", "system", "product development", "Fintech"],
  },
  {
    title: "Digital Election Management System",
    description:
      "Developed a data visualization dashboard for government representatives, enabling real-time insights into constituency data. This improved campaign efficiency and supported data-driven decision-making.",
    duration: "2023",
    imageUrl: "/p2.png",
    href: "/projects/upi-payments-revamp",
    tags: ["User design", "Dashboard", "Data Visualization" ],
  },
];

export const skills: Sell[] = [
  {
    title: "Product Management",
    buzzWords: "Leadership, Empathy, Prioritization, Agile Methodologies",
  },
  {
    title: "Data and Analytics",
    buzzWords: "Problem Solving, A/B Testing, Data Analysis",
  },
  {
    title: "UX and Design",
    buzzWords: "Wireframing, Prototyping, User Research, Design Thinking",
  },
  {
    title: "Market Research",
    buzzWords: "Competitive Analysis, Communication, Product Development",
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
