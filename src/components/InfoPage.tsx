import React from 'react'
import Container from './Container'


const InfoPage = ({ coverimage,heading, children }) => {
  return (
    <Container
    heading={heading}
    coverimage={coverimage}
    image>
      <div>
         {children}
      </div>
    </Container>
  )
}

export default InfoPage
