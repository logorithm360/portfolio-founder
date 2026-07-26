import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { handleDownloadCV } from '../utils/helpers';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}
