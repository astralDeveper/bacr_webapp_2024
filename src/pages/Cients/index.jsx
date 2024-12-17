import React from 'react'
import Container from '../../components/Container'
import ClientCrad from './components/ClientCrad'
// import ClientCrad from './components/ClientCrad'

const OurClients = ({ imageUrl, altText }) => {
  return (
    <Container image heading={"Our Client"} >
      <ClientCrad />

    </Container>
  )
}

export default OurClients