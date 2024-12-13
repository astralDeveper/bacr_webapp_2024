import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import { div } from "motion/react-client";

export default function CompanyProfile(props) {
  const { title, subTitle, CompanyProfileData } = props;

  return (
    <section className="max-w-[80%] mx-auto p-6 my-6 ">
      <div className="flex flex-col justify-center items-center text- mb-6">
        {/* <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div> */}

        <h2 className="my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
          {title}
        </h2>
        {CompanyProfileData.map((item) => (
          <div>
            <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2">
              {item.ProfileDes}
            </p>
            <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2">{item.head}</p>
            {item.bullets.map((items)=>(
              <ul className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2">
                <li className="list-disc">{items}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
