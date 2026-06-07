// src/components/Contact.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", projectType: "" });

  const links = [
    { label: "EMAIL", href: "mailto:danreech83@gmail.com", display: "danreech83@gmail.com" },
    { label: "GITHUB", href: "https://github.com/Dan-Mach", display: "github.com/Dan-Mach" },
    { label: "TELEPHONE", href: "tel:+254794732689", display: "+254 794 732 689" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct system email payload
    const subject = encodeURIComponent("PARTNERSHIP INITIALIZATION MATRIX");
    const body = encodeURIComponent(
      `Sender Protocol Address: ${formData.email}\n\nProject Scope / Partnership Scope:\n${formData.projectType}`
    );
    
    // Trigger terminal fallback communication pipeline
    window.location.href = `mailto:danreech83@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-20 border-t border-border">
      {/* High-Contrast Inverted Action Strip */}
      <div className="bg-foreground text-background p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden transition-all duration-500">
        
        {/* Subtle Background Structural Accent Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none hero-grid-mesh bg-background"></div>
        
        <div className="relative z-10 flex-1">
          <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tight mb-4 leading-none">
            Let's Build<br />The Future.
          </h2>
          <p className="font-mono text-[10px] tracking-wider uppercase text-background/70 max-w-sm">
            Available for architectural consultation, internal infrastructure optimization, and high-impact full-stack system development.
          </p>
        </div>
        
        <div className="relative z-10 w-full md:w-auto flex flex-col items-end">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button 
                key="protocol-btn"
                onClick={() => setIsOpen(true)}
                className="w-full md:w-auto font-mono text-xs tracking-widest uppercase bg-background text-foreground px-8 py-4 border border-background hover:bg-transparent hover:text-background transition-all duration-300 font-bold text-center block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Initiate Protocol
              </motion.button>
            ) : (
              <motion.form 
                key="protocol-form"
                onSubmit={handleSubmit}
                className="w-full md:w-[400px] bg-background text-foreground p-6 border border-border flex flex-col gap-4 font-mono text-[11px]"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-1">
                  <span className="text-[10px] tracking-widest text-accent uppercase font-bold">
                    // PARTNERSHIP MATRIX INITIALIZED
                  </span>
                  <button 
                    type="button" 
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground text-xs"
                  >
                    [ESC]
                  </button>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    Secure Return Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    required
                    placeholder="operator@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border border-border/60 p-2.5 focus:border-accent outline-none text-xs transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="work" className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    Target Scope & Partnership Terms
                  </label>
                  <textarea 
                    id="work"
                    required
                    rows="3"
                    placeholder="Describe the stack layer, product framework, or systemic infrastructure nodes to execute..."
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="bg-transparent border border-border/60 p-2.5 focus:border-accent outline-none text-xs transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-foreground text-background font-bold tracking-widest uppercase py-3 mt-2 border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-200 text-center text-xs"
                >
                  EXECUTE DATA PIPELINE →
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
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
        <div className="font-mono text-[14px] text-muted-foreground/40 tracking-wider uppercase text-left sm:text-right w-full sm:w-auto">
          <span>© 2026 dimar. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}