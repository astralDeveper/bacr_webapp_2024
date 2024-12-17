import React from 'react'
import InfoPage from '../../components/InfoPage'

const Trane = () => {
  // const Array = [
    //     'CHILLERS',
    //     'AIR HANDLING UNITS',
    //     'CLOSE CONTROL UNITS',
    //     'FAN COIL UNITS',
    //     'AIR CURTAINS'
    //   ] 
    
    return (
        <InfoPage
          heading='Trane'
          brandsLink="https://www.trane.com/index.html"
          children={
            <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
              <p className='text-text9 heading7'>
                <span className=' font-semiBold '>Trane </span>Brothers Air Conditioning offers a comprehensive range of services featuring Trane products to meet the diverse needs of our clients. From troubleshooting and program installations to providing genuine OEM spare parts, we ensure seamless operation and longevity of your HVAC systems. Our commitment extends further with comprehensive operations and maintenance contracts, providing proactive management and expert care for your equipment. With Brothers Air Conditioning, rest assured that your HVAC requirements are expertly managed, supported by our unwavering commitment to delivering exceptional service and ensuring utmost customer satisfaction. Trust us to handle your HVAC needs with expertise and dedication, ensuring your satisfaction every step of the way.
              </p>
              {/* <div className=' py-10'>
                <ul className='list-disc grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semiBold '>
                  {Array.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div> */}
              <p className='heading7'>
              Trane products are designed to deliver superior air quality,
                energy efficiency, and reliability for complex industrial and
                commercial environments.
              </p>
            </div>
          }
        ></InfoPage>
)
}

export default Trane