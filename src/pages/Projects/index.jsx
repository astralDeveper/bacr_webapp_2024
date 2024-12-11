import React, { useState } from 'react'
import ProjectsCardComponent from './Components/cardComponent'
import Container from '../../components/Container'
import Modal from './Components/Modal'

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Container image heading="Our Projects" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners.">

            <ProjectsCardComponent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

            {
                isModalOpen && (
                    <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }



        </Container>
    )
}

export default Projects