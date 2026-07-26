import { useEffect, useRef } from 'react';
import { Terminal, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { handleDownloadCV } from '../utils/helpers';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Hero() {
  const { theme } = useTheme();

  // GSAP animation refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(heroTitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(heroSubtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(heroTextRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo(heroButtonsRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3')
      .fromTo(heroCardRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6');
  }, []);

  return (
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
  );
}
