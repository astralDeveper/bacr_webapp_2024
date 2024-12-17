import React from 'react'
import InfoPage from '../../components/InfoPage'

const FlaktGroup = () => {
  const Array = [
    'CHILLERS',
    'AIR HANDLING UNITS',
    'CLOSE CONTROL UNITS',
    'FAN COIL UNITS',
    'AIR CURTAINS'
  ] 

  return (
    <InfoPage
      heading='Flakt Group'
      brandsLink="https://www.flaktgroup.com/en/"
      children={
        <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
          <p className='text-text9 heading7'>
            <span className=' font-semiBold '>Flakt Group </span>is a leading
            European brand, renowned for its advanced air handling and
            ventilation solutions. Specializing in air handling units,
            ventilation systems, heat recovery units, and custom air solutions,
            Flakt Group is committed to delivering energy-efficient, reliable,
            and sustainable products. With a focus on improving indoor air
            quality and operational efficiency, Flakt Group’s products are
            trusted across commercial, industrial, and residential sectors
            globally. As an authorized partner, Brothers Air Conditioning
            proudly offers Flakt Group’s cutting-edge solutions to meet the
            diverse needs of our clients.
          </p>
          <div className=' py-10'>
            <ul className='list-disc grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semiBold '>
              {Array.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <p className='heading7'>
            Flakt Group’s products are designed to deliver superior air quality,
            energy efficiency, and reliability for complex industrial and
            commercial environments.
          </p>
        </div>
      }
    ></InfoPage>
  )
}

export default FlaktGroup
