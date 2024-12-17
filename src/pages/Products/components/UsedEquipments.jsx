import React, { useEffect, useState } from 'react'
import { Products } from '../../../utils/DummyData'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const UsedEquipments = ({ clickedIndex }) => {

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
        const cards = document.querySelectorAll(".pcard");
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);


    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {Products.map((item, ind) => (
                    <Link
                        to={{
                            pathname: `/detail/${item.id}`,
                        }}
                        className='w-full'
                    >
                        <div
                            id={`pcard-${ind}`}
                            key={ind}
                            className={`w-full pcard group  p-6 rounded-xl shadow-md ${clickedIndex === ind
                                ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                                : "bg-backgroundColor9"
                                } cursor-pointer ${visibleCards.includes(`pcard-${ind}`) ? "visible" : ""
                                } `}
                            onClick={() => handleClick(ind)}>
                            <img
                                src={item.images}
                                alt={item.productName}
                                className="w-[150px] h-auto mb-4 mx-auto group-transition group-duration-300 group-ease-in-out group-hover:scale-110 group-hover:duration-200"
                            />
                            <div className="flex items-center justify-between mt-8">
                                <p className="text1 font-semibold">{item.productName}</p>
                                <div className="flex items-center gap-2 text2">
                                    <span>12</span>
                                    <img src={clickedIndex === ind ? item.iconwhite : item.icon} alt="icon" className="w-4" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text2">
                                    Model No: <span className="font-bold text2">{item.modelno}</span>
                                </p>
                                <p className="text2">
                                    Brands Name: <span className="font-bold text2">{item.brands}</span>
                                </p>
                            </div>
                            <div className="md:mt-6 mt-4 flex items-center justify-center">


                                <Button
                                    btnStyle={`rounded-md w-full text2 ${clickedIndex === ind
                                        ? "bg-backgroundColor2 text-backgroundColor1"
                                        : "text-backgroundColor6 bg-backgroundColor1"
                                        } font-semibold`}
                                    title="Visit Store"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default UsedEquipments