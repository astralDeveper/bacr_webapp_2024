import React, { useState } from 'react';
import { IMAGES } from '../../../utils/Images';
import { Products } from '../../../utils/DummyData';
import Button from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import TabBar from '../../../components/TabBar';

const ProductCards = () => {
    const [brandsOpen, setBrandsOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [capacityOpen, setCapacityOpen] = useState(false);
    const [priceRangeOpen, setPriceRangeOpen] = useState(false);
    const navigate = useNavigate();
    const [clickedIndex, setClickedIndex] = useState(null); // To store the index of the clicked card

    const handleClick = (index) => {
        setClickedIndex(index); // Set the clicked card index
    };


    const [brand, setBrand] = useState('');

    const toggleSection = (section) => {
        switch (section) {
            case 'brands':
                setBrandsOpen(!brandsOpen);
                break;
            case 'category':
                setCategoryOpen(!categoryOpen);
                break;
            case 'capacity':
                setCapacityOpen(!capacityOpen);
                break;
            case 'priceRange':
                setPriceRangeOpen(!priceRangeOpen);
                break;
            default:
                break;
        }
    };

    const filteredProducts = Products.filter(productItem => {
        const brandMatch = brand ? productItem.brands.toLowerCase().includes(brand.toLowerCase()) : true;
        return brandMatch;
    });

    const productDetail = (item) => {
        console.log(item);
        navigate(`/project_detail/${item.id}`)

    }






    return (

        <div className='mt-20' >


            <TabBar search tabtext1={"New Products"} tabtext2={"Used Equipments"} tabtext3={"BAC Store"} setBrand={setBrand} />



            <div className="flex xl:flex-row flex-col gap-2 md:mt-4 mt-2 ">
                {/* Filter Sidebar */}
                <div className="w-full xl:w-1/4 h-fit bg-backgroundColor2 p-4 border rounded-2xl shadow-md">
                    <h2 className="heading7 font-bold mb-4">Search by Filters</h2>

                    {/* Brands Section */}
                    <div>
                        <button
                            onClick={() => toggleSection('brands')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text1 lg:font-bold">Brands</span>
                            <span>{brandsOpen ? '-' : '+'}</span>
                        </button>
                        {brandsOpen && (
                            <div className="ml-4 space-y-2">
                                {['All', 'Flakt Group', 'Galletti Products', 'Tica Product'].map((brand, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8 cursor-pointer " />
                                        <span className='text1 font-semibold '>{brand}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Category Section */}
                    <div className="mt-4">
                        <button
                            onClick={() => toggleSection('category')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text1 lg:font-bold">Category</span>
                            <span>{categoryOpen ? '-' : '+'}</span>
                        </button>
                        {categoryOpen && (
                            <div className="ml-4 space-y-2">
                                {['AHU', 'Coils', 'Chillers', 'Cooling Towers', 'Heat Exchangers'].map((category, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8" />
                                        <span className='text1 font-semibold '>{category}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Capacity Section */}
                    <div className="mt-4">
                        <button
                            onClick={() => toggleSection('capacity')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text1 lg:font-bold">Capacity</span>
                            <span>{capacityOpen ? '-' : '+'}</span>
                        </button>
                        {capacityOpen && (
                            <div className="ml-4 space-y-2">
                                {['5 to 10 Tons', '10 to 20 Tons', 'Above 20 Tons'].map((capacity, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8 cursor-pointer " />
                                        <span className='text1 font-semibold '>{capacity}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Range Section */}
                    <div className="mt-4">
                        <button
                            onClick={() => toggleSection('priceRange')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text1 lg:font-bold">Price Range</span>
                            <span>{priceRangeOpen ? '-' : '+'}</span>
                        </button>
                        {priceRangeOpen && (
                            <div className="ml-4 space-y-2">
                                {['$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000', '$20,000+'].map((range, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8 cursor-pointer " />
                                        <span>{range}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Cards */}
                <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
                    {
                        filteredProducts.length > 0 ?
                            filteredProducts.map((item, ind) => (
                                <div
                                    key={ind}
                                    className={`mt-4 lg:max-w-[370px] lg:max-h-[471px] p-6 rounded-xl shadow-md ${clickedIndex === ind
                                        ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                                        : "bg-backgroundColor9"
                                        } cursor-pointer`}
                                    onClick={() => handleClick(ind)}
                                >
                                    <img
                                        src={item.images}
                                        alt={item.productName}
                                        className="lg:w-[289px] md:w-[200px] w-[150px] h-auto mb-4 mx-auto"
                                    />
                                    <div className="flex items-center justify-between">
                                        <p className="heading5">{item.productName}</p>
                                        <div className="flex items-center gap-2 text1">
                                            <span>12</span>
                                            <img src={item.icon} alt="icon" className="md:w-6 w-4" />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text1">
                                            Model No: <span className="font-bold text1">{item.modelno}</span>
                                        </p>
                                        <p className="text1">
                                            Brands Name: <span className="font-bold text1">{item.brands}</span>
                                        </p>
                                    </div>
                                    <div className="md:mt-6 mt-4 flex items-center justify-center">
                                        <Link
                                            to={{
                                                pathname: `/detail/${item?.id}`,
                                            }}
                                        >

                                            <Button
                                                btnStyle={`rounded-md w-full text1 ${clickedIndex === ind
                                                    ? "bg-backgroundColor2 text-backgroundColor1"
                                                    : "text-backgroundColor6 bg-backgroundColor1"
                                                    } font-semibold`}
                                                title="Product Inquiry"
                                            // onclick={() => {
                                            //     productDetail(item);
                                            // }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))
                            :
                            Products.map((item, ind) => (
                                <div
                                    key={ind}
                                    className={`mt-4 lg:max-w-[370px] lg:max-h-[471px] p-6 rounded-xl shadow-md ${clickedIndex === ind
                                        ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                                        : "bg-backgroundColor9"
                                        } cursor-pointer`}
                                    onClick={() => handleClick(ind)}
                                >
                                    <img
                                        src={item.images}
                                        alt={item.productName}
                                        className="lg:w-[289px] md:w-[200px] w-[150px] h-auto mb-4 mx-auto"
                                    />
                                    <div className="flex items-center justify-between">
                                        <p className="heading5">{item.productName}</p>
                                        <div className="flex items-center gap-2 text1">
                                            <span>12</span>
                                            <img src={item.icon} alt="icon" className="md:w-6 w-4" />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text1">
                                            Model No: <span className="font-bold text1">{item.modelno}</span>
                                        </p>
                                        <p className="text1">
                                            Brands Name: <span className="font-bold text1">{item.brands}</span>
                                        </p>
                                    </div>
                                    <div className="md:mt-6 mt-4 flex items-center justify-center">

                                        <Link
                                            to={{
                                                pathname: `/detail/${item?.id}`,
                                            }}
                                        >

                                            <Button
                                                btnStyle={`rounded-md w-full text1 ${clickedIndex === ind
                                                    ? "bg-backgroundColor2 text-backgroundColor1"
                                                    : "text-backgroundColor6 bg-backgroundColor1"
                                                    } font-semibold`}
                                                title="Product Inquiry"
                                            // onclick={() => {
                                            //     productDetail(item);
                                            // }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>

    );
};

export default ProductCards;
