import React from "react";
import { Link } from "react-router-dom";

export default function OurPartner(props) {
  const { title, images } = props;

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 ">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
        {images.map((item) => (
          <div className="border rounded-lg py-4 text-center flex justify-center">
           <Link to={item.href}>
           <img
              src={item.img}
              alt="phone Icon"
              className="object-contain max-h-8"
            />
           </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
