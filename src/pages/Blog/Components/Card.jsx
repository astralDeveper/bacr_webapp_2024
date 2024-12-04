import React from "react";
import { IMAGES } from "../../../utils/Images";

const Card = () => {
  const BlogCardData = [
    {
      name: "Name of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG1,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
    {
      name: "Second of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG3,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
    {
      name: "Third of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG2,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
    {
      name: "Fourth of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG1,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
    {
      name: "Fiveth of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG2,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
    {
      name: "Sixth of the Blog",
      para: `Trust us to deliver reliable solutions, exceptional service, and peace of
      mind for all your HVAC needs.`,
      button: "Continue reading",
      img: IMAGES.BLOG3,
      data: "26",
      month: "Nov",
      maint: "HVACR Maintenance",
    },
  ];

  return (
    <>
      {BlogCardData.map((item, idx) => (
        <div
          key={idx}
          className=" flex shadow-shadow2 font-poppins items-center rounded-lg gap-4 justify-between px-4 bg-white"
        >
          <div className="py-4 relative">
            <div className="bg-backgroundColor9 absolute right-2 top-6 text-white px-4 py-3 rounded-xl">
              <h1 className="text-center leading-3 text1">{item.data}</h1>
              <p className="text1">{item.month}</p>
            </div>
            <img className="w-[430px]" src={item.img} alt={IMAGES.BLOG1} />
            <div className="absolute left-2 bottom-6 bg-backgroundColor11 text-white rounded-full p-1 px-2">
              <h1 className="text2">{item.maint}</h1>
            </div>
          </div>
          <div className="py-6">
            <h1 className="heading6 text-text9 font-bold tracking-tight">
              {item.name}
            </h1>
            <p className="text2 text-text10 leading-5 py-2">{item.para}</p>
            <button className="text1 flex w-full justify-center bg-backgroundColor9 text-white rounded-md py-2 px-16">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
