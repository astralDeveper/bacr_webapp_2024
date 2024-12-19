import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../../../utils/Images";

export default function Overview(props) {
  const { title, subTitle, para, card, carouselCard } = props;
  const [isPlaying, setIsPlaying] = useState(false); // Video state: playing or paused
  const videoRef = useRef(null); // Reference to video element

  // Handle Play/Pause Toggle
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause video
        setIsPlaying(false);
      } else {
        videoRef.current.play(); // Play video
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="w-[80%] mx-auto py-4 ">
      <div className="flex items-center justify-center flex-col overflow-hidden">
        <div className="py-0 overflow-hidden w-full">
          {/* <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div> */}

          <h2 className="mt-2 outfit-font heading5 font-semibold text-start text-[#000] leading-0 overflow-hidden animate-slide-ltr w-fit  ">
            {title}
          </h2>
        </div>
        <p className="text3 text-[#000] font-light mx-auto animate-slide-rtl text-justify overflow-hidden mt-3 ">
          {para}
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 gap-4 overflow-hidden mt-6 ">
  {/* Left Video Section */}
  <div className="relative w-full h-auto flex-1">
    <video
      ref={videoRef}
      poster="/images/Background.png"
      src="/images/brothers.mp4" // Your video file
      className="w-full h-full object-cover rounded-lg"
      onPause={() => setIsPlaying(false)} // Pause event
      onPlay={() => setIsPlaying(true)} // Play event
    ></video>

    {/* Play Button - Show only when video is paused */}
    {!isPlaying && (
      <button
        onClick={handleVideoClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none"
      >
        <img
          src="/images/playbutton.png" // Custom Play Button Image
          alt="Play"
          className="w-[90px] rounded-full shadow-xl shadow-backgroundColor1 animate-pulse hover:scale-110 transition-transform duration-300"
        />
      </button>
    )}

    {/* Invisible Overlay to Pause Video */}
    {isPlaying && (
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleVideoClick} // Pause video when overlay is clicked
      ></div>
    )}
  </div>

  {/* Right Cards Section */}
  <div className="flex flex-col justify-between gap-4 ">
    {card.map((item, ind) => (
      <div
        key={ind}
        style={{
          animation: `slideRtl 2s ease-out forwards`,
          animationDelay: `${ind * 0.2}s`,
          opacity: 0,
          transform: 'translateY(20px)',
        }}
        className="flex flex-col sm:flex-row shadow-xl bg-[#004671] rounded-md p-5 h-[48%]" // Adjust height
      >
        <div className="size-5 p-4 rounded-full  bg-white transition-all duration-500">
          <img src={item.img} className=" " />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h4 className="text2 text-[#fff] font-medium leading-none">
            {item.name}
          </h4>
          <p className="text3 text-[#fff] font-light pt-4">
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