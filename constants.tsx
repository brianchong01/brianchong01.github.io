import { Project, Experience, Education, Certificate } from "./types";

export const RESUME_LINK =
  "https://1drv.ms/b/c/c4096db1fd494ccb/IQDLTEn9sW0JIIDElB4AAAAAAdPSOrIaoutEZAzEYXun2pw?e=XsHQrl";
export const LOR_LINK =
  "https://1drv.ms/b/c/c4096db1fd494ccb/IQDoHX5hwYwOSomgFaZQBwBMAXIpICw_QWcK3vDB_3tOwRs?e=ZNJxdT";

export const EXPERIENCES: Experience[] = [];
export const EDUCATION: Education[] = [];

export const PROJECTS: Project[] = [
  {
    id: "ntu-aircon",
    title: "NTU Hall Aircon Application Redesign",
    period: "Aug 2025 – Nov 2025",
    grade: "Grade Obtained: A",
    description: [
      "Collaborated with teammates to conduct requirements interviews, competitive analysis and ideation.",
      "Designed wireframes and prototype in Figma and published design case study in Medium.",
    ],
    thumbnail: "../images/ntu-hall-aircon-banner.svg",
    video: "..videos/ntu-hall-aircon-prototype-v2.mp4",
    category: "UI/UX Design",
    link: "https://medium.com/@brianchong12/improving-nanyang-technological-universitys-hall-aircon-app-experience-6a011f41e065",
  },
  {
    id: "jieway",
    title: "Jieway Web Application",
    period: "June 2022 – Dec 2022",
    role: "Full-Stack Developer",
    activities: [
      "Database Schema Design",
      "Front-end UI Development",
      "API Integration",
      "Azure Deployment",
    ],
    process:
      "The Jieway Web Application was developed to solve a critical business bottleneck where customer data was siloed across various legacy spreadsheets. My process began with a deep dive into the client's existing workflow. I then architected a centralized SQL database and built a responsive management dashboard using ASP.NET. This digital transformation reduced manual data entry time by over 40% and provided real-time business insights that were previously impossible to track.",
    description: [
      "Developed and deployed a MVC web application created using ASP.Net and MYSQL on Microsoft Azure.",
      "Revitalised and modernised client’s business processes by organising customer data in centralised database.",
    ],
    thumbnail: "../images/jwlogo.svg",
    video: "../videos/jwcropped.mp4",
    category: "Full-Stack Development",
  },
  {
    id: "sentosa",
    title: "Sentosa Digital Incentive Platform",
    period: "Feb 2020 – July 2020",
    role: "Lead Developer",
    grade: "Grade Obtained: A",
    activities: [
      "Agile Project Management",
      "Java MVC Architecture",
      "Role-Based Access Control",
      "UI Performance Tuning",
    ],
    process:
      "Leading a team of five, I steered the development of an incentive platform for Sentosa's operational staff. Following the Agile Scrum methodology, we iterated quickly through user stories focused on transparency and gamification. I was responsible for the core Java back-end and ensuring the platform could scale across multiple departments. The final product enabled supervisors to award digital badges and points, significantly boosting staff morale and operational KPI tracking.",
    description: [
      "Spearheaded a team of five to create a Java MVC web application using Agile methodology.",
      "Implemented administrator and staff user roles to track team performance with a reward system.",
    ],
    thumbnail: "../images/sentosalogo.svg",
    video: "../videos/sdcCropped.mp4",
    category: "Enterprise Software",
  },
  {
    id: "sharespace",
    title: "ShareSpace Prototype",
    period: "Jul 2020 – Feb 2021",
    role: "UI/UX Designer",
    activities: [
      "User Research & Interviews",
      "Wireframing & Prototyping",
      "Design Thinking Workshops",
      "Usability Testing",
    ],
    process:
      "ShareSpace was a project focused on the sharing economy for urban storage. Utilizing Design Thinking, I conducted empathetic interviews with residents to understand storage pain points. I moved from low-fidelity paper sketches to high-fidelity clickable prototypes in Figma. The design focused on 'Trust and Safety,' incorporating a robust verified user system and an intuitive map-based interface for locating nearby storage hosts. The final prototype was used as a primary pitch asset for stakeholder funding.",
    description: [
      "Coordinated meetings with the client for requirements gathering using design thinking.",
      "Designed the sitemap, wireframes and prototype for a peer-to-peer storage mobile app.",
    ],
    thumbnail: "../images/ssv2.svg",
    video: "../videos/ssvid1v2.mp4",
    category: "Mobile Design",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Google UX Design",
    issuer: "Google",
    date: "May 2025",
    image: "../images/google_uiux.png",
    link: "../certs/Google_UIUX.pdf",
  },
  {
    name: "Excel to MySQL",
    issuer: "Duke University",
    date: "Aug 2024",
    image: "../images/excel_to_mysql.jpeg",
    link: "../certs/Excel_To_Mysql.pdf",
  },
  {
    name: "Explore Machine Learning",
    issuer: "Google Crowdsource",
    date: "Feb 2021",
    image: "../images/exploreml.png",
    link: "../certs/Explore_ML_Certificate.pdf",
  },
  {
    name: "AWS Academy Data Analytics",
    issuer: "AWS",
    date: "Nov 2020",
    image: "../images/aws.png",
    link: "../certs/AWS_Academy_Graduate.pdf",
  },
  {
    name: "Programming Intelligence in Robots",
    issuer: "NTU",
    date: "Sep 2019",
    image: "../images/ntu.png",
    link: "../certs/NTU_certificate.pdf",
  },
];
