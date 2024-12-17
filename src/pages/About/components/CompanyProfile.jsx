import React, { useState, useEffect } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
export default function CompanyProfile(props) {
  const { title, subTitle, CompanyProfileData } = props;


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
    const cards = document.querySelectorAll(".profile");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);


  const onButtonClick = () => {
    const pdfUrl = "/profile/BacrProfile.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Company_Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };










  return (
    <section className="max-w-[80%] mx-auto ">
      <div className="flex flex-col justify-center items-center text- mb-6">
        {/* <div className="text-sm text-[#ee8c33] font-light">{subTitle}</div> */}

        <h2 className="my-4 outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-semibold text-[#000] leading-0  ">
          {title}
        </h2>
        {CompanyProfileData.map((item, ind) => (
          <div className={``}>
            <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2">
              {item.ProfileDes}
            </p>
            <p className="text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2">{item.head}</p>
            {item.bullets.map((items) => (
              <ul id={`profile-${ind}`} className={`text-[13px] lg:text-[14px] text-[#000] font-light mx-auto md:mb-4 mb-2 profile  ${visibleCards.includes(`profile-${ind}`) ? "visible" : ""}  `}>
                <li className="list-disc">{items}</li>
              </ul>
            ))}
          </div>
        ))}
        <div className="bg-backgroundColor1 flex items-center    md:pr-8 pr-2  rounded-lg "  >
          <Button onclick={onButtonClick} title={"Download Company Profile PDF"} btnStyle="text-backgroundColor2 text3 font-semibold" onClick={onButtonClick} />
          {/* <Button onclick={onButtonClick} title={"Download Company Profile PDF"} btnStyle="text-backgroundColor2 text3 font-semibold" onClick={onButtonClick} /> */}
          <img src={IMAGES.DOWNLOADPDF} alt="load" className="md:w-[24px] w-[18px]" />
        </div>
      </div>
    </section>
  );
}
