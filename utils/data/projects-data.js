import aiAnaomalyDetectSys from '/public/image/aianomalydetectsys.png';
import socialMediaPlatform from '/public/image/socialmediaplatform.png';
import chatApp from '/public/image/flutter_chatapp.png';
import aircastArchDiag from '/public/image/aircast_arch_diag.png';
import sateliteExplorer from '/public/image/data_exploration_tool.png';
import foodKingInteractive from '/public/image/foodKingInteractive.png';

export const projectsData = [
    {
        id: 1,
        name: 'Real-Time Social Media Platform',
        description: "Developed a real-time social media platform with a microservices architecture using Python (Flask, Django) and RabbitMQ for event-driven communication. Integrated Docker for containerization, allowing for seamless deployment and scalability of services. The platform enables instant user interactions and admin post tracking.",
        tools: ['Python', 'Flask', 'Django', 'RabbitMQ', 'Docker'],
        role: 'Backend Developer',
        code: 'https://github.com/varshahindupur09/Real_Time_Event_Driven_Communication.git',
        demo: '',
        image: socialMediaPlatform,
    },
    {
        id: 2,
        name: 'AI-Powered Anomaly Detection System',
        description: 'Built an AI-driven firewall using TensorFlow for real-time anomaly detection, enhancing security in AI interactions. The system is designed to detect and prevent suspicious activities in real-time by monitoring interactions and transactions. It was integrated into a production environment, providing a significant improvement in detecting anomalies.',
        tools: ['TensorFlow', 'Python', 'AI Models'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: aiAnaomalyDetectSys,
    },
    {
        id: 3,
        name: 'ChatWith - A Chat Application',
        description: "Developed an end-to-end SaaS chatbot mobile app called 'ChatWith' using Flutter for the front-end and Spring Boot for the back-end. Integrated WebSockets and Redis for real-time messaging, ensuring seamless communication between users. The app supports asynchronous message exchanges and incorporates Maven for build automation.",
        tools: ['Flutter', 'Spring Boot', 'WebSockets', 'Redis', 'Maven'],
        role: 'Full Stack Developer',
        code: 'https://github.com/varshahindupur09/chatapp_for_communication.git',
        demo: '',
        image: chatApp,  // Add image if available
    },
    {
        id: 4,
        name: 'AirCast - Predicting Air Quality Using ML',
        description: "Developed an app to predict air quality using machine learning algorithms. The system leveraged streaming data stored in AWS S3, which was preprocessed in PostgreSQL. LSTM models were used to forecast air quality, achieving an RMSE of 0.8. The project was designed to assist in predicting hazardous air conditions for different geographical regions.",
        tools: ['AWS S3', 'PostgreSQL', 'LSTM', 'Python', 'Machine Learning'],
        role: 'Data Scientist / Backend Developer',
        code: 'https://github.com/varshahindupur09/AirCast-Predicting-Air-Quality-Using-Machine-Learning.git',
        demo: '',
        image: aircastArchDiag,  // Add image if available
    },
    {
        id: 5,
        name: 'Data Exploration Tool - Satellite Data Integration',
        description: "Built a tool for exploring and visualizing satellite data (GOES, NEXRAD) using AWS infrastructure. Integrated metadata retrieval and developed interactive meteorological analysis features. The tool was designed to handle large-scale datasets, offering efficient querying and visualization capabilities.",
        tools: ['AWS', 'GOES Satellite Data', 'NEXRAD Data', 'Python', 'Data Visualization'],
        role: 'Backend Developer / Data Scientist',
        code: 'https://github.com/varshahindupur09/Weather-Explorer-Interactive-Weather-Data-Visualization.git',
        demo: '',
        image: sateliteExplorer,
    },
    {
        id: 6,
        name: 'FoodKing Interactive: LLM Gemma (Gen AI Project)',
        description: "Developed an AI-powered chatbot for FoodKing restaurant using Ollama Gemma:2B and Streamlit. The chatbot assists customers in placing orders and answering queries about the menu. The project integrates a dynamic menu system, allowing customers to select sizes and quantities for menu items, and provides real-time interaction. Docker was used for containerization to ensure local deployment of all services.",
        tools: ['Streamlit', 'Ollama Gemma:2B', 'Docker', 'Python'],
        role: 'Full Stack Developer',
        code: 'https://github.com/varshahindupur09/PromptEngineeringInAI/tree/main/CHATBOT', // You can add a GitHub link
        demo: 'https://youtu.be/hNW7EwDtSws', // You can add a live demo link here
        image: foodKingInteractive, // Ensure you add this image in your project assets
    }    
];