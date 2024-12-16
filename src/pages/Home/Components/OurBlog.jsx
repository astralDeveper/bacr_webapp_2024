import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function OurBlog(props) {
  const { title, subTitle, para, card, carouselCard } = props;

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
          const cards = document.querySelectorAll(".blogCard");
          cards.forEach((card) => observer.observe(card));
      
          return () => {
            cards.forEach((card) => observer.unobserve(card));
          };
        }, []);




  return (
    <section className="md:w-[80%] w-[98%] mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="outfit-font heading6 font-semibold mb-4 text-[#000]">
          {title}
        </h2>
        <p className="text1 text-[#000] font-light mx-auto md:w-[70%] mb-3 text-center">{para}</p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16 gap-2 md:grid-cols-2 sm:grid-cols-2 shrink-0 ">
        {card.map((item,ind) => (
          <div id={`blogCard-${ind}`} className={`grid md:grid-cols-2 blogCard ${
            visibleCards.includes(`blogCard-${ind}`) ? "visible" : "" } `}>
            <div
              className="sm:me-4 h-[190px]  mb-2 sm:mb-auto w-full rounded-md  relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div
                className={`absolute inset-0 bg-[#004671] transition-all duration-500 px-2 py-1 text-center rounded-md bottom-auto right-[8px] top-[8px] left-auto `}
              >
                <h6 className="text1 text-white leading-none">26</h6>
                <p className="text2 font-light text-white leading-none">
                  Nov
                </p>
              </div>
              <div
                className={`absolute inset-0 bg-[#ffa500] transition-all duration-500 px-2 py-1 rounded-full bottom-[8px] right-auto top-auto left-[8px] `}
              >
                <p className="text3 font-light text-white leading-none">
                  HVACR Maintenance
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 ">
              <h4 className="text2 text-[#000] font-medium leading-none ">
                {item.name}
              </h4>
              <p className="text2 text-[#7a7a7a] font-light py-2">
                {item.para}
              </p>
              <Link to={"/blog-detail"} className="w-full">
                <Button
                  btnStyle="bg-backgroundColor1 rounded-md text3 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                  title="Continue reading"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/blogs"} className="w-full flex items-center justify-center md:mt-6 mt-2  " >
        <Button
          btnStyle="bg-backgroundColor1 w-[250px] rounded-md text2 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold mt-2"
          title="See All Blogs"
        />
      </Link>
    </section>
  );
}
