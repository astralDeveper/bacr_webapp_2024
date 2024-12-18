import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { BlogCardData } from "../../../utils/DummyData";

const Card = () => {

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
    <>
      {BlogCardData.map((item, idx) => (
        <Link to={"/blog-detail"} className="w-full">
          <div
            key={idx}
            id={`blogCard-${idx}`}
            className={`grid lg:grid-cols-2 p-4 rounded-lg shadow-shadow2 blogCard bg-backgroundColor2 ${visibleCards.includes(`blogCard-${idx}`) ? "visible" : ""}  `}
          >
            <div
              className="sm:me-4 h-[190px]  lg:h-full mb-2 sm:mb-auto w-full rounded-md  relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div
                className={`absolute inset-0 bg-[#004671] transition-all duration-500 px-2 py-1 text-center rounded-md bottom-auto right-[8px] top-[8px] left-auto `}
              >
                <h6 className="text1 text-white leading-none">26</h6>
                <p className="text2 font-light text-white leading-none">Nov</p>
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
              <h4 className="headingFont6 text-[#000] font-semibold">
                {item.name}
              </h4>
              <p className="text2 text-[#7a7a7a] font-light py-2 textFont3">
                {item.para}
              </p>

              <Button
                btnStyle="bg-backgroundColor1 rounded-md text3 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                title="Continue reading"
              />
            </div>
          </div>
        </Link>
      ))}
      {/* {BlogCardData.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row shadow-shadow2 font-poppins items-center rounded-lg sm:gap-2 lg:gap-4 justify-between px-4 bg-backgroundColor2"
        >
          <div className="relative w-full py-4">
            <div className="bg-backgroundColor1 absolute right-3 top-7 text-white px-6 py-3 rounded-xl sm:px-3 sm:py-1 xs:px-2 xs:py-1">
              <h6 className="text-center leading-8 text1 sm:text-sm xs:text-xs lg:text-[11px]">
                {item.data}
              </h6>
              <p className="text1">{item.month}</p>
            </div>

            <img className=" lg:w-full" src={item.img} alt={item.img} />
            <div className="absolute left-2 lg:left-3 bottom-7 bg-backgroundColor10 text-white rounded-full py-2  px-4  max-w-[154px] lg:max-w-[160px]">
              <h1 className="text3 whitespace-nowrap ">{item.maint}</h1>
            </div>
          </div>
          <div className="pb-1 flex flex-col xl:gap-6 w-full">
            <h4 className="headingFont6 text-text9 font-semibold">
              {item.name}
            </h4>
            <p className="textFont3 text-text10 py-1">{item.para}</p>
            <Link to={"/blog-detail"}>
              <Button
                title={item.button}
                btnStyle={
                  "text1 flex w-[90%] justify-center bg-backgroundColor1 text-white rounded-md whitespace-nowrap"
                }
              />
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default Card;