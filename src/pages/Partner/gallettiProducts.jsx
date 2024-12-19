import React, { useEffect, useState } from 'react'
import InfoPage from '../../components/InfoPage'
import { fetchProdBrandById, fetchthreeProducts } from '../../api';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { IMAGES } from '../../utils/Images';

const GallettiProducts = () => {
  const Array = ['CHILLERS', 'HEAT PUMPS', 'FAN COIL UNITS']
  const { id } = useParams(); 
  const [brand, setBrand] = useState([]);
  const [products, setProducts] = useState([]);

const fetchBrand = async () => {
    try {
        const response = await fetchProdBrandById(id);
        setBrand(response);    
        const responseb = await fetchthreeProducts(id);
        setProducts(responseb);    
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
console.log(products);

    useEffect(() => {
        fetchBrand();
      }, [id]);
  return (
    <InfoPage
    coverimage={brand?.coverimage}
      heading={brand?.name}
      children={
        <div className='md:w-[80%] w-[90%] mx-auto my-16 p-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
            {products?.length > 0 &&
          products?.map((item, ind) => (
              <div
                key={ind}
                id={`card-${ind}`} // Set unique id for each card
                className={`card rounded-lg overflow-hidden shadow-md flex flex-col visible
                  }`}
              >
                <div className="relative">
                  <img
                    className="w-full h-[180px] rounded-t-2xl object-cover"
                    src={item?.imagePath}
                    alt={item?.imagePath}
                    draggable={false}
                  />

                  {/* centered Text */}
                  {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading7 font-semibold">
                    {item?.text}
                  </p> */}

                  {/* Logo positioned half on the image and half below it */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center bg-white rounded-xl shadow-black shadow-xs">
                    <img
                      className="rounded-lg p-2 object-contain w-[50px] h-[50px]"
                      src={item?.logo ? item?.logo : IMAGES.THUMBNAIL}
                      alt={item?.logo}
                      draggable={false}
                    />
                  </div>
                </div>
                <p className="pl-3 w-[100%] mx-auto rounded-xl text-black md:mt-8 mt-4 heading7 font-semibold">
                  {item.name}
                </p>
                <div className="p-3 bg-BackgroundColor1">
                  <p className="text-text6 text3 text-start">
                    {item?.detail?.slice(0, 90)}...
                  </p>
                  <div className="mt-6 flex items-center justify-center  rounded-md">
                    <Link to={"/services-detail"} className="w-full" >
                      <Button
                        btnStyle="bg-backgroundColor1 w-full rounded-md text2 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 lg:font-semibold "
                        title={"Learn More"}
                        onclick={() => { setTitle(item.text) }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            
          ))}
          
        </div>
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
          {brand?.details}
          
        </div>
      }
    ></InfoPage>
  )
}

export default GallettiProducts
