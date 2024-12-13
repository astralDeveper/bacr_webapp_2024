import React from 'react'
import InfoPage from '../../components/InfoPage'

const Echochillers = () => {
  // const Array = [
    //     'CHILLERS',
    //     'AIR HANDLING UNITS',
    //     'CLOSE CONTROL UNITS',
    //     'FAN COIL UNITS',
    //     'AIR CURTAINS'
    //   ] 
    
    return (
        <InfoPage
          heading='Echochillers'
          children={
            <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
              <p className='text-text9 heading7'>
                <span className=' font-semiBold '>Echochillers </span>Based in the USA, Eco Chillers Inc sets the standard for excellence in HVAC solutions. Compliant with AHRI standards, their products offer reliability and performance. At EcoGreen Solutions, sustainability is paramount, with a focus on maximizing energy and water efficiency while utilizing low GWP refrigerants and prioritizing electrification. Specializing in custom-made, industrial HVAC and process solutions, Eco Chillers Inc provides a diverse array of products, including Scroll, Screw, Magnetic Centrifugal, and Semi-Hermetic Chillers, tailored to meet unique requirements. Their dedication extends to manufacturing cooling and heating solutions such as Chillers, Heat Pumps, and Air Handlers, serving a wide range of applications in refrigeration systems, food, pharmaceuticals, industrial processes, and air conditioning. As the authorized distributor of Eco Chillers Inc products in Pakistan, Brothers Air Conditioning ensures access to cutting-edge HVAC solutions that prioritize sustainability and performance.
              </p>
              {/* <div className=' py-10'>
                <ul className='list-disc grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semiBold '>
                  {Array.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div> */}
              <p className='heading7'>
              Echochillers products are designed to deliver superior air quality,
                energy efficiency, and reliability for complex industrial and
                commercial environments.
              </p>
            </div>
          }
        ></InfoPage>
)
}

export default Echochillers