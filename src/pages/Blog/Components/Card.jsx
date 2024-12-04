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
          className="flex flex-col sm:flex-row shadow-shadow2 font-poppins items-center rounded-lg gap-4 justify-between px-4 bg-backgroundColor2"
        >
          <div className="relative sm:w-1/2 w-full py-4">
            <div className="bg-backgroundColor1 absolute right-2 top-6 text-white px-6 py-3 rounded-xl sm:px-3 sm:py-2 xs:px-2 xs:py-1">
              <h1 className="text-center leading-3 text1 sm:text-sm xs:text-xs">
                {item.data}
              </h1>
              <p className="text1 sm:text-sm xs:text-xs">{item.month}</p>
            </div>

            <img
              className="w-full sm:w-[430px]"
              src={item.img}
              alt={item.img}
            />
            <div className="absolute left-2 bottom-6 bg-backgroundColor10 text-white rounded-full p-1 px-2 max-w-[154px]">
              <h1 className="text2 whitespace-nowrap text-sm">{item.maint}</h1>
            </div>
          </div>
          <div className="py-2   sm:w-1/2 w-full">
            <h1 className="heading7 text-text9 font-bold tracking-tight">
              {item.name}
            </h1>
            <p className="text3 text-text10 leading-4 py-2  ">{item.para}</p>
            <button className="text1 flex w-full justify-center bg-backgroundColor1 text-white rounded-md py-2 px-16 whitespace-nowrap">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
