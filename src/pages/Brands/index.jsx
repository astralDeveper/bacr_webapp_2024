import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { brandsCardData } from "../../utils/DummyData";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { IMAGES } from "../../utils/Images";
import { fetchProdBrands } from "../../api";

const Brands = () => {

    const [visibleCards, setVisibleCards] = useState([]);
    const [brands, setBrands] = useState([]);
    const fetchProjectsb = async () => {
        
    try {
        const response = await fetchProdBrands();
        setBrands(response);     
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
        fetchProjectsb(); // Fetch brands once
    }, []);
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
        const cards = document.querySelectorAll(".trustCard");
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, [brands]);



    return (
        <Container image heading="Our Valuable Brands" para="Providing high-quality HVACR products, services, and solutions 
backed by industry-leading partners.">
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  gap-y-8">
                    {brands.map((item, ind) => {
                        return (
                            <div id={`trustCard-${ind}`}
                                key={ind}
                                className={`trustCard rounded-3xl overflow-hidden shadow-shadow1 flex flex-col ${visibleCards.includes(`trustCard-${ind}`) ? "visible" : ""}`}
                            >
                                {/* button content start here */}
                                <div className="relative p-4">
                                    <div className="flex justify-between items-start py-2">
                                        <p className="heading5 w-[100%] mx-auto rounded-xl text-text9">
                                            {item.name}
                                        </p>
                                        {item.authorize===1 &&
                                        <img
                                            className="md:w-6 w-4"
                                            src={IMAGES.AUTH_TICK}
                                            alt={item.name}
                                        />
                                        }
                                    </div>
                                </div>
                                {/* button content start here */}

                                <div className="bg-BackgroundColor1 px-4">
                                    <div className=" bg-backgroundColor13 mt-2 flex items-center justify-center px-4 py-16 rounded-3xl">
                                        <img
                                            className=" h-[60px] object-contain"
                                            src={item.image}
                                            alt={item.name}
                                            draggable={false}
                                        />
                                    </div>
                                    <p className="text-text6 text-sm mt-4">{item.description}</p>
                                    <Link to={`/brand/${item._id}`} className="flex items-center justify-center w-full mb-4">
                                        <Button
                                            btnStyle="bg-backgroundColor1 rounded-md mt-4 w-full text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 lg:font-semibold "
                                            title={"Learn More"}
                                        />
                                    </Link>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default Brands;
