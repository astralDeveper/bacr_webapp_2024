import React from 'react'
import InfoPage from '../../components/InfoPage'

const Carrier = () => {
  const KeyName = 'Key Features Included:'
  const KeyArray = [
    'Advanced Oil Return Technology  for safe, reliable operation.',
    'TCC Non-Stop Defrosting reduces  defrosting time by half.',
    'Noise Reduction with three silent  modes for quieter operation.'
  ]
  const ModelName = 'MODEL HIGHLIGHTS:'
  const ModelArray = [
    'Hyplus Health Type VRF',
    'TIMS Smart VRF',
    'TIMS E-Lean VR'
  ]

  return (
    <InfoPage
      heading='Carrier'
      children={
        <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
          <p className=' text-text9 heading7' >
            <span className='font-semibold pr-1'>Carrier</span>
            is a leading Italian brand, renowned for its high-performance HVAC
            solutions. Specializing in fan coil units, chillers, and heat pumps.
            Galletti combines Italian innovation with cutting-edge technology to
            deliver energy-efficient and reliable products. Known for their
            durability and superior performance, Galletti’s products are trusted
            globally across commercial, industrial, and residential sectors. As
            an authorized partner, Brothers Air Conditioning proudly offers
            these premium Italian solutions to meet the diverse needs of our
            clients. We offer a selection of high-performance products,
            including
          </p>
          <div className=' py-10 '>
            <p>{KeyName.toUpperCase()}</p>
            <ul className='list-disc grid 2xl:grid-cols-2 grid-cols-1 px-6 heading7 text-backgroundColor1 font-semibold'>
              {KeyArray.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div className=' py-10 '>
            <p>{ModelName.toUpperCase()}</p>
            <ul className='list-disc grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 '>
              {ModelArray.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      }
    ></InfoPage>
  )
}

export default Carrier