import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'share-wheels',
    title: "ShareWheels",
    description: "A comprehensive ridesharing platform built with Java and Spring Boot and React, featuring smart ride matching.",
    longDescription: "ShareWheels is a full-stack ridesharing application designed to optimize connection between drivers and passengers.\n\nBackend engineered with Java and Spring Boot for robust performance and scalability.\n\nFrontend built with React for a responsive, modern user interface.\n\nFeatures include algorithm-based ride matching, secure authentication, payment gateway integration and real-time data handling using MySQL.",
    liveLink: "https://sharewheels.vercel.app", 
    githubLink: "https://github.com/D-Prasanth-Kumar/Dynamic_Ridesharing_and_Carpooling",
    video: 'https://res.cloudinary.com/dfbtpurol/video/upload/v1767667593/sharewheels_sro2m4.mp4', 
    image: '/images/sharewheels1.png', 
    tweetUrl: "",
    tags: [
      "Java",
      "Spring Boot",
      "Maven",
      "JWT",
      "React",
      "MySQL",
      "REST API"
    ],
  }, 
  {
    id: 'secure-link',
    title: "SecureLink",
    description: "A high-security, client-side encrypted vault for sharing temporary secrets with zero-knowledge architecture.",
    longDescription: "SecureLink is a confidential data vault engineered for zero-knowledge privacy.\n\nClient-Side Security: Utilizes AES-256 encryption within the browser so that sensitive data is encrypted before it ever reaches the server. The decryption key remains in the URL fragment (#) and is never sent to the backend.\n\nBackend & Infrastructure: Powered by a Java Spring Boot microservice containerized with Docker and deployed on Render. Leverages MongoDB Atlas for highly available cloud data storage.\n\nKey Features: Implements a '3-Strike' security protocol (auto-destruction after 3 failed PIN attempts), time-based expiration (TTL), manual 'Burn on Read' functionality, and dynamic QR code generation for secure mobile sharing.",
    liveLink: "https://secure-link-vault.vercel.app", 
    githubLink: "https://github.com/D-Prasanth-Kumar/SecureLink",
    video: 'https://res.cloudinary.com/dfbtpurol/video/upload/v1770984268/Screen_Recording_2026-02-13_172919_jncqsd.mp4',
    image: '/images/securelink.png', 
    tags: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Docker",
      "React",
      "AES-256",
      "Web Crypto API"
    ],
  },
  {
    id: 'land-parameter-device',
    title: "Land Parameter Device (IoT & ML)",
    description: "Portable IoT device using ESP32 and Machine Learning to analyze soil health and predict crop suitability in real-time.",
    longDescription: "A smart agricultural device designed to bridge the gap between traditional soil testing and modern technology.\n\nIoT Architecture: Powered by ESP32 and Arduino, integrating capacitive moisture, temperature, and humidity sensors to stream live field data.\n\nML Backend: Engineered a Python (Flask) backend utilizing Random Forest Classifiers and Linear Regression. The model predicts Soil pH, Electrical Conductivity (EC), and suitable crops with approximately 92% accuracy.\n\nUser Interface: Features a dual-display system—an onboard LCD for instant field readings and a web dashboard for historical data logging.",
    liveLink: "", 
    githubLink: "https://github.com/D-Prasanth-Kumar/Portable_Land_Parameter_Measuring_Device_using_IoT_and_MachineLearning", 
    image: '/images/Land.png', 
    tweetUrl: "",
    tags: [
      "IoT",
      "Python",
      "Flask",
      "Machine Learning",
      "ESP32",
      "Arduino"
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}