import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main className="portfolio-container">
        <Hero />
        <Skills />
        <SelectedWork />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}