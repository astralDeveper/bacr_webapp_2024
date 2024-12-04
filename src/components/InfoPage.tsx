import React from 'react'
import Container from './Container'


const InfoPage = ({ heading, children }) => {
  return (
    <Container
      heading={heading}
      image>
      <div>
         {children}
      </div>
    </Container>
  )
}

export default InfoPage
