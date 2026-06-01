import { motion } from "motion/react";

export default function Skills() {
  const skillMatrix = [
    { category: "Languages", items: ["Python", "Rust", "JavaScript", "C"] },
    { category: "Frameworks", items: ["Django", "React", "TensorFlow", "PyTorch"] },
    { category: "Concepts", items: ["System Design", "Data Structures", "Algorithms", "Distributed Systems"] }
  ];

  return (
    <section className="skills-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skills-grid">
        {skillMatrix.map((group, index) => (
          <motion.div
            key={index}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + i * 0.08 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
