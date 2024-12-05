import React from 'react'
import ProjectsCardComponent from './Components/cardComponent'
import Container from '../../components/Container'

const Projects = () => {
    return (
        <Container image heading="Our Projects" para="Providing high-quality HVACR products, services, and solutions 
backed by industry-leading partners.">
            <ProjectsCardComponent />
        </Container>
    )
}

export default Projects