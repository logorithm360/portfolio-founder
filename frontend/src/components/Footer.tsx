import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 text-center border-t transition-colors ${
      theme === 'dark' ? 'bg-[#0D0704] border-slate-900 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} AlexMorgan.dev. All rights reserved. Handcrafted in California.
      </p>
    </footer>
  );
}
