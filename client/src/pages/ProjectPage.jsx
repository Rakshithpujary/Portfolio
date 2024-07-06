import React from 'react';
import '../css/ProjectPage.css'; 
import { GrGithub } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectPage = () => {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const projects = [
        {
            title: "Ak Digital",
            description: "Developed a web application for a client in the photo studio business.Implemented a responsive user interface in React to showcase studio services efficiently.",
            githubUrl: "https://github.com/Rakshithpujary/Mock-Interview-System-Python",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#React", " #Firebase"," #JavaScript"]
        },
        {
            title: "Mock Interview",
            description: "Developed a mock interview system, providing users with personalized feedback to improve interview skills. Enabled real-time interactions and upskilling opportunities for better interview preparation.",
            githubUrl: "https://github.com/Rakshithpujary/Chat-Bot",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#Flask", " #React"," #Python"]
        },
        {
            title: "Chat-Bot",
            description: "abc.....................",
            githubUrl: "https://github.com/Rakshithpujary/Ak_Digitals",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#React", " #Flask"," #Python"]
        },
        {
            title: "Car Parking App",
            description: "Developed a car parking app, enabling users to search for and book parking slots easily. Implemented real-time slot availability and an intuitive user interface for seamless navigation.",
            githubUrl: "https://github.com/Rakshithpujary/Chat-Bot",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#Java", " #SQLlite"]
        },
        {
            title: "Weather Web-App",
            description: "",
            githubUrl: "https://github.com/Rakshithpujary/Chat-Bot",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#React"]
        },
        {
            title: "Online Food Delivery",
            description: "Developed a food ordering website for a specific hotel, enabling customers to order food from a diverse menu.There admin can tracking order, product management, and menu updates.",
            githubUrl: "https://github.com/Rakshithpujary/Chat-Bot",
            imageUrl: "/assets/ak-digital-image.png",
            technologies: ["#HTML", " #CSS"," #PHP"," #MYSQL"]
        }
    ];

    return (
        <div className="ProjectPage-main-div">
            <div className='ProjectPage-top-content-div'>
                <h6>My Work</h6>
                <h1>Projects</h1>
                <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            </div>
            <div className='To-adjust-sub-div'>
            <div className='ProjectPage-sub-div'>
                {projects.map((project, index) => (
                    <div key={index} className='Project-display-div'>
                        <div className='Project-img-div'>
                            <img src={project.imageUrl} alt={`${project.title} screenshot`} />
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <button className='Project-github-button'>
                                    <GrGithub className='git-icon' />
                                </button>
                            </a>
                        </div>
                        <div className='Project-text-div'>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className='Project-tech-div'>
                                {project.technologies.map((tech, i) => (
                                    <span 
                                        key={i} 
                                        style={{ color: getRandomColor(), marginRight: '5px' }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default ProjectPage;
