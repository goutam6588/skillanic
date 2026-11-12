// const baseCourses = [
//   {
//     id: 1,
//     title: "Full Stack Development (MERN)",
//     duration: "5 Months",
//     mode: "Hybrid",
//     description:
//       "Learn MongoDB, Express.js, React, and Node.js with hands-on projects and real-world application development.",
//   },
//   {
//     id: 2,
//     title: "Python Full Stack",
//     duration: "5 Months",
//     mode: "Hybrid",
//     description:
//       "Master Python, Django, databases, and frontend technologies to build complete web applications.",
//   },
//   {
//     id: 3,
//     title: "Data Science & Machine Learning",
//     duration: "5 Months",
//     mode: "Hybrid",
//     description:
//       "Explore Python, data analysis, machine learning algorithms, and visualization techniques with practical projects.",
//   },
//   {
//     id: 4,
//     title: "Generative AI & Agentic AI",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Learn LLMs, prompt engineering, AI agents, and modern generative AI tools for intelligent applications.",
//   },
//   {
//     id: 5,
//     title: "SAP (All Modules)",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Gain practical knowledge of SAP modules and enterprise resource planning concepts used in industries.",
//   },
//   {
//     id: 6,
//     title: "Salesforce CRM",
//     duration: "3 Months",
//     mode: "Online",
//     description:
//       "Understand Salesforce administration, CRM concepts, automation, and cloud-based business solutions.",
//   },
//   {
//     id: 7,
//     title: "Oracle (DBA / APEX / Fusion)",
//     duration: "3 Months",
//     mode: "Online",
//     description:
//       "Learn Oracle database administration, APEX development, and Oracle Fusion applications.",
//   },
//   {
//     id: 8,
//     title: "Microsoft .NET / Azure",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Build scalable applications using .NET technologies and deploy them on Microsoft Azure cloud services.",
//   },
//   {
//     id: 9,
//     title: "DevOps & Cloud (AWS / GCP)",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Master CI/CD pipelines, Docker, Kubernetes, AWS, and Google Cloud for modern deployments.",
//   },
//   {
//     id: 10,
//     title: "Power BI & Data Analytics",
//     duration: "4 Months",
//     mode: "Hybrid",
//     description:
//       "Learn data analysis, dashboards, reporting, and business intelligence using Microsoft Power BI.",
//   },
//   {
//     id: 11,
//     title: "Digital Marketing",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Understand SEO, social media marketing, Google Ads, and strategies to grow businesses online.",
//   },
//   {
//     id: 12,
//     title: "HR & Payroll (SAP HCM)",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Learn human resource management, payroll processing, and SAP HCM functionalities used in organizations.",
//   },
//   {
//     id: 13,
//     title: "UI/UX Design",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Design intuitive user interfaces and experiences using Figma and industry-standard design principles.",
//   },
//   {
//     id: 14,
//     title: "Software Testing (Manual + Automation)",
//     duration: "3 Months",
//     mode: "Hybrid",
//     description:
//       "Master manual testing, Selenium automation, test cases, and quality assurance best practices.",
//   },
// ];

import baseCourses from "./data/courseData";

// const images = [
//   "/images/mern.jpg",
//   "/images/python.jpg",
//   "/images/data-science.jpg",
//   "/images/ai.jpg",
//   "/images/sap.jpg",
//   "/images/salesforce.jpg",
//   "/images/oracle.jpg",
//   "/images/dotnet.jpg",
//   "/images/devops.jpg",
//   "/images/powerbi.jpg",
//   "/images/digital-marketing.jpg",
//   "/images/hr.jpg",
//   "/images/uiux.jpg",
//   "/images/testing.jpg",
// ];

const images = [
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469422/Full_Stack_Development_MERN_ub4jgx.jpg", // MERN / coding
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469418/Python_Full_Stack_sfdhj8.png", // Python
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469421/Data_Science_Machine_Learning_vgeips.jpg", // Data Science
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469423/Generative_AI_Agentic_AI_i5l5rk.jpg", // AI
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469416/SAP_All_Modules_qjaowf.png", // SAP / enterprise
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469415/Salesforce_CRM_cvrqqn.png", // CRM / Salesforce
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469415/Oracle_DBA_APEX_Fusion_p9ohdw.png", // Database / Oracle
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469421/Microsoft.NET_Azure_plrchv.png", // .NET / dev
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469420/DevOps_Cloud_AWSGCPAzure_rwgcce.jpg", // DevOps
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469419/Power_BI_Data_Analytics_xwrzyk.jpg", // Power BI
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469420/Digital_Marketing_prbf2h.png", // Marketing
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469427/HR_Payroll_SAP_HCM_fyufoo.png", // HR
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469422/UIUX_Design_hrtnbm.png", // UI/UX
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469417/Software_Testing_z1ge7m.png", // Testing
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469423/Java_Full_Stack_vhpt6w.png", // Java
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786469418/React_JS_Development_nhy0lb.png", // React
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/v1786472524/copy_of_azure_data_engineering_sbm9sa.jpg", // Azure Data Engineering
];




export const courses = baseCourses.map((course, index) => ({
  ...course,
  image: images[index % images.length],
}));
