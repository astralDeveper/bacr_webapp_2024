import React from "react";
import { Link } from "react-router-dom";

export default function OurPartner(props) {
  const { title, images } = props;

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 ">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="flex items-center justify-center md:flex-row flex-col md:gap-0 gap-2 py-6">
        {images.map((item) => (
          <div className="border h-full min-h-[50px] lg:px-16 px-8 mx-auto flex items-center">
           <Link target="_blank" to={item.href} className="" >
           <img
              src={item.img}
              alt="phone Icon"
              className="object-cover w-[80px]"
            />
           </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
