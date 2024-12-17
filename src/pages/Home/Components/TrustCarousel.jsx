import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Use this import for newer versions of Swiper
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { IMAGES } from "../../../utils/Images";
import { TrustUsCarouselCardData } from "../../../utils/DummyData";

const TrustCarousel = () => {
  const totalStars = 5;

  const getStars = (rating) => {
    return Array.from({ length: totalStars }, (_, index) => index < rating);
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // const updateItemsPerSlide = () => {
  //   const width = window.innerWidth;

  //   if (width <= 550) {
  //     setItemsPerSlide(1); // For very small screens like mobile devices
  //   } else if (width <= 768) {
  //     setItemsPerSlide(2); // For small tablets or large phones
  //   } else if (width <= 1240) {
  //     setItemsPerSlide(2); // For tablets and smaller desktops
  //   } else if (width <= 1880) {
  //     setItemsPerSlide(3); // For larger desktop screens
  //   } else {
  //     setItemsPerSlide(3); // For very large desktop screens
  //   }
  // };

  // useEffect(() => {
  //   updateItemsPerSlide();

  //   const handleResize = () => {
  //     updateItemsPerSlide();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#004671",
        "--swiper-pagination-bullet-size": "14px", // Bullet size
        "--swiper-pagination-bullet-horizontal-gap": "4px", // Bullet gap
      }}
      slidesPerView={itemsPerSlide}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10} // Reduced gap between cards
      pagination={{
        clickable: true,
        el: ".swiper-custom-pagination",
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        100: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 3 },
      }}
    >
      {TrustUsCarouselCardData.map((review, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex flex-col items-center justify-center p-6 bg-backgroundColor14 rounded-lg shadow-md w-full max-w-[500px] mx-auto">
            <img
              src={review.avatar}
              alt="Reviewer"
              className="w-14 h-14 object-cover rounded-full border-2 border-gray-300 md:mb-3 mb-2"
            />
            <h3 className="text1 font-semibold md:mb-2 mb-1 text-center">{review.title}</h3>
            <p className="text2 text-gray-500 md:mb-3 mb:1 text-center">{review.des}</p>
            <div className="flex justify-center gap-1 py-3">
              {getStars(review.stars).map((isFilled, starIndex) => (
                <img
                  key={starIndex}
                  src={IMAGES.STAR}
                  alt="Star"
                  className={`md:w-5 w-4 h-4 md:h-5 ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-custom-pagination flex items-center justify-center mt-6 gap-4" />
    </Swiper>
  );
};

export default TrustCarousel;
