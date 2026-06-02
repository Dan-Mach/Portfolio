import "./components/index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundWatermarks from './components/BackgroundWatermarks';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Decorative letter watermarks layer */}
      <BackgroundWatermarks />
      
      {/* Global components */}
      <Navbar />
      <main className="relative z-10 max-w-[1100px] w-full mx-auto px-8 pt-32 pb-16 flex flex-col gap-32">
        <Hero />
        <SelectedWork />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}