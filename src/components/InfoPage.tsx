import React from 'react'
import Container from './Container'


const InfoPage = ({ coverimage,heading, children,brandsLink  }) => {
  return (
    <Container
    heading={heading}
    coverimage={coverimage}
    brandsLink={brandsLink}
    image>
      <div>
         {children}
      </div>
    </Container>
  )
}

export default InfoPage
