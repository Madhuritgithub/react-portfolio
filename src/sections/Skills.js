import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    Languages: ['C', 'Python', 'C++', ],
    'Web Technologies': ['React', 'Angular', 'Node.js', 'Express.js'],
    'Tools & Platforms': ['Git & GitHub', 'MongoDB', 'VS Code', 'Postman'],
  };

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {items.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
