import React from 'react'
import InfoPage from '../../components/InfoPage'

const Carrier = () => {
    // const Array = [
    //     'CHILLERS',
    //     'AIR HANDLING UNITS',
    //     'CLOSE CONTROL UNITS',
    //     'FAN COIL UNITS',
    //     'AIR CURTAINS'
    //   ] 
    
      return (
        <InfoPage
          heading='Carrier'
          children={
            <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
              <p className='text-text9 heading7'>
                <span className=' font-semiBold '>Carrier </span>Discover an extensive range of services tailored to suit the diverse needs of our valued clients at Brothers Air Conditioning. Proud providers of Carrier products, we grant access to premium HVAC solutions renowned for their reliability and efficiency. Delving deeper, we specialize in the importation of both new and used chillers, presenting budget-friendly alternatives. Our dedication to excellence extends to the provision of authentic OEM spare parts, ensuring seamless operation and prolonged durability for your HVAC systems. Moreover, entrust us with comprehensive operations and maintenance contracts, delivering proactive management and expert care for your equipment, guaranteeing peace of mind. At Brothers Air Conditioning, your HVAC needs are skillfully managed, backed by our unwavering commitment to delivering superior service and ensuring utmost customer satisfaction.
              </p>
              {/* <div className=' py-10'>
                <ul className='list-disc grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semiBold '>
                  {Array.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div> */}
              <p className='heading7'>
              Carrier products are designed to deliver superior air quality,
                energy efficiency, and reliability for complex industrial and
                commercial environments.
              </p>
            </div>
          }
        ></InfoPage>
)}

export default Carrier