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
      link: null,
      github: "https://github.com/Dan-Mach/project" // Added GitHub Repo
    },
    {
      id: "02",
      tag: "LOW-LEVEL API / WEB",
      title: "OHHH CONTEST",
      description: "A web-based competition platform connecting videographers with brand sponsorships. Handles high-resolution video submissions, automated scoring, and optimized low-latency media uploads.",
      tech: ["Django", "React", "Performance"],
      image: "/ohhhcontest.png", 
      logo: "/logo.png",
      link: "https://www.ohhhcontest.com/",
      github: null // No GitHub link or icon for Ocontest as requested
    },
    {
      id: "03",
      tag: "DMR CORE  RUST",
      title: "RUSTY CHESS ENGINE",
      description: "A fully functional chess engine built from scratch in Rust. Implements move generation, board evaluation, and a search algorithm — a deep dive into low-level systems programming and game theory.",
      tech: ["Rust", "Systems", "Algorithms"],
      image: "/chess.png",
      logo: null,
      link: null,
      github: "https://github.com/Dan-Mach/rusty-chess" // Added GitHub Repo
    },
    {
      id: "04",
      tag: "FULL-STACK / INFRA",
      title: "RISING HOPE",
      description: "Full-stack medical facility platform managing medicine dispensing, patient records, and employee workflows. Built with Django and role-based access control across a decentralised server architecture.",
      tech: ["Django", "Python", "RBAC"],
      image: null,
      logo: null,
      link: null,
      github: "https://github.com/Dan-Mach/rising-hope" // Added GitHub Repo
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

              {/* Action Cluster Area at Bottom Right */}
              <div className="flex items-center gap-4">
                {/* Conditional GitHub Link & Icon Integration */}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={`View ${project.title} Source Code`}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.0 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}

                {/* Visit Platform / Placeholder Matrix Control */}
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent group-hover:text-foreground flex items-center gap-1 transition-all hover:underline font-bold tracking-widest"
                    title={`Launch deployment for ${project.title}`}
                  >
                    <span>VISIT</span>
                    <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-[8px]">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all text-xs select-none">
                    →
                  </span>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}