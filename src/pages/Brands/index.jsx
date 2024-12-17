import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { brandsCardData } from "../../utils/DummyData";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Brands = () => {

    const [visibleCards, setVisibleCards] = useState([]);

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
    }, []);



    return (
        <Container image heading="Our Valuable Brands" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners.">
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  gap-y-8">
                    {brandsCardData.map((item, ind) => {
                        return (
                            <Link to={item.link} className="flex items-center justify-center w-full mb-4">
                                <div id={`trustCard-${ind}`}
                                    key={ind}
                                    className={`trustCard group  rounded-3xl overflow-hidden shadow-shadow1 flex flex-col ${visibleCards.includes(`trustCard-${ind}`) ? "visible" : ""}`}
                                >
                                    {/* button content start here */}
                                    <div className="relative p-4">
                                        <div className="flex justify-between items-start py-2">
                                            <p className="heading5 w-[100%] mx-auto rounded-xl text-text9">
                                                {item.name}
                                            </p>
                                            <img
                                                className="md:w-6 w-4"
                                                src={item.tickImg}
                                                alt={item.tickImg}
                                            />
                                        </div>
                                    </div>
                                    {/* button content start here */}

                                    <div className="bg-BackgroundColor1 px-4">
                                        <div className=" bg-backgroundColor13 mt-2 flex items-center justify-center px-4 py-16 rounded-3xl">
                                            <img
                                                className="h-[60px] object-contain group-transition group-duration-300 group-ease-in-out group-hover:scale-110 group-hover:duration-200 "
                                                src={item.image}
                                                alt={item.image}
                                                draggable={false}
                                            />
                                        </div>
                                        <p className="text-text6 text-sm mt-4">{item.description}</p>

                                        <Button
                                            btnStyle="bg-backgroundColor1 rounded-md mt-4 mb-4 w-full text1 text-backgroundColor6  lg:font-semibold "
                                            title={"Learn More"}
                                        />
                                    </div>

                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default Brands;
