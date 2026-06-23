// src/components/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const projectMatrix = [
    {
      id: "01",
      title: "ohhh contest",
      tag: "LOW-LEVEL API / WEB",
      desc: "A video competition platform built to handle high-resolution media handling, automated scoring logic, and optimized low-latency streaming pipelines.",
      meta: "STACK // DJANGO + REACT"
    },
    {
      id: "02",
      title: "rising hope",
      tag: "FULL-STACK / INFRA",
      desc: "Decentralized medical facility system managing medicine dispensing, patient records, and secure role-based access control servers.",
      meta: "STACK // DJANGO + PYTHON"
    },
    {
      id: "03",
      title: "neural arch",
      tag: "VECTORS / ML",
      desc: "A custom convolutional scheduler logic system optimized for advanced systems sequencing and task-driven execution matrices.",
      meta: "STACK // TENSORFLOW"
    },
    {
      id: "04",
      title: "rusty chess",
      tag: "DMR CORE / RUST",
      desc: "A highly optimized game engine built from scratch in Rust, featuring native move generation and fast board evaluation mechanics.",
      meta: "STACK // RUST SYSTEMS"
    },
    {
      id: "05",
      title: "moducare",
      tag: "BACKEND / INFRA",
      desc: "An organizational management system for healthcare providers, integrating patient data handling and secure backend services.",
      meta: "STACK // NODE + REACT"
    },
    {
      id: "06",
      title: "blockchain",
      tag: "BLOCKCHAIN / ML",
      desc: "Blockchain-based system for secure data handling and distributed ledger management, integrating machine learning for predictive analytics.",
      meta: "STACK // RUST + SOLIDITY"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const handleProjectClick = (idx) => {
    setActiveIdx(idx);
    // Check if the current device window layout is mobile/tablet size
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  return (
    <section id="projects" className="pt-24 pb-16 border-t border-border px-4 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Synchronized Section Header Matrix */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold block">
              01 -- PROJECTS & REPOSITORIES
            </span>
            <h2 className="text-3xl font-bold font-sans uppercase tracking-tight mt-2 text-foreground">
              Projects
            </h2>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/40 tracking-widest uppercase">
            EXECUTED // ACTIVE_MATRIX
          </div>
        </div>

        {/* Main Split Interface Matrix */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Side Selector */}
          <div className="lg:col-span-6 flex flex-col font-mono border-t border-border/60 w-full">
            {projectMatrix.map((project, idx) => (
              <button
                key={project.id}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) setActiveIdx(idx);
                }}
                onClick={() => handleProjectClick(idx)}
                className={`flex items-center justify-between py-4 border-b border-border/40 text-left transition-all duration-300 group cursor-pointer ${
                  activeIdx === idx ? "text-foreground pl-2" : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] tracking-widest ${activeIdx === idx ? "text-accent font-bold" : "text-muted-foreground/30"}`}>
                    // {project.id}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight">
                    {project.title}
                  </span>
                </div>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
                  [LOAD_INFRA]
                </span>
              </button>
            ))}
          </div>

          {/* Right Side Terminal Panel (Hidden entirely on Mobile screen views) */}
          <div className="hidden lg:flex lg:col-span-6 w-full aspect-[16/10] min-h-[340px] bg-neutral-950 border border-border relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none">
            <div className="absolute inset-4 border border-border/30 pointer-events-none">
              <div className="absolute top-0 left-4 w-8 h-[1px] bg-muted-foreground/30"></div>
              <div className="absolute top-4 left-0 w-[1px] h-8 bg-muted-foreground/30"></div>
              <div className="absolute bottom-0 right-4 w-8 h-[1px] bg-muted-foreground/30"></div>
              <div className="absolute bottom-4 right-0 w-[1px] h-8 bg-muted-foreground/30"></div>
            </div>

            <div className="w-full h-full flex flex-col justify-between relative z-10 py-2">
              <div className="flex justify-between items-start border-b border-dashed border-border/40 pb-4">
                <span className="font-mono text-[9px] tracking-wider text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 uppercase font-medium">
                  {projectMatrix[activeIdx].tag}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/40">
                  SYS_ID // {projectMatrix[activeIdx].id}
                </span>
              </div>
              <div className="my-auto py-4 max-h-[170px] overflow-x-hidden overflow-y-scroll pr-4 custom-vertical-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col"
                  >
                    <h3 className="font-mono font-bold tracking-tighter text-2xl text-foreground uppercase border-b border-border/30 pb-2 mb-3 leading-none">
                      {projectMatrix[activeIdx].title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground stroke-none leading-relaxed tracking-normal max-w-xl normal-case">
                      {projectMatrix[activeIdx].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="border-t border-dashed border-border/40 pt-4 flex flex-col gap-1.5 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest">
                <div className="flex justify-between">
                  <span>RUNTIME_ENV</span>
                  <span className="text-foreground/80">{projectMatrix[activeIdx].meta}</span>
                </div>
                <div className="flex justify-between text-[8px] text-muted-foreground/30">
                  <span>PIPELINE_STATUS</span>
                  <span className="text-emerald-500/80">// COMPILED //</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cyberpunk Mobile Popup Modal Framework Overlay */}
      <AnimatePresence>
        {isMobileModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:hidden">
            {/* Blurry dim background backdrop layer */}
            <motion.div 
              className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileModalOpen(false)}
            />

            {/* Terminal Window Box Container */}
            <motion.div 
              className="bg-neutral-950 border border-border w-full max-w-md p-6 relative flex flex-col shadow-2xl select-none"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Corner tech lines layer layout */}
              <div className="absolute inset-3 border border-border/20 pointer-events-none">
                <div className="absolute top-0 left-2 w-4 h-[1px] bg-muted-foreground/30"></div>
                <div className="absolute top-2 left-0 w-[1px] h-4 bg-muted-foreground/30"></div>
                <div className="absolute bottom-0 right-2 w-4 h-[1px] bg-muted-foreground/30"></div>
                <div className="absolute bottom-2 right-0 w-[1px] h-4 bg-muted-foreground/30"></div>
              </div>

              {/* Upper Header Control Parameters */}
              <div className="relative z-10 flex justify-between items-center border-b border-dashed border-border/40 pb-4 mb-4">
                <span className="font-mono text-[9px] tracking-wider text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 uppercase font-medium">
                  {projectMatrix[activeIdx].tag}
                </span>
                <button 
                  onClick={() => setIsMobileModalOpen(false)}
                  className="font-mono text-[9px] text-muted-foreground/70 hover:text-foreground border border-border/50 px-2 py-0.5 bg-neutral-900 uppercase cursor-pointer transition-colors"
                >
                  [close]
                </button>
              </div>

              {/* Core Information Details */}
              <div className="relative z-10 mb-5">
                <div className="flex justify-between items-baseline border-b border-border/30 pb-2 mb-3">
                  <h3 className="font-mono font-bold tracking-tighter text-xl text-foreground uppercase leading-none">
                    {projectMatrix[activeIdx].title}
                  </h3>
                  <span className="font-mono text-[9px] text-muted-foreground/40">
                    ID // {projectMatrix[activeIdx].id}
                  </span>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed normal-case">
                  {projectMatrix[activeIdx].desc}
                </p>
              </div>

              {/* Lower Technical Environment Specs */}
              <div className="relative z-10 border-t border-dashed border-border/40 pt-4 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span>RUNTIME_ENV</span>
                  <span className="text-foreground/80">{projectMatrix[activeIdx].meta}</span>
                </div>
                <div className="flex justify-between text-[8px] text-muted-foreground/30">
                  <span>PIPELINE_STATUS</span>
                  <span className="text-emerald-500/80">// COMPILED //</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}