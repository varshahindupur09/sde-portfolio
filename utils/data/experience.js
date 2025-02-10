//utils/data/expereince.js
import SystemDesignInitialArchitectureServerless from '/public/image/sysdesignInitialRA.png';

export const experiences = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "[RESEARCH] Northeastern University",
    location: "Boston, MA",
    duration: "(Feb 2024 – December 2024)",
    techstack: "MongoDB, Express.js, React.js 17, Node.js, FastAPI, Redux, AWS (CloudFront, S3, Beanstalk, CloudWatch), LLM, RAG pipleine",
    responsibilities: [
      "Built a secure, scalable survey platform for academic research for 2M+ user interactions and achieving $10K+ savings over traditional solutions.",
      "Utilized React, Node.js, MongoDB, Docker to build robust data application from scratch, turning user interactions into valuable research insights.",
      "Secured user data with JWT authentication in REST APIs, ensuring privacy compliance and safeguarding sensitive information.",
      "Deployed MERN-based survey platform on Elastic Beanstalk with JWT authentication for 2M+ users, handling 500+ peak concurrent sessions.",
      "Implemented lazy loading, static assets caching and optimized HTTP requests to improve web-page performance by 23%",
      "Incorporated AWS infrastructure with Terraform, CloudWatch monitoring, and CloudFront delivery, allowing smooth application deployment.",
      "Enhanced the system with addition of LLM (Lama 2.0) and RAG pipeline chatbot for answering queries of the participants of the survey."
    ],
    image1: SystemDesignInitialArchitectureServerless,
    github1: "https://github.com/varshahindupur09/RA_Online_Instrument_Architecture/blob/main/README.md"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "IBM Global Services",
    location: "Dallas, TX",
    duration: "(May 2023 – Present)",
    techstack: "Tech Stack: Python, asyncronous APIs, AWS, LangChain, CI/CD, GitHub Actions, Docker, Kubernetes",
    responsibilities: [
      "Developed web platform for diagnosing Parkinson’s disease using React.js, improving accessibility for healthcare professionals and achieving $8,000 in cost savings. Built HIPAA-compliant authentication workflows using OAuth 2.0, ensuring secure handling of sensitive data. Migrated static assets to AWS S3 and served via CloudFront CDN, reducing EC2 instance load and lowering content delivery costs by 25%. Integrated LangChain document retrieval system, boosting efficiency by 15% and cutting research time by 20%. Developed Meeting Intelligence application using Whisper API, GPT-3.5, AWS (Lambda and SQS) enabling real-time video transcription, chat, and automated summaries, improving post-meeting insights by 30%. Enhanced deployment and monitoring using AWS services (EC2, S3, CloudWatch, CloudFront), ensuring 99.9% uptime and fault-tolerant production environments. Developed unit and integration tests with Pytest, ensuring code quality and functionality while maintaining high level of reliability throughout development process."
    ]
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "[RESEARCH] Northeastern University",
    location: "Boston, MA",
    duration: "(Feb 2023 – May 2023)",
    techstack: "Python, OpenCV, DeepFace, GCS, AngularJS, NEU’s Discovery HPC Platform",
    responsibilities: [
      "Architected tool to analyze diversity data scrapped from 1M+ Twitter posts and images, to get underrepresented ambassadors for luxury brands using Python, Twitter APIs, Selenium, for academic research.",
      "Processed demographic image data with OpenCV and DeepFace ML, creating comprehensive dataset for diversity analysis for marketing and advertising team.",
      "Built interactive data visualization tool with Python Flask (Backend), GCP (Storage), and Angular JS, enabling clear presentation of research findings.",
      "Managed version control with Git and built CI/CD pipelines using GitLab and GitHub Actions, enabling 2-hour faster releases.",
      "Optimized large-scale image analysis (1.3TB) by implementing parallel processing with Dask and CUDA GPUs on HPC systems, reducing processing time from 6 hours to 30 seconds - a 349x efficiency gain."
    ]
  },
  {
    id: 4,
    title: "Senior Software Engineer",
    company: "Accenture",
    location: "Pune, MH, India",
    duration: "(Mar 2019 – Aug 2022)",
    techstack: "Client: E-Commerce",
    responsibilities: [
      "Optimized server-side performance using Node.js, enabling real-time data processing and handling 10,000+ concurrent user requests. Created reusable Terraform configurations for AWS, reducing deployment errors by 15% and improving infrastructure consistency. Developed and maintained product browsing and cart modules within Salesforce Commerce Cloud (SFCC) SaaS e-commerce platform, reducing average page load time by 15%. Developed APIs and integrated third-party services (Stripe, Salesforce Service Cloud, and Order Management System) to streamline checkout flow, resulting in 30% improvement in checkout completion rate. Customized search experience using AWS Elasticsearch, improving search accuracy and driving 8% increase in conversion rates. Led team of 10 members for migration from monolithic MVC to microservices-based architecture, improving code modularity and maintainability by 40%.",
      "Tech Stack: Salesforce Commerce Cloud (SFCC), Redis (ElastiCache), Elasticsearch, Jenkins (CI/CD), Maven (Build automation), SpringBoot Framework (4.3.x), MongoDB (Database), Terraform (Infrastructure-as-Code)."
    ]
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Accenture",
    location: "Mumbai City, MH, India",
    duration: "(Mar 2019 – Dec 2020)",
    techstack: "Client: Healthcare",
    responsibilities: [
      "Built health insurance portal front-end using React.js, leveraging CSS Grid for flexible layouts, and component-based architecture to enhance accessibility and reusability for 100,000+ policyholders. Developed Python scripts for automated data processing, reducing manual effort by 30% and improving operational efficiency. Designed and optimized MySQL database schemas, improving data retrieval efficiency by 25% and ensuring seamless backend performance. Mentored team of 4 junior engineers, fostering culture of code quality and best practices, resulting in 20% reduction in bug reports.",
      "Tech Stack: Python, React.js (Frontend), Express.js-Node.js (Integration Layer)."
    ]
  },
  // {
  //   id: 6,
  //   title: "Software Engineer",
  //   company: "Infosys",
  //   location: "Pune, MH, India",
  //   duration: "(Mar 2017 – Mar 2019)",
  //   techstack: "Client: Healthcare | Tech Stack: HTML, Tailwind CSS, React 16, REST APIs, Test Automation, OAuth 2.0",
  //   responsibilities: [
  //     "Developed a responsive patient portal front-end with React.js, using CSS Grid, component-based architecture and state management",
  //     "Reduced user login time from 8 seconds to 3 seconds by implementing OAuth 2.0, ensuring a faster and smoother experience.",
  //     "Developed robust end-to-end automated testing framework via Selenium, Cucumber, TestNG to reducing 40% manual testing effort.",
  //     "Collaborated in client meetings, resulting to 20% rise in appreciations on healthcare app functionalities.",
  //     "Significantly contributed to the team effort in remediating the log4j vulnerability across over 100 servers, enhancing the security posture."
  //     // "Product: Loan Origination Platform for Northern Trust Bank",
  //     // "Improved UI/UX loan approval features delivery time by 20% using React, Java SpringBoot and Material-UI, saving $100K annually.",
  //     // "Designed an OAuth 2.0-based secure authentication and authorization system, enhancing API security by 20% across 50+ platforms.",
  //     // "Diminished production defects by 40% via collaboration with QA and Data Science teams, leveraging automated testing and data-driven insights."
  //   ]
  // },
  {
    id: 7,
    title: "Game Developer (Android)",
    company: "Rendered Ideas",
    location: "Mumbai City, MH, India",
    duration: "(May 2016 – Feb 2017)",
    techstack: "Product: Android Games | Tech Stack: Kotlin, WebRTC",
    responsibilities: [
      "Optimized Kotlin code using MVVM Arch., reducing launch time from 2.1 sec. to 768 milliseconds and enhancing scalability..",
      "Integrated the library into a mobile app using Retrofit, enabling seamless communication with UV Bot over Wi-Fi.",
      "Implemented WebRTC to enhance real-time communication between Android smartphones and IoT devices over TCP/IP."
    ]
  }
];


// "Developed and optimized a Java-based Maven-TestNG-BDD framework for a live chatting application, reducing testing time by 90%.",
//       "Set up Jenkins CI/CD pipelines, accelerating deployment speed and providing rapid feedback on code changes.",
//       "Mentored junior engineers, reviewed code, and introduced new workflows using Jenkins, Maven, and BitBucket."

// "Integrated Selenium with DevTest 10.1 for ISO 20022 messages, reducing production time by 70%.",
// "Automated 500 test cases within a month using POM architecture for IMActions and TCS Bancs projects.",
// "Managed PL/SQL scripts for efficient data extraction in aircraft document management systems for Boeing."
// "Designed AWS QuickSight dashboards to validate and analyze user engagement via demographics and feedback, boosting data visibility by 30%."