//utils/data/expereince.js
import SystemDesignInitialArchitectureServerless from '/public/image/sysdesignInitialRA.png';

export const experiences = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "[RESEARCH] Northeastern University",
    location: "Boston, MA",
    duration: "(Feb 2024 – Present)",
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
    title: "R&D Ecosystem Coordinator Co-Op",
    company: "Dassault Systèmes",
    location: "Atlanta, GA",
    duration: "(May 2023 – Dec 2023)",
    techstack: "Tech Stack: Python, asyncronous APIs, AWS, LangChain, CI/CD, GitHub Actions, Docker, Kubernetes",
    responsibilities: [
      "Developed a Meeting Intelligence application using Python, FastAPI, Whisper APIs, AWS S3, EC2 and achieving 80% precision in answering questions from audio recordings of meetings and providing concise, reliable summaries. Increased task automation by 30% using Airflow for streamlined ad-hoc and batch data processing. Enhanced system scalability with Nginx load balancing, reducing server load by 25% and supporting growth.",
      "Integrated a LangChain-based document retrieval system, boosting efficiency by 15% and cutting research time by 20%.",
      "Constructed frontend modules using Django, CSS, and Next.js, achieving sub-500ms latency for seamless interactions across 500+ users.",
      "Integrated website performance monitoring tools (Google PageSpeed Insights, Lighthouse) to enable webpage performance logging.",
      "Implemented CI/CD pipelines using GitHub Actions, Docker, and EKS (K8), resulting in reduced infrastructure costs by $5000.",
      "Enabled real-time project tracking with Kafka integration for the portfolio team, facilitating ROI analysis and efficient resource allocation.",
      "Upgraded a legacy system by creating a Risk Analyzer app with React, FastAPI, and PostgreSQL, introducing alerts to reduce operational incidents.",
      "Facilitated system design, APIs, and data flow, improving user engagement by 15% and meeting stakeholder requirements."
    ]
  },
  {
    id: 3,
    title: "Software Developer",
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
    company: "Blueconch Technologies (UST - Xpanxion)",
    location: "Pune, MH, India",
    duration: "(Dec 2020 – Aug 2022)",
    techstack: "Client: Credit Reporting & Finance | Tech Stack: GraphQL, Java Spring Boot, jQuery, AWS, Angular",
    responsibilities: [
      "Engineered real-time GraphQL APIs with Java Spring, with push updates, reduced latency by 20%, handling 10,000 requests/seconds",
      "Built responsive web pages with HTML5, CSS3, jQuery, and AngularJS, integrated JSON data to improve load times by 30 seconds",
      "Developed cloud-native solutions on AWS (Lambda, S3, EC2), reducing cold start issues by 60% and infrastructure costs by 40%.",
      "Boosted CI/CD deployment pipeline time from 60 to under 15 minutes through Jenkins and Maven automation.",
      "Directed biweekly client demos of Credit Risk microservices within an Agile framework, resulting in 95\% client satisfaction..",
      // "Developed UI from scratch with Next.js and TypeScript, improving reusability by 40% and achieving 3x faster performance with low latency.",
      "Improved API latency by 40% with Redis caching and FastAPI, streamlining credit scoring workflows.",
      // "Led 5 teams in developing scalable microservices with Java and Spring Boot for credit risk calculations, achieving 99.9% uptime while processing 500GB+ daily transactions and tracking data for 1M+ users to enhance financial insights",
      "Automated event-driven workflow with AWS Lambda, EventBridge, and SNS, optimizing real-time cancellations, reminders, and updates.",
      "Deployed the application on AWS using Kubernetes for container orchestration and Docker for containerization, ensuring scalability.",
      "Developed UI modules from scratch with Next.js and TypeScript, improving reusability by 40% and achieving 3x faster performance with low latency.",
      // "Improved deployment speed by 20\% by designing backend services in Java Spring Boot and automating CI/CD pipelines with Jenkins and Maven.",
      // "Collaborated on reducing processing time by 2 days through Redis migration for high-risk accounts, significantly boosting data access speed.",
      // "Streamlined real-time data exchange by building APIs with XML and Kafka, processing 500K+ transactions daily for 50K users",
      "Collaborated on designing functional, regression, integration tests automation suites reducing 98% defect pre-release."
    ]
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Accenture",
    location: "Mumbai City, MH, India",
    duration: "(Mar 2019 – Dec 2020)",
    techstack: "Client: E-Commerce | Tech Stack: React 16, AWS Serverless Architecture, Terraform",
    responsibilities: [
      // "Product: Appointment Scheduling System",
      "Optimized React.js application performance by lazy loading components, using code-splitting techniques, and leveraging image optimization, resulting in a 10% improvement in page load times.",
      "Integrated Stripe API for flexible payment processing, supporting various payment methods and currencies, ensuring compliance.",
      "Leveraged Terraform (IaC) for ECS, EKS, API Gateway, and Lambda with GitHub Actions CI/CD, reducing 65% deployment time.",
      "Optimized system performance with Elasticache (Redis) caching and AWS Auto Scaling, ensuring 99.9% uptime in high traffic.",
      // "Reduced no-show rates by 25%, saving healthcare providers $250K annually, by implementing Azure Event Hubs, Webhooks, and SignalR.",
      "Optimized backend queries in Java, reducing response times from 500ms to 350ms, improving user experience during high-traffic periods.",
      // "Designed decoupled architectures using Java Spring, resulting in a 30% decrease in API call volume.",
      "Spearheaded phased delivery plan, meeting a critical 6-week deadline and earning client recognition for balancing innovation with cost efficiency.",
      "Promoted to Senior Software Engineer at Accenture."
    ]
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Infosys",
    location: "Pune, MH, India",
    duration: "(Mar 2017 – Mar 2019)",
    techstack: "Client: Healthcare | Tech Stack: HTML, Tailwind CSS, React 16, REST APIs, Test Automation, OAuth 2.0",
    responsibilities: [
      "Developed a responsive patient portal front-end with React.js, using CSS Grid, component-based architecture and state management",
      "Reduced user login time from 8 seconds to 3 seconds by implementing OAuth 2.0, ensuring a faster and smoother experience.",
      "Developed robust end-to-end automated testing framework via Selenium, Cucumber, TestNG to reducing 40% manual testing effort.",
      "Collaborated in client meetings, resulting to 20% rise in appreciations on healthcare app functionalities.",
      "Significantly contributed to the team effort in remediating the log4j vulnerability across over 100 servers, enhancing the security posture."
      // "Product: Loan Origination Platform for Northern Trust Bank",
      // "Improved UI/UX loan approval features delivery time by 20% using React, Java SpringBoot and Material-UI, saving $100K annually.",
      // "Designed an OAuth 2.0-based secure authentication and authorization system, enhancing API security by 20% across 50+ platforms.",
      // "Diminished production defects by 40% via collaboration with QA and Data Science teams, leveraging automated testing and data-driven insights."
    ]
  },
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