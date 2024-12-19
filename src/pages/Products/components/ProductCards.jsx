import React, { useEffect, useState } from 'react';
import { IMAGES } from '../../../utils/Images';
import { Products } from '../../../utils/DummyData';
import Button from '../../../components/Button';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import TabBarProduct from '../../../components/TabBarProduct';
import NewProducts from './NewProducts';
import UsedEquipments from './UsedEquipments';
import SpareParts from './SpareParts';
import { fetchCategories, fetchProdBrands, fetchProducts } from '../../../api';

const ProductCards = () => {
    const [brandsOpen, setBrandsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [capacityOpen, setCapacityOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCapacities, setSelectedCapacities] = useState([]);

    const handleCapacityChange = (e, capacity) => {
        if (e.target.checked) {
            setSelectedCapacities((prev) => [...prev, capacity]);
        } else {
            setSelectedCapacities((prev) =>
                prev.filter((selectedCapacity) => selectedCapacity !== capacity)
            );
        }
    };
    
    const [clickedIndex, setClickedIndex] = useState(null); // To store the index of the clicked card

    const handleClick = (index) => {
        setClickedIndex(index); // Set the clicked card index
    };


    const [brand, setBrand] = useState('');

    const toggleSection = (section) => {
        setBrandsOpen(false);
        setCategoryOpen(false);
        setCapacityOpen(false);
        setPriceRangeOpen(false);
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

    // const filteredProducts = Products.filter(productItem => {
    //     const brandMatch = brand ? productItem.brands.toLowerCase().includes(brand.toLowerCase()) : true;
    //     return brandMatch;
    // });

    const [priceRangeOpen, setPriceRangeOpen] = useState(false);
    const [range, setRange] = useState({
        min: 5000,
        max: 999999, // Use a very high value to represent "unlimited"
        minValue: 5000,
        maxValue: 999999,
    });

    const toggleSections = (section) => {
        setBrandsOpen(false);
        setCategoryOpen(false);
        setCapacityOpen(false);
        setPriceRangeOpen(false);
        if (section === 'priceRange') setPriceRangeOpen(!priceRangeOpen);
    };

    const updateValues = (min, max) => {
        setRange({ min, max, minValue: min, maxValue: max });
    };

    const setMinValue = (value) => {
        const intValue = parseInt(value);
        if (intValue > range.maxValue) return;
        setRange((prev) => ({ ...prev, minValue: intValue }));
    };

    const setMaxValue = (value) => {
        const intValue = parseInt(value);
        if (intValue < range.minValue) return;
        setRange((prev) => ({ ...prev, maxValue: intValue }));
    };

    const [tab, setTab] = useState("new");


    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(value) // Adjust based on the product field
        );
        setFilteredProducts(filtered);
      };

    const fetchProductsb = async () => {
    try {
        const response = await fetchProducts();
        setFilteredProducts(response.products);
        setProducts(response.products);

        const responseb = await fetchProdBrands();
        setBrands(responseb);
        const responsec = await fetchCategories();
        setCategories(responsec);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
      fetchProductsb();
  }, []);
  
const handleCategoryChange = (e, category) => {
    if (e.target.checked) {
        setSelectedCategories((prev) => [...prev, category]);
    } else {
        setSelectedCategories((prev) =>
            prev.filter((selectedCategory) => selectedCategory !== category)
        );
    }
};
const handleBrandSelect = (brandName) => {
    const updatedSelectedBrands = selectedBrands.includes(brandName)
      ? selectedBrands.filter((brand) => brand !== brandName)
      : [...selectedBrands, brandName];

    setSelectedBrands(updatedSelectedBrands);
    filterProducts(searchTerm, updatedSelectedBrands); // Pass current search term and updated selected brands
  };
const filterProducts = (searchTerm, selectedBrands) => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product?.brandId?.name)
      );
    }

    setFilteredProducts(filtered);
  };
  const filterByCapacity = () => {
    let filtered = products;

    if (selectedCapacities.length > 0) {
        filtered = filtered.filter((product) =>
            selectedCapacities.some(
                (range) => product.capacity >= range.min && product.capacity <= range.max
            )
        );
    }
    setFilteredProducts(filtered);
};

const filterByCategory = () => {

    
    let filtered = products;

    // Search term filter
    if (searchTerm) {
        filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Category filter
    if (selectedCategories.length >0) {
        
        filtered = filtered.filter((product) =>
            selectedCategories.some((category) =>
                category.toLowerCase() === product?.categoryId?.name.toLowerCase()
            )
        );
    }
    
    setFilteredProducts(filtered);

};

useEffect(() => {

    filterByCategory();
    const type = searchParams.get("type");
    
    if (type) {
      setTab(type);
    }
  }, [searchParams, selectedCategories, products]);
useEffect(() => {

    filterByCapacity();
    const type = searchParams.get("type");
    
    if (type) {
      setTab(type);
    }
  }, [searchParams,selectedCapacities, products]);
  const capacityRanges = [
    { label: "5 to 10 Tons", min: 5000, max: 10000 },
    { label: "10 to 20 Tons", min: 10000, max: 20000 },
    { label: "Above 20 Tons", min: 20000, max: Infinity },
];

    return (

        <div className='' >
            <div className='mt-8' >
                <TabBarProduct  handleTabChange={handleTabChange}
        product
        tab={tab}
        tabtext1={"New Products"}
        tabtext2={"Used Equipments"}
        tabtext3={"Spare Parts"}
        search
        setBrand={handleSearch} />
            </div>
            <div className="flex md:flex-row flex-col mt-4 gap-4  ">
                {/* Filter Sidebar */}
                <div className="xl:w-1/6 md:w-1/6 h-fit bg-backgroundColor2 p-4 border rounded-2xl shadow-md">
                    <h2 className="text2 font-bold mb-4">Filters</h2>

                    {/* Brands Section */}
                    <div>
                        <button
                            onClick={() => toggleSection('brands')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text2 font-bold">Brands</span>
                            <span>{brandsOpen ? '-' : '+'}</span>
                        </button>
                        {brandsOpen && (
                            <div className="ml-4 space-y-2">
                                {brands.map((brand, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8 cursor-pointer"
                                        onChange={() => handleBrandSelect(brand.name)}
                                        checked={selectedBrands.includes(brand.name)}
                                        />
                                        <span className='text3'>{brand.name}</span>
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
                            <span className="text2 font-bold">Category</span>
                            <span>{categoryOpen ? '-' : '+'}</span>
                        </button>
                        {categoryOpen && (
                            <div className="ml-4 space-y-2">
                                {categories.map((category, index) => (
                                    <label key={index} className="flex items-center space-x-2" >
                                        <input type="checkbox" onChange={(e) => handleCategoryChange(e, category.name)} className="accent-backgroundColor8" />
                                        <span className='text3 '>{category.name}</span>
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
                            <span className="text2 font-bold">Capacity</span>
                            <span>{capacityOpen ? '-' : '+'}</span>
                        </button>
                        {capacityOpen && (
                            <div className="ml-4 space-y-2">
                                {capacityRanges.map((capacity, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input type="checkbox" className="accent-backgroundColor8 cursor-pointer" onChange={(e) => handleCapacityChange(e, capacity)}
 />
                                        <span className='text3 '>{capacity.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Range Section */}
                    {/* <div className="mt-4">
                        <button
                            onClick={() => toggleSections('priceRange')}
                            className="w-full text-left flex justify-between items-center mb-2"
                        >
                            <span className="text2 font-bold">Price Range</span>
                            <span>{priceRangeOpen ? '-' : '+'}</span>
                        </button>
                        {priceRangeOpen && (
                            <div className="ml-4 space-y-4"> */}
                                {/* Dropdown for predefined ranges */}
                                {/* <select
                                    className="w-full border rounded-lg p-2"
                                    onChange={(e) => updateValues(...e.target.value.split('-').map(v => v === '+' ? 20000 : parseInt(v)))}
                                >
                                    <option value="1000-5000">$1,000 - $5,000</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-20000">$10,000 - $20,000</option>
                                    <option value="20000+">$20,000+</option>
                                </select> */}

                                {/* Range slider */}
                                {/* <div className="range-slider flex items-center flex-col gap-4 ">
                                    <input
                                        type="range"
                                        id="minRange"
                                        min={range.min}
                                        max={range.max}
                                        value={range.minValue}
                                        onChange={(e) => setMinValue(e.target.value)}
                                        className="w-full accent-backgroundColor5"
                                    />
                                    <input
                                        type="range"
                                        id="maxRange"
                                        min={range.min}
                                        max={range.max}
                                        value={range.maxValue}
                                        onChange={(e) => setMaxValue(e.target.value)}
                                        className="w-full accent-backgroundColor5"
                                    />
                                </div> */}

                                {/* Display min and max values */}
                                {/* <div className="flex gap-2 flex-col">
                                    <span className='border p-2 text2 rounded-lg'>{`RS.${range.minValue?.toLocaleString()}`}</span>
                                    <span className='border p-2 text2 rounded-lg'>{`RS.${range.maxValue?.toLocaleString()}`}</span>
                                </div>
                            </div>
                        )}
                    </div> */}
                </div>
                {/* Product Cards */}
                <div className="">
                    {
                        tab == "new" && (
                            <NewProducts products={filteredProducts} clickedIndex={clickedIndex} />
                        )
                    }
                    {
                        tab == "used" && (
                            <UsedEquipments products={filteredProducts} clickedIndex={clickedIndex} />
                        )
                    }
                    {
                        tab == "spareParts" && (
                            <SpareParts products={filteredProducts} clickedIndex={clickedIndex} />
                        )
                    }
                </div>

            </div>
        </div>

    );
};

export default ProductCards;
