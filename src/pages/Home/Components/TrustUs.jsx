import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import TrustCarousel from "./TrustCarousel";

export default function TrustUs(props) {
  const { title, subTitle, para, card, carouselCard } = props;

  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === carouselCard.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []);

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
    <section className="sm:max-w-[80%] sm:mx-auto     ">
      <div className="bg-[#004671] pb-[200px]">
      <h2 className="outfit-font heading5 font-bold text-center text-[#fff] py-6">
        {title}
      </h2>
      <p className="text-center text2 text-[#fff] font-light w-8/12 mx-auto">
        {para}
      </p>

      <div className="p-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-4  ">
        {card.map((item, ind) => (
          <div id={`trustCard-${ind}`} className={`trustCard flex flex-col ${visibleCards.includes(`trustCard-${ind}`) ? "visible" : ""}`} key={item.name}>
            <div className="">
              <img src={item.img} alt="phone Icon" className="md:h-[50px] h-[40px]" />
            </div>
            <h4 className="text2 text-[#fff] font-semibold py-2">
              {item.name}
            </h4>
            <p className="text3 text-[#fff] font-light ">{item.para}</p>
          </div>
        ))}
      </div>
      </div>

      <div className=" md:p-8 p-2 mx-auto -translate-y-48  ">
        <div
          id=""
          className=""
        >

          <TrustCarousel />


        </div>
      </div>

    </section>
  );
}
