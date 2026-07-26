import React, { useState, useEffect, useRef } from 'react';
import {
  Sun, Moon, Menu, X, Mail, Cpu, Globe,
  Terminal, Server, Code, Send, CheckCircle, ExternalLink, Briefcase, GraduationCap
} from 'lucide-react';
import { gsap } from 'gsap';

// Custom social SVG icons
const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'systems' | 'fullstack';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

interface TimelineItem {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'systems' | 'fullstack'>('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  // GSAP animation refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Alert handler for CV
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("resume downloaded, please open!");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // GSAP Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(heroTitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(heroSubtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(heroTextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(heroButtonsRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3')
      .fromTo(heroCardRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6');
  }, []);

  const skillGroups: SkillGroup[] = [
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

  const projects: Project[] = [
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

  const timeline: TimelineItem[] = [
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

  const filteredProjects = activeProjectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeProjectFilter);

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'All fields are required!' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! Thank you for getting in touch.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errData = await response.json().catch(() => ({}));
        setFormStatus({ type: 'error', message: errData.detail || 'An error occurred while submitting. Please try again.' });
      }
    } catch (err) {
      setFormStatus({ type: 'error', message: 'Failed to connect to backend server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0D0704] text-[#FCFCFC]' : 'bg-[#FCFCFC] text-[#0D0704]'
    }`}>

      {/* HEADER / NAVIGATION */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0D0704]/95 border-slate-800' : 'bg-[#FCFCFC]/95 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                AlexMorgan.dev
              </span>
            </a>

            <nav className="hidden md:flex space-x-8 font-semibold text-sm">
              <a href="#about" className="hover:text-[#06C853] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#06C853] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#06C853] transition-colors">Projects</a>
              <a href="#experience" className="hover:text-[#06C853] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#06C853] transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'border-slate-800 text-[#06C853] hover:bg-[#0D0704]/50'
                    : 'border-slate-200 text-[#E74A10] hover:bg-slate-100'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={handleDownloadCV}
                className="border border-[#06C853] text-[#06C853] hover:bg-[#06C853] hover:text-[#0D0704] font-bold px-4 py-2 rounded-lg transition-all text-sm shadow-md"
              >
                Download CV
              </button>

              <a
                href="#contact"
                className="bg-gradient-to-r from-[#06C853] to-[#E74A10] text-[#0D0704] hover:opacity-90 font-bold px-4 py-2 rounded-lg transition-all text-sm shadow-md"
              >
                Hire Me
              </a>
            </div>

            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${
                  theme === 'dark' ? 'border-slate-800 text-[#06C853]' : 'border-slate-200 text-[#E74A10]'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${
                  theme === 'dark' ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-b transition-colors ${
            theme === 'dark' ? 'bg-[#0D0704] border-slate-800' : 'bg-[#FCFCFC] border-slate-200'
          }`}>
            <nav className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button
                onClick={(e) => { setMobileMenuOpen(false); handleDownloadCV(e); }}
                className="text-left block w-full py-2 px-3 rounded-md text-[#06C853] font-bold hover:bg-slate-800 transition-colors"
              >
                Download CV
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[#06C853]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-[#E74A10]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#06C853]/30 bg-[#06C853]/10 text-[#06C853] text-sm font-semibold">
                <Terminal size={14} />
                <span>Systems & Full-Stack Developer</span>
              </div>

              <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                  Alex Morgan
                </span>
              </h1>

              <h2 ref={heroSubtitleRef} className="text-2xl sm:text-3xl font-bold text-slate-400 dark:text-slate-300">
                Systems & Full-Stack Engineer
              </h2>

              <p ref={heroTextRef} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I design ultra-high-speed core networking kernels in <span className="text-[#06C853] font-semibold">C/C++</span>, scalable async server microservices in <span className="text-[#06C853] font-semibold">Go</span>, robust API services in <span className="text-[#06C853] font-semibold">Java</span>, and stunning frontends in <span className="text-[#E74A10] font-semibold">React 19</span> and <span className="text-[#E74A10] font-semibold">TypeScript</span>.
              </p>

              <div ref={heroButtonsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center bg-gradient-to-r from-[#06C853] to-[#E74A10] text-[#0D0704] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-[#06C853]/20"
                >
                  Explore My Work
                </a>
                <button
                  onClick={handleDownloadCV}
                  className={`w-full sm:w-auto text-center font-bold px-8 py-3.5 rounded-xl border transition-all ${
                    theme === 'dark'
                      ? 'border-slate-800 text-[#06C853] hover:bg-slate-900'
                      : 'border-slate-200 text-[#E74A10] hover:bg-slate-100'
                  }`}
                >
                  Download Resume
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#06C853] transition-colors">
                  <GithubIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#06C853] transition-colors">
                  <LinkedinIcon />
                </a>
                <a href="mailto:alex@example.com" className="hover:text-[#06C853] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div ref={heroCardRef} className={`relative w-full max-w-[380px] p-6 rounded-2xl border transition-all ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-slate-800 shadow-2xl shadow-indigo-900/10'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <div className="flex items-center justify-between border-b pb-4 mb-4 border-slate-800">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">systems_expert.cpp</span>
                </div>

                <div className="space-y-4 font-mono text-sm leading-relaxed">
                  <div>
                    <span className="text-[#E74A10] font-semibold">struct</span>{' '}
                    <span className="text-[#06C853]">Developer</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">std::string</span>{' '}
                    <span className="text-slate-300">name = "Alex";</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">std::vector&lt;std::string&gt;</span>{' '}
                    <span className="text-slate-300">stack = {"{"}"C++", "Go", "Java", "TS"{"}"};</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">bool</span>{' '}
                    <span className="text-slate-300">loves_concurrency = true;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">int</span>{' '}
                    <span className="text-slate-300">performance_focused = 100;</span>
                  </div>
                  <div>{'};'}</div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/50 flex justify-between text-xs text-slate-500">
                  <span>Lines: 10</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className={`py-20 transition-colors ${
        theme === 'dark' ? 'bg-[#0D0704]/30' : 'bg-slate-100/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              My{' '}
              <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              A comprehensive toolkit of technologies and practices honed over years of professional systems development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-slate-900/60 border-slate-800/80 shadow-lg'
                    : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  {gIdx === 0 && <Code className="text-[#06C853]" size={24} />}
                  {gIdx === 1 && <Server className="text-[#E74A10]" size={24} />}
                  {gIdx === 2 && <Cpu className="text-emerald-500" size={24} />}
                  <h3 className="text-lg font-bold">{group.category}</h3>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-400 dark:text-slate-300">{skill.name}</span>
                        <span className="text-[#06C853] font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#06C853] to-[#E74A10] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Explore professional systems and full-stack software engineering projects using modern programming stacks.
            </p>
          </div>

          <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-y-2">
            {(['all', 'systems', 'fullstack'] as const).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all capitalize ${
                  activeProjectFilter === filter
                    ? 'bg-gradient-to-r from-[#06C853] to-[#E74A10] text-[#0D0704] shadow-md'
                    : theme === 'dark'
                      ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {filter === 'all' ? 'All Work' : `${filter}`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col justify-between p-6 rounded-2xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:shadow-xl hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#06C853]/10 text-[#06C853] border border-[#06C853]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t pt-4 border-slate-800/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-bold text-slate-400 hover:text-[#06C853] transition-colors"
                  >
                    <GithubIcon />
                    <span className="ml-1.5">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-bold text-slate-400 hover:text-[#06C853] transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className={`py-20 transition-colors ${
        theme === 'dark' ? 'bg-[#0D0704]/30' : 'bg-slate-100/60'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Work &{' '}
              <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                Career Timeline
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              A chronological journey highlighting achievements and solid educational foundations.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 pl-6 space-y-12">
            {timeline.map((item) => (
              <div key={item.id} className="relative">
                <div className={`absolute -left-[35px] top-1 p-1.5 rounded-full border-2 ${
                  theme === 'dark'
                    ? 'bg-[#0D0704] border-[#06C853] text-[#06C853]'
                    : 'bg-white border-[#E74A10] text-[#E74A10]'
                }`}>
                  {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#06C853] uppercase tracking-widest">{item.year}</span>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <h4 className="text-md font-semibold text-slate-400 dark:text-slate-300">{item.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Let's{' '}
                <span className="bg-gradient-to-r from-[#06C853] to-[#E74A10] bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you have a specific systems development contract, high-concurrency architecture requests, or just want to discuss an
                exciting project concept—don't hesitate to reach out! I am highly responsive and ready to connect.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail size={18} className="text-[#06C853]" />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Globe size={18} className="text-[#06C853]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-[#0D0704] border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
                <h4 className="font-bold text-sm mb-1">FastAPI Backend Message Dispatch</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Form submissions dynamically transmit data directly through our FastAPI backend API, showcasing proper database integration capabilities.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmitContact}
                className={`p-8 rounded-2xl border space-y-6 ${
                  theme === 'dark' ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
                }`}
              >
                {formStatus.type && (
                  <div className={`p-4 rounded-xl text-sm flex items-start space-x-2 ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    <CheckCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                          : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                          : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Hi Alex! We would love to collaborate with you on..."
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900/60 border-slate-800 text-slate-100 focus:border-[#06C853]'
                        : 'bg-slate-50 border-slate-200 text-[#0D0704] focus:border-[#E74A10]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#06C853] to-[#E74A10] hover:opacity-90 text-[#0D0704] font-bold py-3.5 rounded-xl transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 text-center border-t transition-colors ${
        theme === 'dark' ? 'bg-[#0D0704] border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AlexMorgan.dev. All rights reserved. Handcrafted in California.
        </p>
      </footer>

    </div>
  );
}
