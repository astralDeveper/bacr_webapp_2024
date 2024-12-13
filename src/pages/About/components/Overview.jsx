import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../../../utils/Images";

export default function Overview(props) {
  const { title, subTitle, para, card, carouselCard } = props;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 my-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-8">
        <div className="py-0">
          {/* <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div> */}

          <h2 className="mt-2 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0">
            {title}
          </h2>
        </div>
        <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto ">
          {para}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8">
        <div className="relative w-full h-[276px]">
          <video
            ref={videoRef}
            src="https://www.shutterstock.com/shutterstock/videos/1083881155/preview/stock-footage-a-blonde-haired-business-man-is-talking-on-the-phone-while-sitting-on-a-teal-colored-bean-bag-and.webm"
            className="slider w-full h-full object-cover rounded-lg"
            controls
            poster={IMAGES.BACKGROUND}
            onPlay={() => setIsPlaying(true)} // Ensure state updates on manual play
            onPause={() => setIsPlaying(false)} // Ensure state updates on manual pause
          ></video>
          <div
            className="absolute inset-0 bg-transparent cursor-pointer"
            onClick={handleVideoClick}
          ></div>
        </div>

        <div className="flex gap-4 flex-col ">
          {card.map((item) => (
            <div className="flex flex-col sm:flex-row shadow-xl min-h-[130px] gap-8 2xl:gap-6 bg-[#004671] rounded-md p-5">
              <div className="min-w-[80px]">
                <div className=" w-[75px] h-[75px] p-4 rounded-full border flex justify-center items-center bg-[#fff] transition-all duration-500  relative bg-cover bg-center bg-no-repeat">
                  <img src={item.img} className="object-fill" />
                </div>
              </div>
              <div className="col-span-10 flex flex-col justify-center ">
                <h4 className="text-[18px] text-[#fff] font-medium leading-none ">
                  {item.name}
                </h4>
                <p className="text-[13px] text-[#fff] font-light pt-2">
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