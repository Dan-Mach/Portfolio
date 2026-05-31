export default function Skills() {
  const skillMatrix = [
    { category: "Languages", items: ["Python", "Rust", "JavaScript", "C"] },
    { category: "Frameworks", items: ["Django", "React", "TensorFlow", "PyTorch"] },
    { category: "Concepts", items: ["System Design", "Data Structures", "Algorithms", "Distributed Systems"] }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillMatrix.map((group, index) => (
          <div key={index} className="skill-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}