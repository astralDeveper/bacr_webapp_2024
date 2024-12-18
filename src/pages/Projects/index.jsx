import React, { useEffect, useState } from 'react'
import ProjectsCardComponent from './Components/cardComponent'
import Container from '../../components/Container'
import Modal from './Components/Modal'
import TabBar from '../../components/TabBar'
import { useSearchParams } from 'react-router-dom'
import { fetchProjects } from '../../api'

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchParams] = useSearchParams();
    const [projects, setProjects] = useState([]);
    const [tab, setTab] = useState("overseas");


    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };
const fetchProjectsb = async () => {
    try {
        const response = await fetchProjects();
        setProjects(response);     
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
      fetchProjectsb();
  }, []);
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
                    <ProjectsCardComponent projects={projects} category={"oversea"}  />
                )
            }
            {
                tab === "turnkey" && (
                    <ProjectsCardComponent projects={projects} category={"trunkyProject"}  />
                )
            }
            {
                tab === "supply" && (
                    <ProjectsCardComponent projects={projects} category={"sup&comm"}  />
                )
            }
            {
                tab === "operations" && (
                    <ProjectsCardComponent projects={projects} category={"oprMaint"}  />
                )
            }

            



        </Container>
    )
}

export default Projects