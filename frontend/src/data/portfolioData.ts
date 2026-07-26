import type { Project, SkillGroup, TimelineItem } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Systems & Backend Languages',
    skills: [
      { name: 'C / C++', level: 90 },
      { name: 'Go (Golang)', level: 85 },
      { name: 'Java (Spring/JVM)', level: 80 },
      { name: 'Python (FastAPI/Asynchronous)', level: 95 },
    ]
  },
  {
    category: 'Frontend & TypeScript Stack',
    skills: [
      { name: 'React 19 / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 95 },
    ]
  },
  {
    category: 'DevOps & Systems Tools',
    skills: [
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'PostgreSQL & Redis', level: 90 },
      { name: 'Git / GitHub Actions', level: 90 },
      { name: 'Linux Kernel & Bash Shell', level: 85 },
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'High-Concurrency Redis Clone in Go',
    description: 'A distributed memory database engine implementing the Redis Serialization Protocol (RESP), featuring concurrent map optimizations and custom thread-safe networking mechanisms in Go.',
    category: 'systems',
    tags: ['Go', 'Systems Programming', 'RESP Protocol', 'Concurrency'],
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Asynchronous Event-Driven Microservice Core',
    description: 'A robust template microservices infrastructure designed in Python and FastAPI, using PostgreSQL and Redis Pub/Sub for immediate message broadcasting across decoupled services.',
    category: 'fullstack',
    tags: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Multithreaded Network Packet Parser in C++',
    description: 'A lower-level packet filtering engine parsing raw Ethernet frames, IPv4/IPv6 headers, and TCP payload stream re-assembly utilizing modern standard C++20 structures.',
    category: 'systems',
    tags: ['C++', 'C', 'Networking', 'Systems Programming'],
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Distributed Enterprise Resource API in Java',
    description: 'A highly scalable enterprise ledger API designed in Java utilizing Spring Boot and PostgreSQL, offering atomic transaction operations.',
    category: 'systems',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Full-Stack Developer Space Platform',
    description: 'The elegant developer portfolio you are viewing right now. Uses React 19, TypeScript, and Tailwind configured with custom palettes, fully animated with GSAP.',
    category: 'fullstack',
    tags: ['TypeScript', 'React 19', 'Tailwind', 'GSAP', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - Present',
    role: 'Senior Systems & Full-Stack Developer',
    company: 'TechFlow Solutions',
    description: 'Architecting dynamic frontends and high-performance, asynchronous FastAPI backend microservices. Led the refactoring of raw packet-parsing microservices into optimized C++ modules, slashing cloud bills by 35%.',
    type: 'work'
  },
  {
    id: 2,
    year: '2021 - 2023',
    role: 'Systems Software Engineer',
    company: 'InnoWeb Apps',
    description: 'Developed modern low-level high-performance components in Go and Python. Built secure integrations with enterprise database systems.',
    type: 'work'
  },
  {
    id: 3,
    year: '2017 - 2021',
    role: 'B.S. Computer Science',
    company: 'Tech University',
    description: 'Graduated with high honors. Specialized in Systems Programming, Distributed Database Architectures, and Compiler Design.',
    type: 'education'
  }
];
