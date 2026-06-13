import { motion } from "motion/react";

export default function Experience() {
  // Merged skills dataset formatted for the technical profile block
  const skillMatrix = [
    { category: "LANGUAGES", items: "Python, Rust, JavaScript, C" },
    { category: "FRAMEWORKS", items: "Django, React, TensorFlow, PyTorch" },
    { category: "CONCEPTS", items: "System Design, Data Structures, Algorithms, Distributed Systems" }
  ];

  const quadrants = [
    {
      id: "01",
      role: "Core Systems Lead",
      meta: "ARISING HOPE MC // NOV 2025 — NOW",
      desc: "Designed and built full-stack infrastructure covering medicine dispensing, patient management, and role-based access control servers."
    },
    {
      id: "02",
      role: "Senior Backend Eng.",
      meta: "OCONTEST // JUL 2025 — SEP 2025",
      desc: "Led system design and implementation of a video competition platform. Optimised low-level pipelines for high-resolution media handling."
    },
    {
      id: "03",
      role: "DevOps Architect",
      meta: "LOCAL ENVIRONMENT // ACTIVE",
      desc: "Configured custom system setups using Fedora 44. Documented and debugged kernel buffer streams and system boot allocations."
    },
    {
      id: "04",
      role: "Security Analyst",
      meta: "RESEARCH & DEV // STANDALONE",
      desc: "Audited system management layers, transitioning legacy file storage schemas into secure local database engines."
    }
  ];

  return (
    <section id="experience" className="pt-24 pb-16 border-t border-border px-4 md:px-12">
      {/* Structural Containment Grid - Aligned perfectly with Hero & Projects wrapper */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Industrial Headers & Skills Manifest */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-12">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold">
              02 -- TECHNICAL MATRIX
            </span>
            <h2 className="text-3xl font-bold font-sans uppercase tracking-tight mt-2 mb-4 leading-none text-foreground">
              The<br />Architecture<br />Of Code.
            </h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Specialising in systems that start low and scale high. Development strategies treat software as an exact mechanical blueprint—predictable, performant, and robust under load.
            </p>
          </div>

          {/* Embedded Specification Profile Sheet */}
          <div className="border-t border-border/60 pt-6 space-y-4 font-mono text-xs">
            {skillMatrix.map((matrix, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-border/30 pb-3 items-start">
                <span className="text-muted-foreground text-[10px] uppercase font-medium">
                  {matrix.category}
                </span>
                <span className="col-span-2 text-foreground tracking-tight text-[11px] leading-tight">
                  {matrix.items}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Geometric Grid Quadrants */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 border-t border-l border-border bg-neutral-950/20">
          {quadrants.map((quad, index) => (
            <motion.div
              key={quad.id}
              className="p-8 border-r border-b border-border min-h-[240px] flex flex-col justify-between relative group hover:bg-card/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Technical Geometric Counter Label */}
              <span className="absolute top-4 left-4 font-mono text-xs text-muted-foreground/20 group-hover:text-accent/40 transition-colors duration-200">
                {quad.id}
              </span>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold uppercase tracking-tight font-sans text-foreground">
                  {quad.role}
                </h3>
                <span className="font-mono text-[9px] text-accent tracking-wider block mt-1 mb-4 font-medium">
                  {quad.meta}
                </span>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {quad.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}