import React, { useEffect, useState } from 'react'
import { Products } from '../../../utils/DummyData'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { IMAGES } from '../../../utils/Images'

const SpareParts = ({ products,clickedIndex }) => {


    const [visibleCards, setVisibleCards] = useState([]);
    const [spareProducts, setspareProducts] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
        const productsPerPage = 9; // Set how many products to show per page
      
        // Calculate the total number of pages
        const totalPages = Math.ceil(spareProducts.length / productsPerPage);
      
        // Get products for the current page
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = spareProducts.slice(indexOfFirstProduct, indexOfLastProduct);
      
        const handlePageChange = (page) => {
          setCurrentPage(page);
        };
    const applyFilters = () => {
        let filtered = products;
              filtered = filtered.filter(product => 
                  product.brandFlags.spare === true && product.proType === 'spare'
              );          
              setspareProducts(filtered);
      };
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => [...prev, entry.target.id]); // Mark card as visible
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 50% of the card is visible
            }
        );
        // Observe each card element
        const cards = document.querySelectorAll(".pcard");
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, [spareProducts]);
    useEffect(() => {
        applyFilters();
    }, [products]);


    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {currentProducts.map((item, ind) => (
                    <div
                        id={`pcard-${ind}`}
                        key={ind}
                        className={`w-full pcard  p-6 rounded-xl shadow-md ${clickedIndex === ind
                            ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                            : "bg-backgroundColor9"
                            } cursor-pointer ${visibleCards.includes(`pcard-${ind}`) ? "visible" : ""
                            } `}
                        // onClick={() => handleClick(ind)}
                    >
                        <img
                            src={item?.imagePath ? item?.imagePath :IMAGES.THUMBNAIL}
                            alt={item?.name}
                            className="w-[150px] h-auto mb-4 mx-auto"
                        />
                        <div className="flex items-center justify-between mt-8">
                            <p className="text1 font-semibold">{item.name}</p>
                            <div className="flex items-center gap-2 text2">
                                {/* <span>{item.quantity}</span> */}
                                {/* <img src={clickedIndex === ind ? item.iconwhite : item.icon} alt="icon" className="w-4" /> */}
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
                                    pathname: `/detail/${item?._id}`,
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
             {/* Pagination */}
      <div className="flex justify-center mt-6">
             {currentProducts.length > 0 && 
        <ul className="flex gap-2">
        <li>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-backgroundColor1 text-backgroundColor6 hover:bg-backgroundColor2 hover:text-backgroundColor1"
        }`}
      >
         &lt;
      </button>
    </li>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, index) => (
      <li key={index}>
        <button
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === index + 1
              ? "bg-backgroundColor2 text-backgroundColor1"
              : "bg-backgroundColor1 text-backgroundColor6 hover:bg-backgroundColor2 hover:text-backgroundColor1"
          }`}
        >
          {index + 1}
        </button>
      </li>
    ))}

    {/* Next Button */}
    <li>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-backgroundColor1 text-backgroundColor6 hover:bg-backgroundColor2 hover:text-backgroundColor1"
        }`}
      >
         &gt;
      </button>
    </li>
        </ul>
             }
      </div>
        </div>
    )
}

export default SpareParts