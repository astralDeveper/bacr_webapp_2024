import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import TrustCarousel from "./TrustCarousel";

export default function TrustUs(props) {
  const { title, subTitle, para, card, carouselCard } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselCard.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="sm:max-w-[70%] sm:mx-auto p-6 my-6 bg-[#004671] xl:mb-[250px]">
      {/* <div className="w-[150px] px-2 py-2 mx-auto text-center rounded-full bg-white text-[#0A2540] mt-6">
        {subTitle}
      </div> */}

      <h2 className="outfit-font text-[18px] sm:text-[20px] lg:text-[38px] font-bold text-center text-[#fff] my-3">
        {title}
      </h2>

      <p className="text-center text-[15px] text-[#fff] font-light w-8/12 mx-auto">
        {para}
      </p>

      <div className="p-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {card.map((item) => (
          <div className="flex flex-col" key={item.name}>
            <div className="">
              <img src={item.img} alt="phone Icon" className="h-[60px]" />
            </div>
            <h4 className="text-[18px] text-[#fff] font-semibold py-2">
              {item.name}
            </h4>
            <p className="text-[13px] text-[#fff] font-light ">{item.para}</p>
          </div>
        ))}
      </div>

      <div className="py-2 md:w-[90%] mx-auto xl:mb-[-150px]">
        <div
          id=""
          className=""
        >
          {/* <div
            className="flex transition-all duration-500 ease-in-out "
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {carouselCard.map((card, index) => (
              <div className="w-full flex-shrink-0 h-full" key={index}>
                <div className="grid grid-cols-12 gap-2 sm:gap-8 min-h-[350px] m-4">
                  <div
                    className={`col-span-12 lg:col-span-8 shadow-lg py-8 px-6 relative bg-white rounded-md flex items-center flex-col `}
                  >
                    <div className="relative w-full md:px-12 py-6 z-10">
                      <div
                        className={`hidden sm:block absolute inset-0 bg-cover bg-center transition-all duration-500 w-[35px] h-[35px] rounded-full bottom-auto right-auto top-0 left-0 `}
                        style={{
                          backgroundImage: `url(${IMAGES.PARAARROW})`,
                        }}
                      ></div>

                      <p className="text-[14px] text-[#000] font-light ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus sit amet neque vel metus faucibus varius.
                        Mauris pulvinar magna at nisi elementum, vitae fringilla
                        nisi semper. Aenean blandit quis nulla ut interdum. Nam
                        non ante ac leo elementum finibus. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. vitae fringilla nisi
                        semper. Aenean blandit quis nulla ut interdum. Nam non
                        ante ac leo elementum finibus a at nisi elementum leo
                        elementum finibus.
                      </p>

                      <div
                        className="hidden sm:block absolute inset-0 bg-cover bg-center transition-all duration-500 w-[35px] h-[35px] rounded-full top-auto left-auto bottom-0 right-0 rotate-180"
                        style={{
                          backgroundImage: `url(${IMAGES.PARAARROW})`,
                        }}
                      ></div>
                    </div>

                    <div className="flex w-full px-12 py-6 z-10 items-center">
                      <img
                        src={IMAGES.DINESHSINGH}
                        className="w-[45px] h-[45px] me-3"
                      />
                      <div className="my-auto">
                        <h6 className="font-semiBold text-[16px] leading-none">
                          Dinesh singh
                        </h6>
                        <p className="font-light text-[14px]">Mumbai, India</p>
                      </div>
                    </div>
                    <div
                      className={`hidden lg:block absolute z-0 inset-0 bg-contain bg-no-repeat bg-center transition-all duration-500 w-full h-full bottom-0 right-auto top-0 left-auto `}
                      style={{
                        backgroundImage: `url(${IMAGES.CIRCLESHAPE})`,
                      }}
                    ></div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 shadow-lg min-h-[350px] text-center rounded-md flex items-center justify-center bg-white">
                    <div className="flex-col justify-center items-center p-3">
                      <img
                        src={IMAGES.DINESHSINGH}
                        className="w-[145px] h-[145px] mx-auto my-2"
                      />
                      <h6 className="font-semiBold text-[16px] ">
                        Dinesh singh
                      </h6>
                      <p className="font-light text-[14px]">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <TrustCarousel/>


        </div>
      </div>
    </section>
  );
}
