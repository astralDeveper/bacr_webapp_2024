import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import { careerCardData } from '../../../utils/DummyData'
import { Link } from 'react-router-dom'

const CareerCard = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [visibleText, setVisibleText] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains("ltr")) {
                            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                        if (entry.target.classList.contains("rtl")) {
                            setVisibleText((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );

        const cards = document.querySelectorAll(".ltr");
        const texts = document.querySelectorAll(".rtl");

        cards.forEach((card) => observer.observe(card));
        texts.forEach((text) => observer.observe(text));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
            texts.forEach((text) => observer.unobserve(text));
        };
    }, []);
    return (

        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4' >
            {
                careerCardData.map((items, ind) => (
                    <Link to={items.link} >
                        <div id={`ltr-${ind}`} key={ind} className={`ltr ${visibleCards.includes(`ltr-${ind}`) ? "visible" : ""} lg:max-w-md p-6 bg-backgroundColor2 rounded-lg shadow-shadow1 lg:mb-6 mb-2`}>
                            <div className="text-text9 text1 mb-3">
                                {items.jobType}
                            </div>

                            <h5 className="mb-2 heading7 font-semibold text-text4">
                                {items.jobTitle}
                            </h5>
                            <p className="mb-3 text2 font-normal text-text7 ">
                                {items.jobDescription}
                            </p>
                            <Button title={"Apply Now"} btnStyle={"bg-backgroundColor1 text-backgroundColor2 rounded-lg mt-4 text2"} />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CareerCard