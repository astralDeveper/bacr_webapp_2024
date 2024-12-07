import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";

export default function OurBlog(props) {
  const { title, subTitle, para, card, carouselCard } = props;

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 my-6 ">
      <div className="grid xl:grid-cols-2 gap-x-4 gap-y-8">
        <div className="flex flex-col items-start">
          <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div>

          <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
            {title}
          </h2>

          <p className="text-[15px] text-[#000] font-light mx-auto ">{para}</p>
          <Button
            btnStyle="bg-backgroundColor1 w-[250px] text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold mt-2"
            title="See All Blogs"
          />
        </div>
        {card.map((item) => (
          <div className="flex flex-col sm:flex-row bg-white rounded-md shadow-lg sm:p-5">
            <div
              className="sm:me-4 h-[190px] mb-2 sm:mb-auto sm:w-[380px] rounded-md  relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div
                className={`absolute inset-0 bg-[#004671] transition-all duration-500 px-2 py-1 text-center rounded-md bottom-auto right-[8px] top-[8px] left-auto `}
              >
                <h6 className="text-[18px] text-white leading-none">26</h6>
                <p className="text-[13px] font-light text-white leading-none">
                  Nov
                </p>
              </div>
              <div
                className={`absolute inset-0 bg-[#ffa500] transition-all duration-500 px-2 py-1 rounded-full bottom-[8px] right-auto top-auto left-[8px] `}
              >
                <p className="text-[13px] font-light text-white leading-none">
                  HVACR Maintenance
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-3 sm:p-auto">
              <h4 className="text-[18px] text-[#000] font-medium leading-none ">
                {item.name}
              </h4>
              <p className="text-[13px] text-[#7a7a7a] font-light py-2">
                {item.para}
              </p>
              <Button
                btnStyle="bg-backgroundColor1 w-[250px] text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                title="Product Inquiry"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
