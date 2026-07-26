import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0D0704] text-[#FCFCFC]' : 'bg-[#FCFCFC] text-[#0D0704]'
    }`}>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <ContactForm />
      <Footer />
    </div>
  );
}
