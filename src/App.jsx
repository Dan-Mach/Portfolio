// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="dark min-h-screen w-full bg-background text-foreground font-sans relative antialiased flex flex-col">
      {/* BackgroundWatermarks removed from here */}
      <Navbar />
      
      <main className="w-full flex flex-col z-10">
        <Hero />
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 flex flex-col gap-24 md:gap-36 pb-24">
          <SelectedWork />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}