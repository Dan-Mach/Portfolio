// src/components/Education.jsx

export default function Education() {
  const history = [
    {
      period: "Aug 2022 — Current",
      degree: "BSc Computer Science",
      institution: "Moi University",
      notes: "Coursework in Data Structures, Algorithms, Software Engineering, and Distributed Systems."
    },
    {
      period: "2018 — 2022",
      degree: "Kenya Certificate of Secondary Education",
      institution: "Sacho High School",
      notes: "Participated in the National Science and Innovation Congress with projects in Physics and Computing."
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline-container">
        {history.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}