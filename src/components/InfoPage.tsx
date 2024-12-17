import React from 'react'
import Container from './Container'


const InfoPage = ({ heading, children,brandsLink }) => {
  return (
    <Container
      heading={heading}
      brandsLink={brandsLink}
      image>
      <div>
         {children}
      </div>
    </Container>
  )
}

export default InfoPage
