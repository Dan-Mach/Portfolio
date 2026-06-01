import { motion } from "motion/react";

export default function Experience() {
  const timeline = [
    {
      period: "Nov 2025 — Now",
      role: "System Developer",
      company: "Arising Hope Medical Centre",
      details: "Designed and built the full-stack infrastructure for a medical facility system — covering medicine dispensing, patient management, and a decentralised employee server with role-based access control."
    },
    {
      period: "Jul 2025 — Sep 2025",
      role: "Freelance System Designer",
      company: "Ocontest",
      details: "Led system design and full-stack implementation of a videography competition platform. Optimised low-level performance for high-resolution media uploads and built automated contest scoring logic."
    }
  ];

  return (
    <section className="timeline-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
