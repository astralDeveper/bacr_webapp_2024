import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { IMAGES } from '../../../utils/Images';



const CertifiedAchievements = () => {
  const images = [
    IMAGES.CERTIFICATE1,
    IMAGES.CERTIFICATE2,
    IMAGES.CERTIFICATE3,
    IMAGES.CERTIFICATE4,
    IMAGES.CERTIFICATE5,
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative">

            {/* Custom Navigation Buttons with Images */}
            <button
              className="swiper-custom-prev absolute left-0 top-1/2 transform -translate-y-12 z-10 bg-backgroundColor1 p-2 rounded-full "
            >
              <img
                src={IMAGES.PREV}
                alt="Previous"
                className="w-6 h-6 object-contain"
              />
            </button>
            <button
              className="swiper-custom-next absolute right-0 top-1/2 transform -translate-y-12 z-10 bg-backgroundColor1 p-2 rounded-full"
            >
              <img
                src={IMAGES.NEXT}
                alt="Next"
                className="w-6 h-6 object-contain"
              />
            </button>
         
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: -300,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 400,
              // modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            navigation={{
              nextEl: ".swiper-custom-next",
              prevEl: ".swiper-custom-prev",
            }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="w-[352px] md:h-[429px] h-full mx-auto rounded-3xl object-contain shadow-shadow2 md:py-6 py-4 bg-backgroundColor2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertifiedAchievements;