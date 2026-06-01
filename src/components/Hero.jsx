import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <motion.div
        className="status-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="pulse-dot"></span> Open to opportunities
      </motion.div>
      <motion.h1
        className="hero-headline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Systems, code, and the craft.
      </motion.h1>
      <motion.p
        className="hero-bio"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Computer Scientist with hands-on experience building
        full-stack platforms and low-level systems. I work across the stack — from
        Django backends and React frontends to Rust systems programming and machine learning.
      </motion.p>
    </section>
  );
}
