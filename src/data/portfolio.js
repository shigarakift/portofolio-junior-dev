import { Terminal, Server, Cpu, HardDrive, ShieldCheck, Database } from "lucide-react";

export const personalData = {
  name: "Bagas Alfattah R.",
  username: "shigarakift",
  title: "Linux Administration & Backend Specialist",
  role: "Linux Admin & Backend Developer",
  status: "Available for Internship & Part-Time",
  email: "bagasfattah15@gmail.com",
  github: "https://github.com/shigarakift",
  linkedin: "https://www.linkedin.com/in/bagas-alfattah-r-162975320/",
  location: "Cibinong, Indonesia",
  bio: "SIJA student at SMKN 1 Cibinong focused on Linux server administration, backend architecture, containerized environments, and system automation.",
  about: "I build robust backend systems and configure high-reliability Linux server environments. With a strong foundation in network systems and application deployment, I specialize in building efficient APIs, managing containerized infrastructure with Docker, and scripting terminal utilities.",
  sysStats: {
    kernel: "Linux 6.8.0-custom",
    uptime: "99.98%",
    shell: "zsh 5.9",
    mainFocus: "Infrastructure & Backend",
  }
};

export const skills = [
  {
    name: "Linux Administration",
    category: "System & Infra",
    icon: Terminal,
    description: "Server configuration, systemd services, SSH hardening, Bash scripting, and performance tuning.",
    tags: ["Ubuntu Server", "Debian", "Bash", "Systemd", "Nginx"]
  },
  {
    name: "Backend Development",
    category: "Software Engineering",
    icon: Server,
    description: "Designing RESTful APIs, database schema management, authentication systems, and server-side logic.",
    tags: ["Node.js", "Go", "Laravel", "PostgreSQL", "REST API"]
  },
  {
    name: "Docker & Containerization",
    category: "DevOps & Deployment",
    icon: Cpu,
    description: "Creating reproducible dev environments, multi-stage Dockerfiles, Docker Compose orchestrations.",
    tags: ["Docker", "Docker Compose", "Container Security", "CI/CD"]
  }
];

export const education = [
  {
    id: 1,
    school: "SMKN 1 Cibinong",
    major: "Sistem Informatika, Jaringan, dan Aplikasi (SIJA)",
    duration: "2023 — Present",
    status: "Active Student",
    description: "4-year vocational program specializing in Software Engineering, Network Infrastructure, and Systems Administration. Gaining practical hands-on experience in server management, backend APIs, and network protocols.",
    highlights: [
      "Linux Server Configuration & Maintenance",
      "Network Protocols & Infrastructure",
      "Database Systems & API Development"
    ]
  }
];

export const projects = [
  // {
  //   id: 1,
  //   title: "SysMon CLI",
  //   tagline: "Lightweight Server Metrics Monitor",
  //   category: "Terminal Utility / Go & Bash",
  //   description: "A terminal-based system monitoring tool designed to track CPU usage, RAM utilization, active processes, and disk I/O in real time with minimal overhead.",
  //   tech: ["Go", "Bash", "Linux API", "Docker"],
  //   github: "https://github.com/shigarakift",
  //   demo: "#",
  //   badge: "System Tool",
  //   highlights: ["Real-time process telemetry", "Low memory footprint", "Configurable alert thresholds"]
  // },
  {
    id: 2,
    title: "Secure REST API",
    tagline: "Production-Grade Backend Boilerplate",
    category: "Backend / Infrastructure",
    description: "A hardened backend API starter featuring JWT authentication, role-based access control, PostgreSQL connection pooling, and structured error handling.",
    tech: ["Go / Node.js", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/shigarakift",
    demo: "#",
    badge: "Backend Core",
    highlights: ["Rate limiting & CORS middleware", "Automated migration scripts", "Docker Compose setup"]
  },
  {
    id: 3,
    title: "Hotel Ordering Platform",
    tagline: "Fullstack Food & Beverage Management",
    category: "Fullstack Web",
    description: "A comprehensive web application for hotel guests to order food, beverages, and room services directly with real-time status updates.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/shigarakift",
    demo: "#",
    badge: "Web Application",
    highlights: ["Role-based admin dashboard", "Order tracking pipeline", "Relational database schema"]
  }
];
