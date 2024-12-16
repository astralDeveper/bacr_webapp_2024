import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OurPartner(props) {
  const { title, images } = props;

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.id]); // Mark card as visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 50% of the card is visible
      }
    );

    // Observe each card element
    const cards = document.querySelectorAll(".pimage");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 ">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="flex items-center justify-center md:flex-row flex-col md:gap-6 gap-2 py-6">
      {images.map((item, ind) => (
  <Link target="_blank" to={item.href} key={ind}>
    <div
      id={`pimage-${ind}`}
      className={`border h-full min-h-[50px] lg:px-16 px-8  group rounded-md hover:bg-backgroundColor1 hover:transition-colors duration-200 delay-75 ease-linear mx-auto flex items-center relative ${visibleCards.includes(`pimage-${ind}`) ? "visible" : ""}`}
    >
      {/* Image */}
      <img
        src={item.img}
        alt="phone Icon"
        className="object-cover w-[60%] mx-auto bg-backgroundColor2 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
        Visit our website
      </div>
    </div>
  </Link>
))}


      </div>
    </section>
  );
}
