import { motion } from "motion/react";

export default function SelectedWork() {
  const projects = [
    {
      id: "01",
      title: "Chess Engine",
      description: "A fully functional chess engine built from scratch in Rust. Implements move generation, board evaluation, and a search algorithm — a deep dive into low-level systems programming and game theory.",
      tags: ["Rust", "Systems", "Algorithms", "GitHub"]
    },
    {
      id: "02",
      title: "Arising Hope Medical System",
      description: "Full-stack medical facility platform managing medicine dispensing, patient records, and employee workflows. Built with Django and role-based access control across a decentralised server architecture.",
      tags: ["Django", "Python", "RBAC", "System Design"]
    },
    {
      id: "03",
      title: "Ocontest Platform",
      description: "A web-based competition platform connecting videographers with brand sponsorships. Handles high-resolution video submissions, automated scoring, and prize pool distribution — optimised for low-latency media uploads.",
      tags: ["Django", "React", "Python", "Performance"]
    }
  ];

  return (
    <section id="work" className="work-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Selected work
      </motion.h2>

      {/* FIXED IMAGE BLOCK: Added dark-friendly blend modes */}
      <motion.div
        className="w-full overflow-hidden rounded-12mb-8 border border-border/40 bg-background"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        
      </motion.div>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="project-meta">
              <span className="project-id">{project.id}</span>
              <h3 className="project-title text-foreground">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}