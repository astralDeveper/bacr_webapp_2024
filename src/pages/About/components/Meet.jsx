import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";

export default function Meet(props) {
  const { name, des, title, para, profile } = props;

  return (
    <section className="sm:bg-[#F6F5F5] p-6">
      <div className="sm:max-w-[80%] sm:mx-auto p-6 my-6 ">
        <div className="z-0 grid grid-cols-12 relative gap-6 lg:gap-8 xl:gap-12 lg:mb-6 border bg-white">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative lg:min-h-[550px] xl:min-h-[650px]">
            <div className="flex-col z-20 justify-center items-center text-center my-4 lg:my-auto">
              <img
                src={IMAGES.CEO}
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto my-2"
              />
              <h6 className="font-semiBold text-[20px] text-dark xl:text-white">
                {name}
              </h6>
              <p className="font-light text-[18px] text-dark xl:text-white">
                {des}
              </p>
            </div>
            <div
              className={`hidden xl:block absolute  z-0 bg-contain bg-no-repeat  transition-all duration-500 w-full h-full bottom-0 right-0 top-auto left-0 `}
              style={{
                backgroundImage: `url(${IMAGES.BGSHAPE})`,
              }}
            ></div>
          </div>
          <div className="col-span-12 lg:col-span-6 z-20 flex flex-col justify-center">
            <h2 className="my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#004671] leading-0">
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