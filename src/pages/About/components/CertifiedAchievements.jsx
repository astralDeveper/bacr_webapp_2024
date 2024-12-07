import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
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
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
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
              depth: 500,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
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
