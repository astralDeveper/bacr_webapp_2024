import React from 'react'
import Container from '../../components/Container'
import JoinOurTeamForm from './components/JoinOurTeamForm '
import CareerCard from './components/Card'

const Career = () => {
    return (
        <Container image heading="Career" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners.">

            <div className='md:w-[80%] w-[90%] mx-auto  flex items-center justify-center mt-20 mb-20  ' >

                <div className='flex items-center justify-between md:flex-row  md:gap-6 sm:flex-col flex-col w-full'>
                    <CareerCard />
                    <JoinOurTeamForm />
                </div>
            </div>



        </Container>
    )
}

export default Career