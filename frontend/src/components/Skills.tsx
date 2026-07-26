import { Code, Server, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skillGroups } from '../data/portfolioData';

export default function Skills() {
  const { theme } = useTheme();

  return (
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
  );
}
