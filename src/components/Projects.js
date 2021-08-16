import React from 'react';

import '../style/App.css';
import ProjectCard from './ProjectCard';
import projects from '../data/Projects';


const Projects = () => {    
    return(
        <div id="all-projects">
            <h1 className="section-title">Meine Projekte</h1>
            <div className="grid-container">
                {projects.map((project, idx) => (
                    <div className="grid-item" key={idx}>
                        <ProjectCard project={ project }></ProjectCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;