import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
import profile from "../../../../public/profile/BacrProfile.pdf"

export default function Meet(props) {
  const { name, des, title, para, profile } = props;
  const onButtonClick = () => {
    const pdfUrl = "/profile/BacrProfile.pdf"; // Correct path from public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Company_Profile.pdf"; // Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const [visibleCards, setVisibleCards] = useState([]);
      const [visibleText, setVisibleText] = useState([]);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          if (entry.target.classList.contains("ltr")) {
                              setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                          }
                          if (entry.target.classList.contains("rtl")) {
                              setVisibleText((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                          }
                      }
                  });
              },
              {
                  threshold: 0.2, // Trigger when 20% of the element is visible
              }
          );
      
          const cards = document.querySelectorAll(".ltr");
          const texts = document.querySelectorAll(".rtl");
      
          cards.forEach((card) => observer.observe(card));
          texts.forEach((text) => observer.observe(text));
      
          return () => {
              cards.forEach((card) => observer.unobserve(card));
              texts.forEach((text) => observer.unobserve(text));
          };
      }, []);



  return (
    <section className="sm:bg-[#F6F5F5] md:p-6 ">
      <div className="lg:w-[80%] md:w-[99%] w-[80%] mx-auto md:p-6 my-6 ">
        <div className="z-0 grid grid-cols-12 lg:gap-8 xl:gap-12 lg:mb-6 border p-4 bg-white md:p-8 w-full">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative lg:min-h-[550px] xl:min-h-[650px]">
            <div className="flex-col z-20 justify-center items-center text-center my-4 lg:my-auto">
              <img
                id={`ltr`}
                src={IMAGES.CEO}
                className={`md:w-[400px] md:h-[400px] object-cover rounded-xl  w-[250px] lg:w-[600px] lg:h-[600px] xl:w-[500px] xl:h-[700px] md:mx-auto my-2 ltr ${visibleCards.includes(`ltr`) ? "visible" : ""} `}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 z-20 flex flex-col justify-center">
            <h6  className={`font-semiBold text1 text-dark text-[#004671] `}>
              {name}
            </h6>
            <p className="font-light text1 text-dark text-[#004671]">
              {des}
            </p>
            <h2 className=" outfit-font heading6 font-semibold text-[#004671] leading-0">
              {title}
            </h2>
            {para.map((item,ind) => (
              <p id={`rtl-${ind}`} className={`text2 w-full text-justify py-2  text-[#000] font-light mx-auto mb-3 rtl ${visibleText.includes(`rtl-${ind}`) ? "visible" : ""} `}>
                {item}
              </p>
            ))}
            <div className="bg-backgroundColor1 flex items-center  w-fit  md:pr-8 pr-2  rounded-lg "  >
              <Button onclick={onButtonClick} title={"Download Company Profile PDF"} btnStyle="text-backgroundColor2 text3 font-semibold" onClick={onButtonClick} />
              <img src={IMAGES.DOWNLOADPDF} alt="load" className="md:w-[24px] w-[18px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}