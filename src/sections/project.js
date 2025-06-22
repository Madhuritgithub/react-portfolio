import React from 'react';
import './project.css';

const Projects = () => {
  const projects = [
    {
      title: 'Image Generator',
      description: 'A simple image generator using HTML, CSS, and JS.',
      image: 'image-generator.jpg',
      link: 'https://github.com/Madhuritgithub/my_project',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built using Html,Css,Js..',
      image: 'madhu.jpg',
      link: 'https://github.com/Madhuritgithub/myportfolio',
    },
    {
      title: 'Todo App (Angular)',
      description: 'A clean and functional todo list application built using Angular.',
      image: 'image2.png', // Make sure this image is in your public/ folder
      link: 'https://github.com/Madhuritgithub/angular-todo-app',
    },
    {
      title: 'AI Mock Interview Platform (MERN)',
      description: 'AI-powered mock interview platform built with MongoDB, Express, React, and Node.js.',
      image: 'image3.jpg', // Make sure this image is in your public/ folder
      link: 'https://github.com/Madhuritgithub/ai-powered--interview',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={`/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
