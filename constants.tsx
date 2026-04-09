import { Project, Experience, Education, Certificate } from "./types";
import jw_project from "./images/jwlogo.svg";
import sentosa_project from "./images/sentosalogo.svg";
import sharespace_project from "./images/ssv2.svg";
import ntuhall_project from "./images/ntu-hall-aircon-banner.svg";
import googleuiux from "./images/google_uiux.png";
import exceltomysql from "./images/excel_to_mysql.jpeg";
import exploreml from "./images/exploreml.png";
import aws from "./images/aws.png";
import ntu from "./images/ntu.png";

import sentosa_video from "./videos/sdcCropped.mp4";
import sharespace_video from "./videos/ssvid1v2.mp4";
import ntuhall_video from "./videos/ntu-hall-aircon-prototype-v2.mp4";
import jw_video from "./videos/jwcropped.mp4";

import google_uiux_cert from "./certs/Google_UIUX.pdf";
import excel_to_mysql_cert from "./certs/Excel_To_Mysql.pdf";
import explore_ml_cert from "./certs/Explore_ML_Certificate.pdf";
import aws_academy_cert from "./certs/AWS_Academy_Graduate.pdf";
import ntu_cert from "./certs/NTU_certificate.pdf";

export const SENTOSA_VIDEO = sentosa_video;
export const SHARESPACE_VIDEO = sharespace_video;
export const NTU_HALL_VIDEO = ntuhall_video;
export const JW_VIDEO = jw_video;

export const SENTOSA_PROJECT_THUMBNAIL = sentosa_project;
export const SHARESPACE_PROJECT_THUMBNAIL = sharespace_project;
export const NTU_HALL_PROJECT_THUMBNAIL = ntuhall_project;
export const JW_PROJECT_THUMBNAIL = jw_project;

export const GOOGLE_UX_UI_CERT_THUMBNAIL = googleuiux;
export const EXCEL_TO_MYSQL_CERT_THUMBNAIL = exceltomysql;
export const EXPLORE_ML_CERT_THUMBNAIL = exploreml;
export const AWS_ACADEMY_CERT_THUMBNAIL = aws;
export const NTU_CERT_THUMBNAIL = ntu;

export const GOOGLE_UX_UI_CERT = google_uiux_cert;
export const EXCEL_TO_MYSQL_CERT = excel_to_mysql_cert;
export const EXPLORE_ML_CERT = explore_ml_cert;
export const AWS_ACADEMY_CERT = aws_academy_cert;
export const NTU_CERT = ntu_cert;

export const RESUME_LINK =
  "https://1drv.ms/w/c/c4096db1fd494ccb/IQDCYw-7QlVtSJMadH4u7uAfAaJfxjdC-kR7ZVEhMUOfvOY?e=0yiHeX";
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
    thumbnail: NTU_HALL_PROJECT_THUMBNAIL,
    video: NTU_HALL_VIDEO,
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
    process: [
      "The Jieway Web Application was developed to solve a critical business bottleneck where customer data was siloed across various legacy spreadsheets.",
      "My process began with a deep dive into the client's existing workflow. I then designed and developed a centralised SQL database and built a responsive management dashboard using ASP.NET.",
      "This digital transformation reduced manual data entry time by over 40% and provided real-time business insights that were previously impossible to track.",
    ],
    description: [
      "Developed and deployed a MVC web application created using ASP.Net and MYSQL on Microsoft Azure.",
      "Revitalised and modernised client’s business processes by organising customer data in centralised database.",
    ],
    thumbnail: JW_PROJECT_THUMBNAIL,
    video: JW_VIDEO,
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
    process: [
      "Leading a team of five, I steered the development of an incentive platform for Sentosa's operational staff. Following the Agile Scrum methodology, we iterated quickly through user stories focused on transparency and gamification. I was responsible for the core Java back-end and ensuring the platform could scale across multiple departments.",
      "The final product enabled supervisors to award digital badges and points, significantly boosting staff morale and operational KPI tracking.",
    ],
    description: [
      "Spearheaded a team of five to create a Java MVC web application using Agile methodology.",
      "Implemented administrator and staff user roles to track team performance with a reward system.",
    ],
    thumbnail: SENTOSA_PROJECT_THUMBNAIL,
    video: SENTOSA_VIDEO,
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
    process: [
      "ShareSpace was a project focused on the sharing economy for urban storage.",
      "Utilising Design Thinking, I conducted empathetic interviews with residents to understand storage pain points. I moved from low-fidelity paper sketches to high-fidelity clickable prototypes in Figma.The design focused on 'Trust and Safety,' incorporating a robust verified user system and an intuitive map-based interface for locating nearby storage hosts.",
      "The final prototype was used as a primary pitch asset for stakeholder funding.",
    ],
    description: [
      "Coordinated meetings with the client for requirements gathering using design thinking.",
      "Designed the sitemap, wireframes and prototype for a peer-to-peer storage mobile app.",
    ],
    thumbnail: SHARESPACE_PROJECT_THUMBNAIL,
    video: SHARESPACE_VIDEO,
    category: "Mobile Design",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Google UX Design",
    issuer: "Google",
    date: "May 2025",
    image: GOOGLE_UX_UI_CERT_THUMBNAIL,
    link: GOOGLE_UX_UI_CERT,
  },
  {
    name: "Excel to MySQL",
    issuer: "Duke University",
    date: "Aug 2024",
    image: EXCEL_TO_MYSQL_CERT_THUMBNAIL,
    link: EXCEL_TO_MYSQL_CERT,
  },
  {
    name: "Explore Machine Learning",
    issuer: "Google Crowdsource",
    date: "Feb 2021",
    image: EXPLORE_ML_CERT_THUMBNAIL,
    link: EXPLORE_ML_CERT,
  },
  {
    name: "AWS Academy Data Analytics",
    issuer: "AWS",
    date: "Nov 2020",
    image: AWS_ACADEMY_CERT_THUMBNAIL,
    link: AWS_ACADEMY_CERT,
  },
  {
    name: "Programming Intelligence in Robots",
    issuer: "NTU",
    date: "Sep 2019",
    image: NTU_CERT_THUMBNAIL,
    link: NTU_CERT,
  },
];
