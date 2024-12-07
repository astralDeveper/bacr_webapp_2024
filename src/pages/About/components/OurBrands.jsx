import React from "react";

export default function OurBrands(props) {
  const { title, images } = props;

  return (
    <section className="max-w-[80%] mx-auto px-6 py-8">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="py-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
        {images.map((item) => (
          <div className="border rounded-lg py-4 text-center flex justify-center">
            <img
              src={item}
              alt="phone Icon"
              className="object-contain w-[180px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
