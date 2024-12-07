import React from "react";
import Button from "../../../components/Button";

export default function OurProducts(props) {
  const { title, card, subTitle } = props;

  const productDetail = (item) => {
    console.log(item);
    navigate(`/productsDetail`);
  };

  return (
    <section className="sm:max-w-[80%] sm:mx-auto px-6 py-12">
      <div className="flex flex-col justify-center items-center text-center mb-6">
        <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div>
        <h2 className="my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
        {card.map((item, ind) => {
          return (
            <div
              key={ind}
              className="rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative">
                <img
                  className="w-full h-[224px] rounded-t-2xl object-cover"
                  src={item.image}
                  alt={item.image}
                  draggable={false}
                />

                {/* centered Text */}
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading6">
                  {item.text}
                </p>

                {/* Logo positioned half on the image and half below it */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center bg-white rounded-xl shadow-black shadow-xs">
                  <img
                    className="rounded-lg p-2 object-contain w-[70px] h-[70px]"
                    src={item.logo}
                    alt={item.logo}
                    draggable={false}
                  />
                </div>
              </div>

              <div className="p-3 bg-BackgroundColor1 pt-14">
                <p className="text-text6 text-sm text-center">
                  {item.description}
                </p>
                <div className="mt-10 flex items-center justify-center  rounded-md">
                  <Button
                    btnStyle="bg-backgroundColor1 w-full rounded-md text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 lg:font-semibold "
                    title={"Learn More"}
                    onclick={productDetail}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <Button
          onclick={productDetail}
          btnStyle="bg-backgroundColor1 w-[250px] text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
          title={"See All Services"}
        />
      </div>
    </section>
  );
}
