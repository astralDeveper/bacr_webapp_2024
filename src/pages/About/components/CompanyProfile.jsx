import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";

export default function CompanyProfile(props) {
  const { title, subTitle, para } = props;

  return (
    <section className="max-w-[80%] mx-auto p-6 my-6 ">
      <div className="flex flex-col justify-center items-center text-center mb-6">
        <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div>

        <h2 className="my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
          {title}
        </h2>
        {para.map((item) => (
          <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto mb-4">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
