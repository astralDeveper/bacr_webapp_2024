import React from 'react'
import InfoPage from '../../components/InfoPage'

const York = () => {
 // const Array = [
    //     'CHILLERS',
    //     'AIR HANDLING UNITS',
    //     'CLOSE CONTROL UNITS',
    //     'FAN COIL UNITS',
    //     'AIR CURTAINS'
    //   ] 
    
    return (
        <InfoPage
          heading='York'
           brandsLink="https://www.york.com/"
          children={
            <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
              <p className='text-text9 heading7'>
                <span className=' font-semiBold '>York </span>Brothers Air Conditioning offers an extensive array of services tailored to meet the diverse needs of our clients. As providers of YORK products, we ensure access to high-quality HVAC solutions renowned for their reliability and efficiency. Additionally, we specialize in the importation of both new and used chillers, providing cost-effective options without compromising on performance. Our commitment to excellence extends to offering OEM spare parts, ensuring seamless operation and longevity of your HVAC systems. Moreover, we provide comprehensive operations and maintenance contracts, delivering peace of mind through proactive management and expert care of your equipment. With Brothers Air Conditioning, rest assured that your HVAC needs are in capable hands, backed by our dedication to quality service and customer satisfaction.
              </p>
              {/* <div className=' py-10'>
                <ul className='list-disc grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semiBold '>
                  {Array.map(item => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div> */}
              <p className='heading7'>
              York products are designed to deliver superior air quality,
                energy efficiency, and reliability for complex industrial and
                commercial environments.
              </p>
            </div>
          }
        ></InfoPage>
)
}

export default York