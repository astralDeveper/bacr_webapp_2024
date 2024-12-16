import React, { useEffect, useState } from 'react'
import ProjectsCardComponent from './Components/cardComponent'
import Container from '../../components/Container'
import Modal from './Components/Modal'
import TabBar from '../../components/TabBar'
import { useSearchParams } from 'react-router-dom'

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchParams] = useSearchParams();

    const [tab, setTab] = useState("overseas");


    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };

    useEffect(() => {
        // URL se `type` parameter ko read karein
        const type = searchParams.get("type");
        if (type) {
            setTab(type);
        }
    }, [searchParams]);

    // console.log("Product Page Data", tab);

    return (
        <Container image heading="Our Projects" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners.">

            <div className='mx-auto mt-14'>
                <TabBar handleTabChange={handleTabChange} tab={tab} setTab={setTab} tabtext1="Overseas Project" tabtext2="Turnkey Projects" tabtext3="Supply and Comissioning" tabtext4="Operations and Maintenance" topbarStyle="w-full" />
            </div>
            {
                tab === "overseas" && (
                    <ProjectsCardComponent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }
            {
                tab === "turnkey" && (
                    <ProjectsCardComponent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }
            {
                tab === "supply" && (
                    <ProjectsCardComponent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }
            {
                tab === "operations" && (
                    <ProjectsCardComponent setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }

            {
                isModalOpen && (
                    <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                )
            }



        </Container>
    )
}

export default Projects