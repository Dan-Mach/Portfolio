import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-headline"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let's build something.
      </motion.h2>
      <motion.p
        className="contact-sub"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Open to internships, collaborations, and freelance projects.
      </motion.p>

      <motion.div
        className="contact-methods"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          href="mailto:danreech83@gmail.com"
          className="contact-link"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          danreech83@gmail.com
        </motion.a>
        <motion.a
          href="https://github.com/Dan-Mach"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Dan-Mach
        </motion.a>
        <motion.a
          href="tel:+254794732689"
          className="contact-link"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          +254 794 732 689
        </motion.a>
      </motion.div>
    </section>
  );
}
