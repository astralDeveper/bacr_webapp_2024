import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../../../utils/Images";

export default function Overview(props) {
  const { title, subTitle, para, card, carouselCard } = props;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube video URL
  const videoId = "y34JhjD_N5w";
  const baseUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-[80%] mx-auto p-4 ">
      <div className="flex items-center justify-center flex-col overflow-hidden">
        <div className="py-0 overflow-hidden w-full">
          {/* <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div> */}

          <h2 className="mt-2 outfit-font heading5 font-semibold text-start text-[#000] leading-0 overflow-hidden animate-slide-ltr w-fit  ">
            {title}
          </h2>
        </div>
        <p className="text3 text-[#000] font-light mx-auto animate-slide-rtl overflow-hidden mt-3 ">
          {para}
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 gap-4 overflow-hidden mt-6">
      <div className="relative w-full h-[100%]">
      {/* YouTube iframe */}
      {isPlaying ? (
        <iframe
          src={baseUrl}
          className="w-full h-full object-cover rounded-lg"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Placeholder: Custom Play Button */}
          <div className="w-full h-full bg-black rounded-lg">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        text-white z-10"
              onClick={handleVideoClick}
            >
              <img
                src={IMAGES.PLAYBUTTON} // Replace with your play button image
                alt="play button"
                className="w-[90px] rounded-full shadow-lg shadow-bg-backgroudcolor1
                          hover:shadow-2xl hover:shadow-gray-700 transition-shadow duration-300"
              />
            </button>
          </div>
        </>
      )}
    </div>



        <div className="flex gap-4 flex-col ">
          {card.map((item, ind) => (
            <div
              style={{
                animation: `slideRtl 2s ease-out forwards`,
                animationDelay: `${ind * 0.2}s`,  // Delay based on index
                opacity: 0,  // Initially invisible
                transform: 'translateY(20px)',  // Initially positioned below
              }}
              className="flex flex-col sm:flex-row shadow-xl min-h-[130px] md:gap-4 gap-2 bg-[#004671] rounded-md p-5">
              <div className="">
                <div className=" w-[50px] h-[50px] p-4 rounded-full border flex justify-center items-center bg-[#fff] transition-all duration-500  relative bg-cover bg-center bg-no-repeat">
                  <img src={item.img} className="object-fill w-[20px] " />
                </div>
              </div>
              <div className="col-span-10 flex flex-col justify-center ">
                <h4 className="text2 text-[#fff] font-medium leading-none ">
                  {item.name}
                </h4>
                <p className="text3 text-[#fff] font-light pt-2">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}