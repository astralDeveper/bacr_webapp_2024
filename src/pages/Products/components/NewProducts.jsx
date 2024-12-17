import React, { useEffect, useState } from 'react'
import { Products } from '../../../utils/DummyData'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const NewProducts = ({ products,clickedIndex }) => {

    const [visibleCards, setVisibleCards] = useState([]);
    const [newProducts, setnewProducts] = useState([]);
    const applyFilters = () => {
        let filtered = products;
              filtered = filtered.filter(product => 
                  product.brandFlags.newProd === true && product.proType === 'new'
              );          
              setnewProducts(filtered);
        
      };
      
    useEffect(() => {
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => [...prev, entry.target.id]); 
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );
        // Observe each card element
        const cards = document.querySelectorAll(".pcard");
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, [newProducts]);
    useEffect(() => {
        applyFilters();
        console.log();
        
    }, [products]);
  


    return (
        <div className=''>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {newProducts.map((item, ind) => (
                    <div
                        id={`pcard-${ind}`}
                        key={ind}
                        className={`w-full pcard  p-6 rounded-xl shadow-md ${clickedIndex === ind
                            ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                            : "bg-backgroundColor9"
                            } cursor-pointer ${visibleCards.includes(`pcard-${ind}`) ? "visible" : ""
                            } `}
                        onClick={() => handleClick(ind)}
                    >
                        <img
                            src={item.imagePath}
                            alt={item.name}
                            className="w-[150px] h-auto mb-4 mx-auto"
                        />
                        <div className="flex items-center justify-between mt-8">
                            <p className="text1 font-semibold">{item.name}</p>
                            <div className="flex items-center gap-2 text2">
                                <span>12</span>
                                <img src={clickedIndex === ind ? item.iconwhite : item.icon} alt="icon" className="w-4" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text2">
                                Model No: <span className="font-bold text2">{item.model}</span>
                            </p>
                            <p className="text2">
                                Brands Name: <span className="font-bold text2">{item.brandId.name}</span>
                            </p>
                        </div>
                        <div className="md:mt-6 mt-4 flex items-center justify-center">
                            <Link
                                to={{
                                    pathname: `/detail/${item._id}`,
                                }}
                                className='w-full'
                            >

                                <Button
                                    btnStyle={`rounded-md w-full text2 ${clickedIndex === ind
                                        ? "bg-backgroundColor2 text-backgroundColor1"
                                        : "text-backgroundColor6 bg-backgroundColor1"
                                        } font-semibold`}
                                    title="Product Inquiry"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewProducts