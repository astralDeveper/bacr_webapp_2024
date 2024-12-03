import React, { useState } from 'react';
import { IMAGES } from '../../../utils/Images';
import { Products } from '../../../utils/DummyData';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const ProductCards = () => {
    const [brandsOpen, setBrandsOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [capacityOpen, setCapacityOpen] = useState(false);
    const [priceRangeOpen, setPriceRangeOpen] = useState(false);
    const navigate = useNavigate();


    const [brand, setBrand] = useState('');

    const [tab, setTab] = useState("new");

    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };



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
        navigate(`/productsDetail`)

    }






    return (

        <div className='mt-20' >
            <div>
                {/* Tabs Navigation */}
                <div className="lg:w-[70%] mx-auto flex items-center justify-around bg-backgroundColor9 rounded-lg">
                    <Button
                        onclick={() => { handleTabChange("new") }}
                        btnStyle={`${tab === "new" ? "bg-backgroundColor3 text-backgroundColor2 transition-all duration-500 ease-linear " : "text-text4"
                            } w-full rounded-md  lg:text-[18px] md:text-[14px] text-[10px] `}
                        title={"New Products"}
                    />
                    <Button
                        onclick={() => { handleTabChange("used") }}
                        btnStyle={`${tab === "used" ? "bg-backgroundColor3 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                            } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px]`}
                        title={"Used Equipments"}
                    />
                    <Button
                        onclick={() => { handleTabChange("store") }}
                        btnStyle={`${tab === "store" ? "bg-backgroundColor3 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                            } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px]`}
                        title={"BAC Store"}
                    />

                </div>

                <div className='lg:w-[70%] mx-auto'>
                    <img src={IMAGES.SEARCH} alt="icon" className='translate-y-11 translate-x-3 w-[20px]  ' />
                    <input type="text" placeholder='Search what you want...' className='px-10 border-2 w-full h-[67px] rounded-xl outline-none' onChange={(e) => setBrand(e.target.value)} />
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {tab === "new" && (
                        <div>
                            <h2 className="text1">New Products</h2>
                        </div>
                    )}
                    {tab === "used" && (
                        <div>
                            <h2 className="text1">Used Equipments</h2>
                        </div>
                    )}
                    {tab === "store" && (
                        <div>
                            <h2 className="text1">BAC Store</h2>
                        </div>
                    )}
                </div>
            </div>





            <div className="flex xl:flex-row flex-col gap-2 ">
                {/* Filter Sidebar */}
                <div className="w-full xl:w-1/4 h-fit bg-backgroundColor2 p-4 border rounded-2xl shadow-md">
                    <h2 className="text-lg font-bold mb-4">Search by Filters</h2>

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
                                        <span>{brand}</span>
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
                                        <span>{category}</span>
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
                                        <span>{capacity}</span>
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
                                    className="bg-backgroundColor9 mt-4 lg:max-w-[370px] lg:max-h-[471px] p-6 rounded-xl shadow-md hover:bg-backgroundColor1 hover:text-backgroundColor2 group hover:transition-colors hover:duration-500 hover:ease-in-out cursor-pointer"
                                >
                                    <img src={item.images} alt={item.productName} className="w-full h-auto mb-4" />
                                    <div className="flex items-center justify-between">
                                        <p className="heading5">{item.productName}</p>
                                        <div className="flex items-center gap-2">
                                            <span>12</span>
                                            <img src={item.icon} alt="icon" className="w-6" />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-1">
                                            Model No: <span className="font-bold">{item.modelno}</span>
                                        </p>
                                        <p className="text-1">
                                            Brands Name: <span className="font-bold">{item.brands}</span>
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center justify-center">
                                        <Button
                                            btnStyle="bg-backgroundColor1 w-full text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                                            title="Product Inquiry"
                                            onclick={() => { productDetail(item) }}
                                        />
                                    </div>
                                </div>
                            ))
                            :
                            Products.map((item, ind) => (
                                <div
                                    key={ind}
                                    className="bg-backgroundColor9 max-w-[370px] h-[471px] p-6 rounded-xl shadow-md hover:bg-backgroundColor1 hover:text-backgroundColor2 group hover:transition-colors hover:duration-500 hover:ease-in-out cursor-pointer"
                                >
                                    <img src={item.images} alt={item.productName} className="w-full h-auto mb-4" />
                                    <div className="flex items-center justify-between">
                                        <p className="heading5">{item.productName}</p>
                                        <div className="flex items-center gap-2">
                                            <span>12</span>
                                            <img src={item.icon} alt="icon" className="w-6" />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-1">
                                            Model No: <span className="font-bold">{item.modelno}</span>
                                        </p>
                                        <p className="text-1">
                                            Brands Name: <span className="font-bold">{item.brands}</span>
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center justify-center">
                                        <Button
                                            btnStyle="bg-backgroundColor1 w-full text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                                            title="Product Inquiry"
                                            onclick={() => { productDetail(item) }}
                                        />
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
