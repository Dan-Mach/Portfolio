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
          <img 
            src="/dmr.jpeg" 
            alt="DMR" 
            className="w-6 h-6 object-cover grayscale border border-border" 
          />
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

        {/* Right Action Identifier (Desktop) / Hamburger Trigger (Mobile) */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden lg:block">
            <span className="font-mono text-[12px] tracking-widest text-muted-foreground border border-border px-3 py-1.5 uppercase bg-card/40">
              dimar
            </span>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 md:hidden border border-border bg-card/20 rounded-none gap-1.5 cursor-pointer focus:outline-none"
            aria-label="Toggle structural menu pipeline"
          >
            <span 
              className={`h-[1px] w-4 bg-foreground transition-all duration-300 transform ${
                isOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span 
              className={`h-[1px] w-4 bg-foreground transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span 
              className={`h-[1px] w-4 bg-foreground transition-all duration-300 transform ${
                isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Right-Aligned Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0a]/95 z-40 flex flex-col justify-center items-end md:hidden px-12 sm:px-24"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Overlay Geometric Mesh Background Alignment */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {/* Right-aligned text content layout */}
            <div className="flex flex-col items-end gap-8 font-mono text-xl tracking-widest relative z-10 text-right">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}