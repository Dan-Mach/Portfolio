// src/components/Navbar.jsx
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 h-18 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-border z-50 flex justify-between items-center px-4 md:px-12"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Brand Identity */}
      <motion.div
        className="flex items-center gap-3 font-mono text-xs tracking-wider uppercase text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* FIX: Used absolute public URL path string directly */}
        <img 
          src="/dmr.jpeg" 
          alt="DMR" 
          className="w-6 h-6 object-cover grayscale border border-border" 
        />
        <span className="font-bold">DMR.</span>
      </motion.div>

      {/* Centered Navigation Matrix */}
      <div className="flex items-center gap-8 font-mono text-xs">
        <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>

      {/* Action System Identifier */}
      <div className="hidden sm:block">
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-border px-3 py-1.5 uppercase bg-card/40">
          SYS // INLINE
        </span>
      </div>
    </motion.nav>
  );
}