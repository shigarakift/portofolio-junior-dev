import { Terminal, Server, Cpu } from "lucide-react";

export const personalData = {
  name: "Bagas Alfattah R.",
  username: "shigarakift",
  role: "Backend & Systems Engineer",
  email: "bagas@example.com", // Replace with actual email if known
  github: "https://github.com/shigarakift",
  linkedin: "https://linkedin.com/in/shigarakift", // Replace with actual linkedin if known
  about: "I am a passionate software engineer with a strong focus on server infrastructure and backend development. I enjoy configuring Linux environments, building scalable APIs, and managing server deployment pipelines.",
};

export const skills = [
  { name: "Linux Administration", icon: Terminal },
  { name: "Backend Development", icon: Server },
  { name: "Docker & Containerization", icon: Cpu },
];

export const education = [
  {
    id: 1,
    school: "SMKN 1 Cibinong",
    major: "Sistem Informatika, Jaringan, dan Aplikasi (SIJA)",
    duration: "2023 - Present",
    description: "Currently pursuing a major in Information Systems, Networks, and Applications (SIJA). Focused on Linux administration, backend development, and networking. Actively seeking part-time or internship opportunities.",
  }
];

export const projects = [
  {
    id: 1,
    title: "SysMon CLI",
    description: "A lightweight terminal-based CLI tool to monitor system metrics (CPU, RAM, Disk) in real-time.",
    tech: ["Go", "Bash", "Linux"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Secure REST API",
    description: "A robust backend API boilerplate featuring OAuth2 authentication, rate limiting, and PostgreSQL integration.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];


