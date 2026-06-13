// src/components/SelectedWork.jsx
import { motion } from "motion/react";

export default function SelectedWork() {
  const projects = [
    {
      id: "01",
      tag: "VECTORS / ML",
      title: "NEURAL ARCH",
      description: "A custom convolutional scheduler logic system designed for systems optimization, task sequencing, and automated operational execution matrices.",
      tech: ["TensorFlow", "Python", "Scheduling"],
      image: "/neural_arch.png",
      logo:"/neural_arch_logo.png",
      link: null
    },
    {
      id: "02",
      tag: "LOW-LEVEL API / WEB",
      title: "OHHH CONTEST",
      description: "A web-based competition platform connecting videographers with brand sponsorships. Handles high-resolution video submissions, automated scoring, and optimized low-latency media uploads.",
      tech: ["Django", "React", "Performance"],
      image: "/ohhhcontest.png", 
      logo: "/logo.png",
      link: "https://www.ohhhcontest.com/"
    },
    {
      id: "03",
      tag: "DMR CORE  RUST",
      title: "RUSTY CHESS ENGINE",
      description: "A fully functional chess engine built from scratch in Rust. Implements move generation, board evaluation, and a search algorithm — a deep dive into low-level systems programming and game theory.",
      tech: ["Rust", "Systems", "Algorithms"],
      image: "/chess.png",
      logo: null,
      link: null
    },
    {
      id: "04",
      tag: "FULL-STACK / INFRA",
      title: "RISING HOPE",
      description: "Full-stack medical facility platform managing medicine dispensing, patient records, and employee workflows. Built with Django and role-based access control across a decentralised server architecture.",
      tech: ["Django", "Python", "RBAC"],
      image: null,
      logo: null,
      link: null
    },
    
  ];

  return (
    <section id="work" className="pt-20 border-t border-border">
      {/* Grid Meta Header Group */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold block">
            03 -- WORK & PRODUCTION SHELLS
          </span>
          <h2 className="text-3xl font-bold font-sans uppercase tracking-tight mt-2">
            Production Shells
          </h2>
        </div>
        <div className="font-mono text-[10px] text-accent tracking-widest uppercase">
          EXEC // ACTIVE_MATRIX
        </div>
      </div>

      {/* Production Project Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-background p-8 flex flex-col justify-between group min-h-[480px] transition-colors duration-300 hover:bg-card/40 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Upper Component Block */}
            <div>
              {/* Asset Box Container */}
              <div className="w-full aspect-[16/10] bg-muted overflow-hidden border border-border mb-6 relative">
                {/* Blueprint Grid Layer overlaying background image */}
                <div className="absolute inset-0 hero-grid-mesh opacity-20 pointer-events-none z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Interface Layer`} 
                    className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                    [ System Asset Layer // {project.id} ]
                  </div>
                )}
              </div>

              {/* Functional System Label Anchor */}
              <div className="mb-4">
                <span className="font-mono text-[9px] tracking-wider text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 uppercase font-medium">
                  {project.tag}
                </span>
              </div>

              {/* Title Header with integrated Logo Graphic space */}
              <div className="flex items-center gap-3 mb-3 min-h-[32px]">
                <h3 className="text-xl font-bold font-sans uppercase tracking-tight text-foreground">
                  {project.title}
                </h3>
                {project.logo && (
                  <img 
                    src={project.logo} 
                    alt="Logo Core" 
                    className="h-5 object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                )}
              </div>

              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom Status Block with dynamic navigation link handling */}
            <div className="mt-8 pt-4 border-t border-border/40 flex justify-between items-center font-mono text-[10px] z-20">
              <div className="flex gap-2 text-muted-foreground/60">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="uppercase">
                    {t} {idx < project.tech.length - 1 && "/"}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent group-hover:text-foreground flex items-center gap-1 transition-all hover:underline"
                  title={`Launch deployment for ${project.title}`}
                >
                  <span>VISIT</span>
                  <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all">
                  →
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}