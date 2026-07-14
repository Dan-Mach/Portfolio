import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentStage, setCurrentStage] = useState(1);
  const remainingLetters = ["i", "m", "a", "r"];

  // Automated Infinite Loop Orchestration Sequence
  useEffect(() => {
    if (currentStage === 1) {
      const stage1Timeout = setTimeout(() => {
        setCurrentStage(2);
      }, 2500); // Standalone circle holds for 2.5 seconds
      return () => clearTimeout(stage1Timeout);
    } else if (currentStage === 2) {
      const stage2Timeout = setTimeout(() => {
        setCurrentStage(3);
      }, 2800); // Sequence typing duration hold
      return () => clearTimeout(stage2Timeout);
    } else if (currentStage === 3) {
      const stage3Timeout = setTimeout(() => {
        setCurrentStage(1); // AUTOMATIC RESET: Cycles infinitely back to Stage 1
      }, 5000); // Displays the final style block for 5 seconds before repeating
      return () => clearTimeout(stage3Timeout);
    }
  }, [currentStage]);

  const handleReplay = () => {
    setCurrentStage(1);
  };

  // Stagger configurations for Stage 2 typing speed
  const stage2Container = {
    visible: { transition: { staggerChildren: 0.2 } }
  };
  const stage2Letter = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "auto" }
  };

  return (
    <section 
      id="about" 
      className="relative min-h-[90vh] flex items-center hero-grid-mesh border-b border-border px-4 md:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Structural Framing Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-12">
        <div className="w-[1px] h-full bg-border/20 border-dashed"></div>
        <div className="w-[1px] h-full bg-border/20 border-dashed"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Informational Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div 
            className="mb-6 flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[15px] tracking-widest text-accent uppercase font-bold">
              SYSTEMS ARCHITECT & DEVELOPER
            </span>
          </motion.div>
          
          <motion.h1 
            className="font-mono text-[10vw] sm:text-[6vw] lg:text-[4rem] font-bold leading-[1.05] tracking-tight uppercase text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Engineering<br />
            <span className="stroke-header font-extrabold">Robust</span> Digital<br />
            Structures.
          </motion.h1>

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

        {/* Right Frame: Multi-Stage Visual Matrix Display Box */}
        <motion.div 
          className="lg:col-span-5 w-full aspect-[4/5] lg:h-[72vh] bg-neutral-950 border border-border relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 select-none"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Internal Blueprint Corner Guidelines */}
          <div className="absolute inset-4 border border-border/30 pointer-events-none">
            <div className="absolute top-0 left-4 w-8 h-[1px] bg-muted-foreground/30"></div>
            <div className="absolute top-4 left-0 w-[1px] h-8 bg-muted-foreground/30"></div>
            <div className="absolute bottom-0 right-4 w-8 h-[1px] bg-muted-foreground/30"></div>
            <div className="absolute bottom-4 right-0 w-[1px] h-8 bg-muted-foreground/30"></div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* STAGE 1: Isolated Centered Circle 'd' Logo Frame */}
              {currentStage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1 }} 
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[5px] border-foreground flex items-center justify-center bg-[#0a0a0a] shadow-2xl">
                    <span className="font-mono font-bold text-5xl sm:text-6xl leading-none">
                      d
                    </span>
                  </div>
                </motion.div>
              )}

              {/* STAGE 2: "i", "m", "a", "r" Build Line next to the Anchor Circle */}
              {currentStage === 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center border-y border-dashed border-border/40 py-6"
                >
                  <motion.div 
                    className="flex items-center justify-center font-mono font-bold text-foreground lowercase"
                    variants={stage2Container}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Circle Anchor */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border-[4px] border-foreground flex items-center justify-center bg-[#0a0a0a] shrink-0 mr-2 sm:mr-3">
                      <span className="font-mono font-bold text-5xl sm:text-6xl leading-none">
                        d
                      </span>
                    </div>
                    
                    {/* Character String Addition */}
                    <div className="flex text-5xl sm:text-6xl md:text-7xl tracking-tighter leading-none">
                      {remainingLetters.map((letter, idx) => (
                        <motion.span 
                          key={idx} 
                          variants={stage2Letter}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 3: Pure typographic stacking sequence from Screenshot From 2026-06-15 15-15-43.png */}
              {currentStage === 3 && (
                <motion.div
                  key="stage-3"
                  className="flex flex-col gap-8 sm:gap-10 w-full font-mono font-bold text-4xl sm:text-5xl md:text-6xl lowercase relative z-10 tracking-tighter"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.12 } }
                  }}
                >
                  {/* Top Layer - Offsets Left, Low-Amplitude Up-and-Down Motion */}
                  <motion.div
                    className="text-foreground/30 w-full flex justify-start pl-4 sm:pl-8"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 0.3, x: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  >
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      dimar
                    </motion.span>
                  </motion.div>

                  {/* Center Layer - Solid Containment Boundary Block */}
                  <motion.div 
                    className="border border-dashed border-border/60 py-6 bg-card/20 w-full flex justify-center text-foreground shadow-2xl relative z-20"
                    variants={{
                      hidden: { scale: 0.96, opacity: 0 },
                      visible: { scale: 1, opacity: 1 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span>dimar</span>
                  </motion.div>

                  {/* Bottom Layer - Offsets Right, Low-Amplitude Down-and-Up Motion */}
                  <motion.div
                    className="text-foreground/30 w-full flex justify-end pr-4 sm:pr-8"
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 0.3, x: 0 }
                    }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  >
                    <motion.span
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                    >
                      dimar
                    </motion.span>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Infrastructure Controls Row */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[8px] text-muted-foreground/40 uppercase tracking-widest relative z-30">
            <span>SYS_REF // TYPE_MORPH</span>
            <button 
              onClick={handleReplay}
              className="hover:text-foreground transition-colors duration-150 cursor-pointer font-bold border-b border-dashed border-muted-foreground/40 pb-0.5"
            >
              [ RESTART PIPELINE ]
            </button>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-4 left-4 md:left-12 font-mono text-[9px] text-muted-foreground/40 tracking-widest uppercase flex gap-6 pointer-events-none">
        <span>LOC // 0.0.0.0</span>
        <span>INDEX // 2026.SYS</span>
      </div>
    </section>
  );
}