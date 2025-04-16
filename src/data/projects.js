// src/data/projects.js
import asdpHRImg from "../assets/images/asdpHR.png";
import asdpInventoryImg from "../assets/images/asdpInv.png";
import asdpNDImg from "../assets/images/asdpNd.png";
const projects = [
  {
    id: 1,
    title: "AsdpHR",
    image: asdpHRImg,
    description:
      "A human resource management system designed for ASDP. This web-based system streamlines employee records, attendance, leave, business travel requests, and performance monitoring through an intuitive and secure interface.",
    features: [
      "Employee profile and contract management",
      "Daily attendance tracking with timestamps",
      "Leave application and approval workflows",
      "Business travel request management",
      "Performance monitoring and evaluation tools",
    ],
    demoUrl: "https://asdphr-production-3f81.up.railway.app/",
    repoUrl: "https://github.com/ReGHZ/asdpHR",
    tags: ["Laravel", "Docker", "MySQL"],
    demoCredentials: {
      email: "admin@asdp.com",
      password: "123456",
    },
  },

  {
    id: 2,
    title: "Asdp-Inventory",
    image: asdpInventoryImg,
    description:
      "A web-based inventory management system developed for ASDP, using Laravel.It includes asset management, procurement workflows, goods release processes.",
    features: [
      "Inventory tracking and management",
      "Procurement module for handling requests and release documents",
      "Goods release letters linked to procurement requests and users",
      "Activity logging and change history",
    ],
    demoUrl: "https://asdp-inventory-production.up.railway.app/",
    repoUrl: "https://github.com/ReGHZ/asdp-inventory",
    tags: ["Laravel", "Docker", "MySQL"],
    demoCredentials: {
      email: "admin@admin.com",
      password: "123456",
    },
  },
  {
    id: 3,
    title: "Asdp-ND (Node.js Backend API)",
    image: asdpNDImg,
    description:
      "A fully-featured back-end REST API designed for ASDP using Node.js, Express, and MongoDB. This backend service handles employee management, authentication, role-based access, and business workflows like leave and travel requests.",
    features: [
      "Authentication system with JWT-based login",
      "Role-based access control (Admin & User)",
      "Employee data management with MongoDB",
      "Leave application and approval flow",
      "Modular routing and controller structure",
      "Swagger-based API documentation",
    ],
    demoUrl: "https://asdp-nd-production.up.railway.app/api-docs", // Kosongkan kalau tidak ada frontend atau demo online
    repoUrl: "https://github.com/ReGHZ/asdp-nd",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
  },
];

export default projects;
