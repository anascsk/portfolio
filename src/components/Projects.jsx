import React from 'react'
import projectsData from '../assets/ProjectsData'
import { H2, ProjectContainer,Container } from '../styles/Projects.style'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Container id="projects">
            <H2>Projects</H2>
                <ProjectContainer id="projects" > 
                    {projectsData.map((item) => (
                    <ProjectCard key={item.id} item={item}/>
                    ))}
                </ProjectContainer>
        </Container>
    )
}

export default Projects
