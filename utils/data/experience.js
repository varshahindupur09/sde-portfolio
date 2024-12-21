//utils/data/expereince.js
import SystemDesignInitialArchitectureServerless from '/public/image/sysdesignInitialRA.png';

export const experiences = [
  {
    id: 1,
    title: "Graduate Research Assistance (Full Stack Engineer)",
    company: "Northeastern University",
    location: "Boston, MA",
    duration: "(Feb 2024 – Present)",
    responsibilities: [
      "Built a secure, scalable survey platform for academic research for 2M+ user interactions and achieving $10K+ savings over traditional solutions.",
      "Utilized React, Node.js, MongoDB, Docker to build robust data application from scratch, turning user interactions into valuable research insights.",
      "Secured user data with JWT authentication in REST APIs, ensuring privacy compliance and safeguarding sensitive information.",
      "Developed MERN-based survey platform on Elastic Beanstalk with JWT authentication for 2M+ users, handling 500+ peak concurrent sessions.",
      "Implemented lazy loading, static assets caching and optimized HTTP requests to improve web-page performance by 23%",
      "Incorporated AWS infrastructure with Terraform, CloudWatch monitoring, and CloudFront delivery, preventing 12 hours of downtime monthly."
    ],
    image1: SystemDesignInitialArchitectureServerless,
    github1: "https://github.com/varshahindupur09/RA_Online_Instrument_Architecture/blob/main/README.md"
  },
  {
    id: 2,
    title: "R&D Ecosystem Coordinator Co-Op",
    company: "Novelis",
    location: "Atlanta, GA",
    duration: "(May 2023 – Dec 2023)",
    responsibilities: [
      "Crafted meeting intelligence app with Python and Azure SQL, automated responses to 80% of queries and enhancing productivity for 100+ users.",
      "Engineered E2E Meeting Intelligence App, automated 80% of queries with Python, Cosmos DB, and OpenAI APIs, benefitting 100+ colleagues.",
      "Constructed frontend modules using Django, CSS, and Next.js, achieving sub-500ms latency for seamless interactions across 500+ users.",
      "Integrated website performance monitoring tools (Google PageSpeed Insights, Lighthouse) to enable webpage performance logging.",
      "Implemented CI/CD pipelines in Azure using DevOps, GitHub Actions, and CLI, streamlining deployments for greater efficiency and reliability.",
      "Increased task automation by 30% using Airflow for streamlined ad-hoc and batch data processing.",
      "Enhanced system scalability with Nginx load balancing, reducing server load by 25% and supporting growth.",
      "Enabled real-time project tracking with Kafka integration for the portfolio team, facilitating ROI analysis and efficient resource allocation.",
      "Upgraded a legacy system by creating a Risk Analyzer app with React, FastAPI, and PostgreSQL, introducing alerts to reduce operational incidents."
    ]
  },
  {
    id: 3,
    title: "Graduate Reseach Assistant (Software Engineer, Data Scientist)",
    company: "Northeastern University",
    location: "Boston, MA",
    duration: "(Feb 2023 – May 2023)",
    responsibilities: [
      "Architected tool to analyze diversity data scrapped from 1M+ Twitter posts and images, to get underrepresented ambassadors for luxury brands using Python, Twitter APIs, Selenium, for academic research.",
      "Processed demographic image data with OpenCV and DeepFace ML, creating comprehensive dataset for diversity analysis for marketing and advertising team.",
      "Built interactive data visualization tool with Python Flask, Dropbox APIs, and Plotly, enabling clear presentation of research findings.",
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
    responsibilities: [
      "Developed UI from scratch with Next.js and TypeScript, improving reusability by 40% and achieving 3x faster performance with low latency.",
      "Improved API latency by 40% with Redis caching and FastAPI, streamlining credit scoring workflows.",
      "Led 5 teams in developing scalable microservices with Java and Spring Boot for credit risk calculations, achieving 99.9% uptime while processing 500GB+ daily transactions and tracking data for 1M+ users to enhance financial insights",
      "Automated event-driven workflow with AWS Lambda, EventBridge, and SNS, optimizing real-time cancellations, reminders, and updates.",
      "Deployed the application on AWS using Kubernetes for container orchestration and Docker for containerization, ensuring scalability.",
      "Developed UI from scratch with Next.js and TypeScript, improving reusability by 40% and achieving 3x faster performance with low latency.",
      // "Improved deployment speed by 20\% by designing backend services in Java Spring Boot and automating CI/CD pipelines with Jenkins and Maven.",
      // "Collaborated on reducing processing time by 2 days through Redis migration for high-risk accounts, significantly boosting data access speed.",
      "Streamlined real-time data exchange by building APIs with XML and Kafka, processing 500K+ transactions daily for 50K users",
      "Designed functional, regression, integration tests automation suites reducing 98% defect pre-release."
    ]
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Accenture",
    location: "Mumbai City, MH, India",
    duration: "(Mar 2019 – Dec 2020)",
    responsibilities: [
      "Product: Appointment Scheduling System",
      "Reduced no-show rates by 25%, saving healthcare providers $250K annually, by implementing Azure Event Hubs, Webhooks, and SignalR.",
      "Optimized backend queries in Java, reducing response times from 500ms to 350ms, improving user experience during high-traffic periods.",
      "Designed decoupled architectures using Java Spring, resulting in a 30% decrease in API call volume.",
      "Spearheaded phased delivery plan, meeting a critical 6-week deadline and earning client recognition for balancing innovation with cost efficiency."
    ]
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Infosys",
    location: "Pune, MH, India",
    duration: "(Mar 2017 – Mar 2019)",
    responsibilities: [
      "Product: Loan Origination Platform for Northern Trust Bank",
      "Improved UI/UX loan approval features delivery time by 20% using React, Java SpringBoot and Material-UI, saving $100K annually.",
      "Designed an OAuth 2.0-based secure authentication and authorization system, enhancing API security by 20% across 50+ platforms.",
      "Diminished production defects by 40% via collaboration with QA and Data Science teams, leveraging automated testing and data-driven insights."
    ]
  },
  {
    id: 7,
    title: "Game Development Intern",
    company: "Rendered Ideas",
    location: "Mumbai City, MH, India",
    duration: "(Nov 2016 – Feb 2017)",
    responsibilities: [
      "Enhanced gameplay with physics-based mechanics in a custom-built, Java-based game engine.",
      "Integrated sentiment analysis in the game, resulting in a 10x increase in downloads.",
      "Utilized Core Java for multithreading, file handling, and garbage collection to optimize game performance."
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