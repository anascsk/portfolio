import React from 'react'
import projectsData from '../assets/ProjectsData'
import { H2, ProjectContainer } from '../styles/Projects.style'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <>
            <H2>Projects</H2>
                <ProjectContainer > 
                    {projectsData.map((item) => (
                    <ProjectCard key={item.id} item={item}/>
                    ))}
                </ProjectContainer>
        </>
    )
}

export default Projects
