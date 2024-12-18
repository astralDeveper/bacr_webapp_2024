import React, { useEffect, useState } from 'react'
import InfoPage from '../../components/InfoPage'
import { fetchProdBrandById } from '../../api';
import { useParams } from 'react-router-dom';

const GallettiProducts = () => {
  const Array = ['CHILLERS', 'HEAT PUMPS', 'FAN COIL UNITS']
  const { id } = useParams(); 
  const [brand, setBrand] = useState([]);

const fetchBrand = async () => {
        
    try {
        const response = await fetchProdBrandById(id);
        setBrand(response);     
           console.log(response);
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };

    useEffect(() => {
        fetchBrand();
      }, [id]);
  return (
    <InfoPage
    coverimage={brand.coverimage}
      heading={brand.name}
      children={
        <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
          {/* <p className='text-text9 heading7'>
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
          </p> */}
          {brand.details}
        </div>
      }
    ></InfoPage>
  )
}

export default GallettiProducts
