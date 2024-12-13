import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";

export default function Meet(props) {
  const { name, des, title, para, profile } = props;

  return (
    <section className="sm:bg-[#F6F5F5] md:p-6 ">
      <div className="lg:w-[80%] md:w-[99%] w-[80%] mx-auto md:p-6 my-6 ">
        <div className="z-0 grid grid-cols-12 lg:gap-8 xl:gap-12 lg:mb-6 border p-4 bg-white md:p-8 w-full">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative lg:min-h-[550px] xl:min-h-[650px]">
            <div className="flex-col z-20 justify-center items-center text-center my-4 lg:my-auto">
              <img
                src={IMAGES.CEO}
                className="md:w-[400px] md:h-[400px] object-cover rounded-xl  w-[250px] lg:w-[600px] lg:h-[600px] xl:w-[500px] xl:h-[700px] md:mx-auto my-2"
              />

            </div>
            {/* <div
              className={`hidden xl:block absolute  z-0 bg-contain bg-no-repeat  transition-all duration-500 w-full h-full bottom-0 right-0 top-auto left-0 `}
              style={{
                backgroundImage: `url(${IMAGES.BGSHAPE})`,
              }}
            ></div> */}
          </div>
          <div className="col-span-12 lg:col-span-5 z-20 flex flex-col justify-center">
            <h6 className="font-semiBold text-[20px] text-dark text-[#004671]">
              {name}
            </h6>
            <p className="font-light text-[18px] text-dark text-[#004671]">
              {des}
            </p>
            <h2 className="md:my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#004671] leading-0">
              {title}
            </h2>
            {para.map((item) => (
              <p className="text-[12px] lg:text-[13px]  text-[#000] font-light mx-auto mb-3">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}