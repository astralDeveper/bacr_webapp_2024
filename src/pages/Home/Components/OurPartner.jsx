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
    <section className="sm:max-w-[80%] sm:mx-auto p-6">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>
      <div className="flex items-center justify-center md:flex-row flex-col md:gap-6 gap-2 py-6">
        {images.map((item, ind) => (
          <Link
            key={ind}
            to={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center relative group"
          >
            <div
              id={`pimage-${ind}`}
              className={`border h-full min-h-[50px] lg:px-16 px-8 mx-auto flex items-center ${
                visibleCards.includes(`pimage-${ind}`) ? "visible" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.alt || "Image"}
                className="object-cover w-[60%] mx-auto bg-backgroundColor2 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-backgroundColor1  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Visit our website
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
