import React from 'react'
import Container from '../../components/Container'
import JoinOurTeamForm from './components/JoinOurTeamForm '
// import Card from './components/card'

const Career = () => {
    return (
        <Container image heading="Career" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners.">

            <div className='w-[80%] mx-auto  flex items-center justify-center mt-20 mb-20  ' >

                <div className='flex items-center justify-between 2xl:flex-row xl:flex-col lg:gap-0 gap-4 flex-col w-full'>
                    {/* <Card /> */}
                    <JoinOurTeamForm />
                </div>
            </div>



        </Container>
    )
}

export default Career