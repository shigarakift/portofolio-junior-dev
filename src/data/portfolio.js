import { Terminal, Server, Cpu, HardDrive, ShieldCheck, Database } from "lucide-react";

export const personalData = {
  name: "Bagas Alfattah R.",
  username: "shigarakift",
  title: "Linux Administration & Backend Developer",
  role: "Linux Admin & Backend Developer",
  status: "Available for Internship & Part-Time",
  email: "bagasfattah15@gmail.com",
  github: "https://github.com/shigarakift",
  linkedin: "https://www.linkedin.com/in/bagas-alfattah-r-162975320/",
  location: "Cibinong, Indonesia",
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
    tags: ["Ubuntu Server", "Debian", "Bash", "Systemd", "Nginx"]
  },
  {
    name: "Backend Development",
    category: "Software Engineering",
    icon: Server,
    tags: ["Node.js", "Go", "Laravel", "PostgreSQL", "REST API"]
  },
  {
    name: "Docker & Containerization",
    category: "DevOps & Deployment",
    icon: Cpu,
    tags: ["Docker", "Docker Compose", "Container Security", "CI/CD"]
  }
];

export const education = [
  {
    id: 1,
    school: "SMKN 1 Cibinong",
    major: "Sistem Informatika, Jaringan, dan Aplikasi (SIJA)",
    duration: "2023 to Present",
    status: "Active Student",
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
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/shigarakift",
    demo: "#",
    badge: "Web Application",
    highlights: ["Role-based admin dashboard", "Order tracking pipeline", "Relational database schema"]
  }
];
