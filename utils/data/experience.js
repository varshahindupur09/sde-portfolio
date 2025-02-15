//utils/data/expereince.js
import SystemDesignInitialArchitectureServerless from '/public/image/sysdesignInitialRA.png';

export const experiences = [
  {
    "id": 1,
    "title": "Full Stack Developer",
    "company": "Capital One",
    "location": "Dallas, TX",
    "duration": "(May 2023 – Present)",
    "techstack": "React.js, Redux, Node.js, AWS (API Gateway, DynamoDB, EKS, ELK Stack, Terraform), OAuth 2.0, JWT, Redis, Jenkins, GitHub Actions, Docker",
    "responsibilities": [
        "Enhanced Capital One Rewards Redemption system using React/Redux, driving a 20% boost in user engagement and revenue growth.",
        "Designed and implemented OAuth 2.0 and JWT-based authentication for APIs, minimizing unauthorized access incidents by 20% and ensuring secure user data handling.",
        "Utilized AWS API Gateway to manage up to 500K API requests per day, maintaining high availability and performance for Credit Score Analysis and Rewards Redemption systems.",
        "Optimized DynamoDB performance with indexing and Redis caching, enabling sub-100ms query responses and enhancing real-time analytics.",
        "Automated CI/CD pipelines with Jenkins, GitHub Actions, and Docker, eliminating manual deployment errors and increasing release frequency.",
        "Reduced infrastructure provisioning time by 70% via Terraform automation, standardizing cloud environments.",
        "Standardized Kubernetes (EKS) infrastructure with Helm, cutting manual operations by 60% and upgraded system observability with the ELK Stack."
    ],
    "image1": "",
    "github1": "https://github.com/varshahindupur09"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "[RESEARCH under Prof. Kelly Wellman] Northeastern University",
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
    "id": 3,
    "title": "Senior Software Engineer",
    "company": "Deloitte",
    "location": "Pune, India",
    "duration": "(Mar 2019 – Aug 2022)",
    "techstack": "Python, XGBoost, TensorFlow, Apache Airflow, PySpark, WebSocket, AWS (Lambda, EventBridge), FastAPI, Django, SQLAlchemy, Pytest, Selenium Grid",
    "responsibilities": [
        "Developed a credit risk ML model using XGBoost and TensorFlow, achieving a 92% accuracy rate and reducing false positives.",
        "Automated 250K+ daily data processing with Apache Airflow & PySpark, eliminating manual workload for an entire week.",
        "Engineered a real-time ML prediction system with WebSocket, AWS Lambda, and EventBridge, delivering up to $8,000 in monthly infrastructure savings.",
        "Led a monolith-to-microservices migration, reducing deployment time from 4 hours to 30 minutes and enabling scalable real-time processing.",
        "Optimized API performance by designing asynchronous backend services with FastAPI, Django, and SQLAlchemy ORM.",
        "Introduced a TDD-driven test automation framework using Pytest and Selenium Grid, reducing defects by 30%.",
        "Authored technical documentation for codebases, APIs, and system design, accelerating new developer onboarding by 2 weeks."
    ],
    "image1": "",
    "github1": "https://github.com/varshahindupur09"
  },
  {
    id: 4,
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
    "id": 5,
    "title": "Python Developer",
    "company": "Capgemini",
    "location": "Mumbai, India",
    "duration": "(Mar 2017 – Mar 2019)",
    "techstack": "Python, Pandas, NumPy, Django, GraphQL, Azure (Functions, Blob Storage), JavaScript, Agile Scrum",
    "responsibilities": [
        "Built a healthcare data processing system using Python, Pandas, and NumPy, improving workflow efficiency by 40%.",
        "Engineered GraphQL APIs and optimized the Django backend, reducing payload size by 20% and improving response times by 300ms.",
        "Launched a Health Information Exchange on Azure Functions and Blob Storage, enhancing system scalability and reducing deployment complexity.",
        "Optimized the frontend through lazy loading, asset caching, and dynamic imports, cutting initial load time by 3.2 seconds.",
        "Drove Agile Scrum adoption, reducing project delivery time and ensuring seamless feature delivery."
    ],
    "image1": "",
    "github1": "https://github.com/varshahindupur09"
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