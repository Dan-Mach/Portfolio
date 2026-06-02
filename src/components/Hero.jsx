// src/components/Hero.jsx
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section 
      id="about" 
      className="relative min-h-[90vh] flex items-center hero-grid-mesh border-b border-border px-4 md:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient Framing Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-12">
        <div className="w-[1px] h-full bg-border/20 border-dashed"></div>
        <div className="w-[1px] h-full bg-border/20 border-dashed"></div>
      </div>

      {/* Main Split Interface Matrix */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and Triggers */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Dynamic Status Tracking Subheader */}
          <motion.div 
            className="mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold">
              SYSTEMS ARCHITECT & DEV // CORE
            </span>
          </motion.div>
          
          {/* Massive Typography Stack */}
          <motion.h1 
            className="font-sans text-[10vw] sm:text-[6vw] lg:text-[4.8rem] font-bold leading-[0.95] tracking-tighter uppercase text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Engineering<br />
            <span className="stroke-header font-extrabold">Robust</span> Digital<br />
            Structures.
          </motion.h1>

          {/* Controls */}
          <motion.div 
            className="flex flex-wrap gap-4 w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#work" 
              className="font-mono text-xs font-medium tracking-wider uppercase bg-foreground text-background px-6 py-3.5 border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-200"
            >
              View Systems
            </a>

            <a 
              href="#contact" 
              className="font-mono text-xs font-medium tracking-wider uppercase border border-border bg-card/30 text-foreground px-6 py-3.5 hover:bg-card hover:border-muted-foreground transition-all duration-200"
            >
              Terminal Process
            </a>
          </motion.div>
        </div>

        {/* Right Side: High-Impact Hero Artwork Container displaying ohhhcontest */}
        <motion.div 
          className="lg:col-span-5 w-full aspect-[4/5] lg:h-[65vh] bg-neutral-950 border border-border relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Blueprint Grid Layer overlaying the image */}
          <div className="absolute inset-0 hero-grid-mesh opacity-20 pointer-events-none z-10 mix-blend-screen"></div>
          
          {/* Live System Production Image Asset */}
          <div className="w-full h-full bg-background flex items-center justify-center relative">
            <img 
              src="/image_3a1e84.png" 
              alt="Ocontest Interface Shell" 
              className="w-full h-full object-cover filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" 
            />
            
            {/* Contextual UI Badge Layer */}
            <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-background bg-foreground px-2 py-1 tracking-widest uppercase font-bold border border-foreground">
              LIVE_SYSTEM // ENV
            </div>
            
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 tracking-wider uppercase border border-border">
              ohhhcontest.com
            </div>
          </div>
        </motion.div>

      </div>

      {/* Engineering Metadata Footer stamps */}
      <div className="absolute bottom-4 left-4 md:left-12 font-mono text-[9px] text-muted-foreground/40 tracking-widest uppercase flex gap-6 pointer-events-none">
        <span>LOC // 0.0.0.0</span>
        <span>INDEX // 2026.SYS</span>
      </div>
    </section>
  );
}