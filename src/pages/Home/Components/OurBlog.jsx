import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function OurBlog(props) {
  const { title, subTitle, para, card, carouselCard } = props;

  return (
    <section className="md:w-[70%] w-full mx-auto md:p-6 p-2 my-6 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="outfit-font text1 sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
          {title}
        </h2>
        <p className="text1 text-[#000] font-light mx-auto md:w-[50%] text-center">{para}</p>
      </div>
      <div className="grid xl:grid-cols-2 md:gap-x-4 md:gap-y-8 gap-4 mt-4">
        {card.map((item) => (
          <div className="flex flex-col sm:flex-row bg-white rounded-md shadow-lg sm:p-5">
            <div
              className="sm:me-4 h-[190px] mb-2 sm:mb-auto w-full rounded-md  relative bg-cover bg-center bg-no-repeat"
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
            <div className="flex flex-col justify-center p-3 ">
              <h4 className="text1 text-[#000] font-medium leading-none ">
                {item.name}
              </h4>
              <p className="text1 text-[#7a7a7a] font-light py-2">
                {item.para}
              </p>
              <Link to={"/blog-detail"} className="w-full">
                <Button
                  btnStyle="bg-backgroundColor1 w-[250px] rounded-md text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
                  title="Continue reading"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/blogs"} className="w-full flex items-center justify-center md:mt-4 mt-1" >
        <Button
          btnStyle="bg-backgroundColor1 w-[250px] rounded-md text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold mt-2"
          title="See All Blogs"
        />
      </Link>
    </section>
  );
}
