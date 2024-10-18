import React from 'react';
import './Projects.css'; 
import pic from '../pj0.jpg'; 

const projectsData = [
    {
        title: "E-Commerce Web App",
        description: "A full-stack e-commerce application using React, Spring Boot, MySQL, and H2 database.",
        link: "https://github.com/jiyajoy123/ecommerce-app",
        screenshot: pic,
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built with React showcasing skills, projects, and contact info.",
        link: "https://github.com/jiyajoy123/portfolio",
        screenshot: pic,
    },
    {
        title: "User Management System",
        description: "A Spring Boot application with login/registration features and role-based access.",
        link: "", // No GitHub link for demonstration
        screenshot: pic,
    },
    // Add more projects here
];

function Projects() {
    const handleLinkClick = (link) => {
        if (link) {
            window.open(link, '_blank'); // Open link in a new tab
        } else {
            alert("No GitHub link available for this project."); // Alert message
        }
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.screenshot} alt={`${project.title} Screenshot`} className="project-screenshot" />
                        <div className="project-screenshot-overlay">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <button 
                                onClick={() => handleLinkClick(project.link)} 
                                className="project-link"
                            >
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
