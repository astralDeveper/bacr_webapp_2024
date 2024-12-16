import React, { useEffect, useState } from "react";

export default function OurBrands(props) {
  const { title, images } = props;
  const [visibleCards, setVisibleCards] = useState([]);

      useEffect(() => {
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          setVisibleCards((prev) => [...prev, entry.target.id]); 
                      }
                  });
              },
              {
                  threshold: 0.2,
              }
          );
  
          // Observe each card element
          const cards = document.querySelectorAll(".pcard");
          cards.forEach((card) => observer.observe(card));
  
          return () => {
              cards.forEach((card) => observer.unobserve(card));
          };
      }, []);

  return (
    <section className="max-w-[80%] mx-auto px-6 py-8">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="py-5 grid sm:grid-cols-2 lg:grid-cols-3 md:gap-y-8 gap-y-4 gap-x-4 md:gap-x-6">
        {images.map((item , ind) => (
          <div id={`pcard`} className={`border rounded-lg py-4 text-center flex justify-center pcard ${visibleCards.includes(`pcard`) ? "visible" : ""
                            } `}>
            <img
              src={item}
              alt="phone Icon"
              className="object-contain md:w-[140px] w-[80px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
