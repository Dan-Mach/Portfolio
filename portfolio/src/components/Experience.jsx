// src/components/Experience.jsx

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
      <h2 className="section-title">Experience</h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}