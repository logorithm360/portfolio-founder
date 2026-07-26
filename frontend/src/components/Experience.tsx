import { Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { timeline } from '../data/portfolioData';

export default function Experience() {
  const { theme } = useTheme();

  return (
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
  );
}
