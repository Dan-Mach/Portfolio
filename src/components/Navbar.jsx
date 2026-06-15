// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 h-18 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-border z-50 flex justify-between items-center px-4 md:px-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Brand Identity */}
        <motion.div
          className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-foreground relative z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-bold">DMR</span>
        </motion.div>

        {/* Centered Desktop Navigation Matrix */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Social Links (Desktop) & Hamburger Trigger (Mobile) */}
        <div className="flex items-center gap-4 relative z-50">
          
          {/* Integrated GitHub & LinkedIn External Vectors */}
          <div className="hidden md:flex items-center gap-4 border-r border-border/40 pr-4 mr-1">
            <a 
              href="https://github.com/Dan-Mach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Access GitHub Pipeline Portfolio"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" // Update with your actual LinkedIn link if needed
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Access LinkedIn Professional Matrix"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="hidden lg:block">
            <span className="font-mono text-[12px] tracking-widest text-muted-foreground border border-border px-3 py-1.5 uppercase bg-card/40">
              dimar
            </span>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 md:hidden border border-border bg-card/20 rounded-none gap-1 cursor-pointer focus:outline-none"
            aria-label="Toggle structural menu pipeline"
          >
            <span 
              className={`h-[1px] w-4 bg-foreground transition-all duration-300 transform origin-center ${
                isOpen ? "rotate-45 translate-y-[2px]" : ""
              }`}
            />
            <span 
              className={`h-[1px] bg-foreground transition-all duration-300 ${
                isOpen ? "w-0 opacity-0" : "w-4 opacity-100"
              }`}
            />
            <span 
              className={`h-[1px] w-4 bg-foreground transition-all duration-300 transform origin-center ${
                isOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Right-Aligned Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0a]/95 z-40 flex flex-col justify-between items-end md:hidden px-12 sm:px-24 pt-32 pb-12"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Overlay Geometric Mesh Background Alignment */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Top/Center: Right-aligned links layout */}
            <div className="flex flex-col items-end gap-8 font-mono text-xl tracking-widest relative z-10 text-right w-full mt-auto mb-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors uppercase block font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Drawer Social Row Endpoints */}
              <motion.div 
                className="flex items-center gap-6 pt-4 border-t border-border/40 w-24 justify-end mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://github.com/Dan-Mach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Bottom Right: Powered By Label in Small Caps */}
            <motion.div
              className="relative z-10 font-mono text-[10px] tracking-widest text-muted-foreground/50 select-none lowercase [font-variant:small-caps]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              powered by dimar
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}