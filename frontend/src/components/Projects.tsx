import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolioData';
import GithubIcon from './icons/GithubIcon';

export default function Projects() {
  const { theme } = useTheme();
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'systems' | 'fullstack'>('all');

  const filteredProjects = activeProjectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeProjectFilter);

  return (
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
          {(['all', 'systems', 'fullstack'] as const).map((filter) => (
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
                  <GithubIcon className="w-5 h-5" />
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
  );
}
