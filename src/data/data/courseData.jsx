const baseCourses = [
  {
    id: 1,
    title: "Full Stack Development (MERN)",
    duration: "5 Months",
    mode: "Hybrid",
    description:
      "Learn MongoDB, Express.js, React, and Node.js with hands-on projects and real-world application development.",
    detailDescription:
      "Become a job-ready full stack developer with our in-depth MERN Stack program. Master MongoDB, Express.js, React, and Node.js while building real-world web applications from scratch. Through live projects, REST API development, authentication, and deployment practices, you'll gain the confidence and portfolio needed to launch a successful career in full stack web development.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Frontend Development with React",
        description:
          "Build dynamic, component-based user interfaces using React, Hooks, and state management.",
      },
      {
        title: "Backend Development with Node.js & Express",
        description:
          "Create robust server-side applications, REST APIs, and middleware using Node.js and Express.js.",
      },
      {
        title: "Database Management with MongoDB",
        description:
          "Design schemas, perform CRUD operations, and manage NoSQL databases using MongoDB and Mongoose.",
      },
      {
        title: "Authentication & Authorization",
        description:
          "Implement secure login systems using JWT, sessions, and role-based access control.",
      },
      {
        title: "API Integration & Deployment",
        description:
          "Connect frontend and backend seamlessly and deploy full stack applications to cloud platforms.",
      },
      {
        title: "Real-World Projects",
        description:
          "Build complete MERN stack applications and add production-ready projects to your portfolio.",
      },
    ],
  },
  {
    id: 2,
    title: "Python Full Stack",
    duration: "5 Months",
    mode: "Hybrid",
    description:
      "Master Python, Django, databases, and frontend technologies to build complete web applications.",
    detailDescription:
      "Kickstart your career as a Python Full Stack Developer by mastering Python programming, Django framework, database management, and modern frontend technologies. This course combines theory with hands-on projects to help you build fully functional web applications, REST APIs, and dynamic user interfaces, preparing you for real-world software development roles.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Python Programming Fundamentals",
        description:
          "Master core Python concepts, OOP, data structures, and file handling for backend development.",
      },
      {
        title: "Django Web Framework",
        description:
          "Build scalable web applications using Django's MVT architecture, ORM, and admin panel.",
      },
      {
        title: "Database Design & Management",
        description:
          "Work with SQL and NoSQL databases, design schemas, and perform efficient data operations.",
      },
      {
        title: "Frontend Integration",
        description:
          "Combine HTML, CSS, JavaScript, and Bootstrap with Django templates for complete web pages.",
      },
      {
        title: "REST API Development",
        description:
          "Create and consume RESTful APIs using Django REST Framework for scalable applications.",
      },
      {
        title: "Deployment & Hosting",
        description:
          "Deploy Python web applications to production servers and cloud hosting platforms.",
      },
    ],
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    duration: "5 Months",
    mode: "Hybrid",
    description:
      "Explore Python, data analysis, machine learning algorithms, and visualization techniques with practical projects.",
    detailDescription:
      "Step into the world of data-driven decision making with our comprehensive Data Science & Machine Learning course. Learn Python programming, statistical analysis, data visualization, and machine learning algorithms through hands-on projects. Gain the skills to clean, analyze, and model real-world datasets while building a strong portfolio for data science roles.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Python for Data Science",
        description:
          "Master Python libraries like NumPy, Pandas, and Matplotlib for data manipulation and analysis.",
      },
      {
        title: "Statistics & Data Analysis",
        description:
          "Understand descriptive and inferential statistics, probability, and hypothesis testing.",
      },
      {
        title: "Data Visualization",
        description:
          "Create insightful charts and dashboards using Matplotlib, Seaborn, and Power BI.",
      },
      {
        title: "Machine Learning Algorithms",
        description:
          "Learn supervised and unsupervised algorithms including regression, classification, and clustering.",
      },
      {
        title: "Model Evaluation & Deployment",
        description:
          "Evaluate model performance and deploy machine learning models into real-world applications.",
      },
      {
        title: "Capstone Projects",
        description:
          "Work on real datasets to solve business problems and build a strong data science portfolio.",
      },
    ],
  },
  {
    id: 4,
    title: "Generative AI & Agentic AI",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Learn LLMs, prompt engineering, AI agents, and modern generative AI tools for intelligent applications.",
    detailDescription:
      "Stay ahead in the AI revolution with our Generative AI & Agentic AI course. Learn how large language models work, master prompt engineering, and build intelligent AI agents capable of autonomous decision-making. Through practical projects using modern AI tools and frameworks, you'll gain the skills to design, build, and deploy real-world generative AI applications.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Fundamentals of Large Language Models",
        description:
          "Understand how LLMs work, tokenization, embeddings, and transformer architectures.",
      },
      {
        title: "Prompt Engineering",
        description:
          "Craft effective prompts to control AI outputs for chatbots, content generation, and automation.",
      },
      {
        title: "Building AI Agents",
        description:
          "Design autonomous AI agents that can plan, reason, and execute multi-step tasks.",
      },
      {
        title: "Retrieval Augmented Generation (RAG)",
        description:
          "Integrate external knowledge sources with LLMs to build accurate, context-aware applications.",
      },
      {
        title: "AI Tools & Frameworks",
        description:
          "Work with modern generative AI tools, APIs, and orchestration frameworks for agentic workflows.",
      },
      {
        title: "Real-World AI Applications",
        description:
          "Build and deploy intelligent applications like chatbots, automation agents, and content generators.",
      },
    ],
  },
  {
    id: 5,
    title: "SAP (All Modules)",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Gain practical knowledge of SAP modules and enterprise resource planning concepts used in industries.",
    detailDescription:
      "Build a strong foundation in enterprise resource planning with our comprehensive SAP course covering all major modules. Learn how businesses manage finance, materials, sales, and HR processes using SAP, one of the world's most widely used ERP systems. Gain hands-on experience with configuration, navigation, and real business scenarios to become industry-ready.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "SAP Fundamentals & Navigation",
        description:
          "Understand SAP architecture, navigation, and core ERP concepts used across industries.",
      },
      {
        title: "SAP FI/CO (Finance & Controlling)",
        description:
          "Learn financial accounting, cost controlling, and reporting processes within SAP.",
      },
      {
        title: "SAP MM & SD",
        description:
          "Master materials management and sales & distribution processes for supply chain operations.",
      },
      {
        title: "SAP HCM (Human Capital Management)",
        description:
          "Explore employee administration, payroll, and organizational management modules.",
      },
      {
        title: "Configuration & Customization",
        description:
          "Perform basic configuration tasks and customize SAP modules for business requirements.",
      },
      {
        title: "Real-Time Business Scenarios",
        description:
          "Work on practical case studies simulating real enterprise business processes.",
      },
    ],
  },
  {
    id: 6,
    title: "Salesforce CRM",
    duration: "3 Months",
    mode: "Online",
    description:
      "Understand Salesforce administration, CRM concepts, automation, and cloud-based business solutions.",
    detailDescription:
      "Launch your career in the booming Salesforce ecosystem with our practical Salesforce CRM course. Learn Salesforce administration, automation tools, and cloud-based customer relationship management concepts. Through hands-on practice with real Salesforce orgs, you'll gain the skills needed to manage data, automate workflows, and support business processes effectively.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Salesforce Fundamentals",
        description:
          "Understand CRM concepts, Salesforce architecture, and the platform's core objects.",
      },
      {
        title: "Salesforce Administration",
        description:
          "Manage users, security, profiles, permissions, and data within Salesforce.",
      },
      {
        title: "Automation Tools",
        description:
          "Build workflows, process builders, and flows to automate business processes.",
      },
      {
        title: "Reports & Dashboards",
        description:
          "Create insightful reports and dashboards to track business performance.",
      },
      {
        title: "Data Management",
        description:
          "Import, export, and manage data using Salesforce data tools effectively.",
      },
      {
        title: "Hands-On CRM Projects",
        description:
          "Work on real business scenarios to configure and manage Salesforce solutions.",
      },
    ],
  },
  {
    id: 7,
    title: "Oracle (DBA / APEX / Fusion)",
    duration: "3 Months",
    mode: "Online",
    description:
      "Learn Oracle database administration, APEX development, and Oracle Fusion applications.",
    detailDescription:
      "Build expertise in one of the most trusted enterprise database ecosystems with our Oracle course covering DBA, APEX, and Fusion applications. Learn database administration, low-code application development with Oracle APEX, and enterprise resource planning using Oracle Fusion. Gain practical, job-ready skills through real-world scenarios and hands-on practice.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Oracle Database Administration",
        description:
          "Learn database installation, configuration, backup, recovery, and performance tuning.",
      },
      {
        title: "SQL & PL/SQL Programming",
        description:
          "Write efficient queries, stored procedures, triggers, and functions using PL/SQL.",
      },
      {
        title: "Oracle APEX Development",
        description:
          "Build low-code web applications rapidly using Oracle Application Express (APEX).",
      },
      {
        title: "Oracle Fusion Applications",
        description:
          "Understand Oracle Fusion ERP modules for finance, procurement, and HR management.",
      },
      {
        title: "Database Security & Optimization",
        description:
          "Implement security best practices and optimize database performance for enterprise use.",
      },
      {
        title: "Real-World Oracle Projects",
        description:
          "Work on practical projects covering DBA tasks, APEX apps, and Fusion configurations.",
      },
    ],
  },
  {
    id: 8,
    title: "Microsoft .NET / Azure",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Build scalable applications using .NET technologies and deploy them on Microsoft Azure cloud services.",
    detailDescription:
      "Master enterprise application development with our Microsoft .NET / Azure course. Learn to design, build, and deploy scalable applications using C#, ASP.NET Core, and Azure cloud services. Through hands-on projects covering web development, cloud deployment, and DevOps practices, you'll be ready for real-world .NET and Azure development roles.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "C# Programming Fundamentals",
        description:
          "Master core C# concepts, OOP principles, and .NET framework essentials.",
      },
      {
        title: "ASP.NET Core Development",
        description:
          "Build modern, scalable web applications and APIs using ASP.NET Core MVC.",
      },
      {
        title: "Database Integration with Entity Framework",
        description:
          "Work with SQL databases using Entity Framework Core for data access and management.",
      },
      {
        title: "Microsoft Azure Fundamentals",
        description:
          "Understand Azure cloud services, resource management, and cloud architecture basics.",
      },
      {
        title: "Cloud Deployment & DevOps",
        description:
          "Deploy applications to Azure using CI/CD pipelines and Azure DevOps tools.",
      },
      {
        title: "Real-World .NET Projects",
        description:
          "Build and deploy complete .NET applications hosted on Microsoft Azure cloud.",
      },
    ],
  },
  {
    id: 9,
    title: "DevOps & Cloud (AWS / GCP)",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Master CI/CD pipelines, Docker, Kubernetes, AWS, and Google Cloud for modern deployments.",
    detailDescription:
      "Accelerate your career in cloud computing with our DevOps & Cloud course covering AWS and GCP. Learn to automate software delivery using CI/CD pipelines, containerize applications with Docker, and orchestrate deployments with Kubernetes. Gain hands-on experience with cloud infrastructure and modern DevOps practices used by top tech companies.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "DevOps Fundamentals",
        description:
          "Understand DevOps culture, practices, and the software development lifecycle.",
      },
      {
        title: "CI/CD Pipeline Automation",
        description:
          "Build automated build, test, and deployment pipelines using Jenkins and Git.",
      },
      {
        title: "Containerization with Docker",
        description:
          "Package applications into containers for consistent deployment across environments.",
      },
      {
        title: "Orchestration with Kubernetes",
        description:
          "Manage, scale, and deploy containerized applications using Kubernetes clusters.",
      },
      {
        title: "AWS Cloud Services",
        description:
          "Work with core AWS services like EC2, S3, IAM, and Lambda for cloud deployments.",
      },
      {
        title: "Google Cloud Platform (GCP)",
        description:
          "Explore GCP services and deploy scalable applications on Google's cloud infrastructure.",
      },
    ],
  },
  {
    id: 10,
    title: "Power BI & Data Analytics",
    duration: "4 Months",
    mode: "Hybrid",
    description:
      "Learn data analysis, dashboards, reporting, and business intelligence using Microsoft Power BI.",
    detailDescription:
      "Turn raw data into powerful business insights with our Power BI & Data Analytics course. Learn data cleaning, transformation, visualization, and reporting using Microsoft Power BI. Through practical, real-world projects, you'll gain the skills to build interactive dashboards and support data-driven decision making for organizations.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Data Analytics Fundamentals",
        description:
          "Understand core concepts of data analysis, data types, and analytical thinking.",
      },
      {
        title: "Data Cleaning & Transformation",
        description:
          "Use Power Query to clean, shape, and transform raw data for analysis.",
      },
      {
        title: "Power BI Desktop & Data Modeling",
        description:
          "Build data models, relationships, and calculated columns using Power BI Desktop.",
      },
      {
        title: "DAX Formulas",
        description:
          "Write DAX expressions to create measures, calculated fields, and advanced calculations.",
      },
      {
        title: "Interactive Dashboards",
        description:
          "Design interactive, visually compelling dashboards and reports for business insights.",
      },
      {
        title: "Business Intelligence Projects",
        description:
          "Work on real datasets to build end-to-end BI solutions for business scenarios.",
      },
    ],
  },
  {
    id: 11,
    title: "Digital Marketing",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Understand SEO, social media marketing, Google Ads, and strategies to grow businesses online.",
    detailDescription:
      "Master the art and science of online growth with our comprehensive Digital Marketing course. Learn SEO, social media marketing, Google Ads, content strategy, and analytics to help businesses build a strong online presence. Through practical campaigns and real-world projects, you'll gain the skills to plan and execute effective digital marketing strategies.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Learn on-page and off-page SEO techniques to improve website rankings and visibility.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Create and manage effective marketing campaigns across Facebook, Instagram, and LinkedIn.",
      },
      {
        title: "Google Ads & PPC",
        description:
          "Plan and run paid advertising campaigns using Google Ads and pay-per-click strategies.",
      },
      {
        title: "Content Marketing Strategy",
        description:
          "Develop engaging content strategies to attract, engage, and convert target audiences.",
      },
      {
        title: "Email & Affiliate Marketing",
        description:
          "Build email campaigns and affiliate marketing strategies to drive customer engagement.",
      },
      {
        title: "Analytics & Performance Tracking",
        description:
          "Use Google Analytics and reporting tools to measure and optimize campaign performance.",
      },
    ],
  },
  {
    id: 12,
    title: "HR & Payroll (SAP HCM)",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Learn human resource management, payroll processing, and SAP HCM functionalities used in organizations.",
    detailDescription:
      "Build a rewarding career in human resources with our HR & Payroll course powered by SAP HCM. Learn core HR processes, payroll management, and employee lifecycle administration using SAP's Human Capital Management module. Gain practical, hands-on experience to manage HR operations efficiently in modern organizations.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "HR Fundamentals",
        description:
          "Understand core human resource management concepts, policies, and organizational structures.",
      },
      {
        title: "SAP HCM Overview",
        description:
          "Learn the architecture and functionalities of SAP Human Capital Management module.",
      },
      {
        title: "Employee Administration",
        description:
          "Manage employee master data, organizational assignments, and personnel actions.",
      },
      {
        title: "Payroll Processing",
        description:
          "Configure and process payroll runs, salary structures, and statutory compliance.",
      },
      {
        title: "Time Management",
        description:
          "Handle attendance, leave management, and time tracking within SAP HCM.",
      },
      {
        title: "Real-World HR Scenarios",
        description:
          "Work on practical case studies simulating real organizational HR and payroll processes.",
      },
    ],
  },
  {
    id: 13,
    title: "UI/UX Design",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Design intuitive user interfaces and experiences using Figma and industry-standard design principles.",
    detailDescription:
      "Transform your creativity into a successful design career with our comprehensive UI/UX Design course. Learn industry-standard tools like Figma, Adobe Photoshop, and Illustrator while mastering user research, wireframing, prototyping, visual design, and responsive interfaces. Through hands-on projects and expert mentorship, you'll build a strong portfolio and gain the practical skills needed to excel in today's digital design industry.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "UI Design Fundamentals",
        description:
          "Learn typography, color theory, layouts, hierarchy, grids, spacing, accessibility, and modern design systems.",
      },
      {
        title: "User Experience (UX) Research",
        description:
          "Understand user personas, customer journeys, interviews, surveys, empathy maps, and usability testing.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Create low and high fidelity wireframes, clickable prototypes, and interactive user flows using Figma.",
      },
      {
        title: "Responsive & Mobile-First Design",
        description:
          "Design responsive interfaces that work seamlessly across desktop, tablet, and mobile devices.",
      },
      {
        title: "Industry Tools",
        description:
          "Master Figma, Adobe Photoshop, Illustrator, Auto Layout, Components, Variables, and Design Systems.",
      },
      {
        title: "Portfolio Projects",
        description:
          "Build real-world UI/UX case studies and portfolio-ready projects that showcase your design skills.",
      },
    ],
  },
  {
    id: 14,
    title: "Software Testing (Manual + Automation)",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Master manual testing, Selenium automation, test cases, and quality assurance best practices.",
    detailDescription:
      "Build a strong career in quality assurance with our Software Testing course covering both manual and automation testing. Learn to design test cases, execute manual testing processes, and automate testing workflows using Selenium. Through hands-on projects and real-world testing scenarios, you'll gain the skills needed to ensure software quality in modern development teams.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Manual Testing Fundamentals",
        description:
          "Learn test case design, test planning, bug reporting, and software testing life cycle (STLC).",
      },
      {
        title: "Test Case Design Techniques",
        description:
          "Master boundary value analysis, equivalence partitioning, and other test design strategies.",
      },
      {
        title: "Automation Testing with Selenium",
        description:
          "Automate web application testing using Selenium WebDriver and Java/Python scripting.",
      },
      {
        title: "API Testing",
        description:
          "Learn to test REST APIs using tools like Postman for functional validation.",
      },
      {
        title: "Test Management Tools",
        description:
          "Work with tools like JIRA and TestNG for test tracking, execution, and reporting.",
      },
      {
        title: "Real-World Testing Projects",
        description:
          "Apply manual and automation testing skills on live projects to build practical QA expertise.",
      },
    ],
  },
  {
    id: 15,
    title: "Java Full Stack",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Learn Java Full Stack to create websites, build backend APIs, and develop complete web applications.",
    detailDescription:
      "Build a strong career in quality assurance with our Software Testing course covering both manual and automation testing. Learn to design test cases, execute manual testing processes, and automate testing workflows using Selenium. Through hands-on projects and real-world testing scenarios, you'll gain the skills needed to ensure software quality in modern development teams.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Manual Testing Fundamentals",
        description:
          "Learn test case design, test planning, bug reporting, and software testing life cycle (STLC).",
      },
      {
        title: "Test Case Design Techniques",
        description:
          "Master boundary value analysis, equivalence partitioning, and other test design strategies.",
      },
      {
        title: "Automation Testing with Selenium",
        description:
          "Automate web application testing using Selenium WebDriver and Java/Python scripting.",
      },
      {
        title: "API Testing",
        description:
          "Learn to test REST APIs using tools like Postman for functional validation.",
      },
      {
        title: "Test Management Tools",
        description:
          "Work with tools like JIRA and TestNG for test tracking, execution, and reporting.",
      },
      {
        title: "Real-World Testing Projects",
        description:
          "Apply manual and automation testing skills on live projects to build practical QA expertise.",
      },
    ],
  },
  {
    id: 16,
    title: "React JS Development",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Become a job-ready React Developer by mastering components, state management, and real-world projects.",
    detailDescription:
      "Build a strong career in quality assurance with our Software Testing course covering both manual and automation testing. Learn to design test cases, execute manual testing processes, and automate testing workflows using Selenium. Through hands-on projects and real-world testing scenarios, you'll gain the skills needed to ensure software quality in modern development teams.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Manual Testing Fundamentals",
        description:
          "Learn test case design, test planning, bug reporting, and software testing life cycle (STLC).",
      },
      {
        title: "Test Case Design Techniques",
        description:
          "Master boundary value analysis, equivalence partitioning, and other test design strategies.",
      },
      {
        title: "Automation Testing with Selenium",
        description:
          "Automate web application testing using Selenium WebDriver and Java/Python scripting.",
      },
      {
        title: "API Testing",
        description:
          "Learn to test REST APIs using tools like Postman for functional validation.",
      },
      {
        title: "Test Management Tools",
        description:
          "Work with tools like JIRA and TestNG for test tracking, execution, and reporting.",
      },
      {
        title: "Real-World Testing Projects",
        description:
          "Apply manual and automation testing skills on live projects to build practical QA expertise.",
      },
    ],
  },  
    {
    id: 17,
    title: "Azure Data Engineering",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Master Azure Data Engineering by learning cloud-based data pipelines, ETL processes, and scalable data solutions using modern Azure tools.",
    detailDescription:
      "Build a strong career in quality assurance with our Software Testing course covering both manual and automation testing. Learn to design test cases, execute manual testing processes, and automate testing workflows using Selenium. Through hands-on projects and real-world testing scenarios, you'll gain the skills needed to ensure software quality in modern development teams.",
    learnTitle: "What You'll Learn",
    learn: [
      {
        title: "Manual Testing Fundamentals",
        description:
          "Learn test case design, test planning, bug reporting, and software testing life cycle (STLC).",
      },
      {
        title: "Test Case Design Techniques",
        description:
          "Master boundary value analysis, equivalence partitioning, and other test design strategies.",
      },
      {
        title: "Automation Testing with Selenium",
        description:
          "Automate web application testing using Selenium WebDriver and Java/Python scripting.",
      },
      {
        title: "API Testing",
        description:
          "Learn to test REST APIs using tools like Postman for functional validation.",
      },
      {
        title: "Test Management Tools",
        description:
          "Work with tools like JIRA and TestNG for test tracking, execution, and reporting.",
      },
      {
        title: "Real-World Testing Projects",
        description:
          "Apply manual and automation testing skills on live projects to build practical QA expertise.",
      },
    ],
  },
];

export default baseCourses;