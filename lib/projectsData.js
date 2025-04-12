// faris-jalal-portfolio/lib/projectsData.js
export const projectsData = [
  {
    slug: "usb-rubber-ducky", // Added slug
    title: "USB Rubber Ducky",
    description:
      "Custom human interface device to execute automated payload scripts...", // Short description for card
    longDescription: [
      // Added long description (array of paragraphs)
      "Developed a custom Human Interface Device (HID) resembling a standard USB drive.",
      "The device executes automated payload scripts upon connection to a target machine.",
      "Payloads were designed to perform actions such as disabling antivirus software, modifying firewall rules, and deploying lightweight keyloggers for security testing and demonstration purposes.",
      "Utilized Arduino platform for microcontroller programming and HID emulation.",
    ],
    image: "/images/projects/1/1.jpg", // Main card image
    galleryImages: ["/images/projects/1/1.jpg"], // Added gallery images
    link: "/projects/usb-rubber-ducky", // Updated link
    githubLink: "#", // Added optional GitHub link (placeholder)
    tags: ["Security", "Arduino", "HID"],
    year: "2022",
  },
  {
    slug: "stock-data-analyzer", // Added slug
    title: "Stock Data Analyser",
    description: "Microservices-based stock analysis platform using AWS...", // Short description
    longDescription: [
      // Added long description
      "Architected and implemented a stock analysis platform leveraging a microservices approach.",
      "Utilized AWS Lambda for serverless compute functions, API Gateway for managing API endpoints, and S3 for data storage.",
      "The system enables real-time retrieval of stock data from external APIs and provides visualization capabilities through a frontend interface.",
      "Integrated various financial data sources and focused on scalability and fault tolerance.",
    ],
    image: "/images/projects/2/1.jpg",
    galleryImages: ["/images/projects/2/1.jpg", "/images/projects/2/2.jpg"], // Added gallery images
    link: "/projects/stock-data-analyzer", // Updated link
    githubLink: "#", // Placeholder GitHub link
    tags: ["Microservices", "AWS", "S3", "APIs", "Python", "Serverless"],
    year: "2023",
  },
  {
    slug: "plusone-event-app", // Added slug
    title: "PlusOne",
    description: "One-stop event planning/booking cross-platform mobile app...", // Short description
    longDescription: [
      "Led the design and development of 'PlusOne', a comprehensive mobile application for event planning and booking.",
      "Built using Flutter for cross-platform compatibility (iOS/Android) and Firebase (Firestore NoSQL) for backend data management.",
      "Features included event discovery, booking management, integrated chat, and vendor coordination tools.",
      "The backend was supported by a multithreaded Flask (Python) server for specific processing tasks.",
    ],
    image: "/images/projects/3/1.jpg",
    galleryImages: [
      "/images/projects/3/1.jpg",
      "/images/projects/3/2.jpg",
      "/images/projects/3/3.jpg",
    ],
    link: "/projects/plusone-event-app", // Updated link
    githubLink: null, // Example: No GitHub link
    tags: [
      "Flutter",
      "Mobile App",
      "Firebase",
      "System Design",
      "Python",
      "Flask",
    ],
    year: "2022",
  },
  {
    slug: "soccer-droids", // Added slug
    title: "Soccer Droids",
    description:
      "Autonomous soccer-playing robot with Arduino-based control...", // Short description
    longDescription: [
      "Developed an autonomous robot designed to play soccer in a controlled environment.",
      "Programmed the Arduino-based control system responsible for movement, strategy, and real-time decision-making based on sensor input.",
      "Integrated a Pixy2 Camera for visual object detection and tracking (ball and goal).",
      "Involved hardware assembly, sensor integration, and algorithm development for autonomous navigation and gameplay.",
    ],
    image: "/images/projects/4/1.jpg",
    galleryImages: ["/images/projects/4/1.jpg", "/images/projects/4/2.jpg"],
    link: "/projects/soccer-droids", // Updated link
    githubLink: "#", // Placeholder GitHub link
    tags: ["Arduino", "Robotics", "Pixy2", "Engineering", "C++"],
    year: "2019",
  },
];
