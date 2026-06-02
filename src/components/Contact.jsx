// src/components/Contact.jsx
import { motion } from "motion/react";

export default function Contact() {
  const links = [
    { label: "EMAIL", href: "mailto:danreech83@gmail.com", display: "danreech83@gmail.com" },
    { label: "GITHUB", href: "https://github.com/Dan-Mach", display: "github.com/Dan-Mach" },
    { label: "TELEPHONE", href: "tel:+254794732689", display: "+254 794 732 689" }
  ];

  return (
    <section id="contact" className="pt-20 border-t border-border">
      {/* High-Contrast Inverted Action Strip */}
      <div className="bg-foreground text-background p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
        
        {/* Subtle Background Structural Accent Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none hero-grid-mesh bg-background"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tight mb-4 leading-none">
            Let's Build<br />The Future.
          </h2>
          <p className="font-mono text-[10px] tracking-wider uppercase text-background/70 max-w-sm">
            Available for architectural consultation, internal infrastructure optimization, and high-impact full-stack system development[cite: 1, 2].
          </p>
        </div>
        
        <motion.a 
          href="mailto:danreech83@gmail.com"
          className="relative z-10 font-mono text-xs tracking-widest uppercase bg-background text-foreground px-8 py-4 border border-background hover:bg-transparent hover:text-background transition-all duration-300 font-bold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Initiate Protocol
        </motion.a>
      </div>

      {/* Structured Communication Channels Matrix Footer */}
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full sm:w-auto">
          {links.map((link, i) => (
            <div key={i} className="flex flex-col font-mono">
              <span className="text-[9px] text-muted-foreground/60 tracking-widest uppercase mb-1">
                {link.label}
              </span>
              <a 
                href={link.href}
                target={link.label !== "EMAIL" && link.label !== "TELEPHONE" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                {link.display}
              </a>
            </div>
          ))}
        </div>

        {/* Legal Engineering Stamp */}
        <div className="font-mono text-[9px] text-muted-foreground/40 tracking-wider uppercase text-left sm:text-right w-full sm:w-auto">
          <span>© 2026 Daniel Mach Reech. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}