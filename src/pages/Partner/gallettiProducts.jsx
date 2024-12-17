import React from 'react'
import InfoPage from '../../components/InfoPage'

const GallettiProducts = () => {
  const Array = ['CHILLERS', 'HEAT PUMPS', 'FAN COIL UNITS']

  return (
    <InfoPage
      heading='Galletti Products'
      brandsLink="https://www.galletti.com/en"
      children={
        <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
          <p className='text-text9 heading7'>
            <span className='font-semibold  '>Galletti </span>
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
            <ul className='list-disc grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6 text-text8 heading7 font-semibold'>
              {Array.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <p className='heading7' >
            Each product is designed to meet the highest standards of comfort
            and efficiency, offering tailored solutions for a variety of
            commercial and industrial applications.
          </p>
        </div>
      }
    ></InfoPage>
  )
}

export default GallettiProducts
