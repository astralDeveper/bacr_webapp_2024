import React from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";

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
          className="flex flex-col sm:flex-row shadow-shadow2 font-poppins items-center rounded-lg sm:gap-2 lg:gap-4 justify-between px-4 bg-backgroundColor2"
        >
          <div className="relative sm:w-1/2 w-full py-4">
            <div className="bg-backgroundColor1 absolute right-3 top-7 text-white px-6 py-3 rounded-xl sm:px-3 sm:py-1 xs:px-2 xs:py-1">
              <h1 className="text-center leading-8 text1 sm:text-sm xs:text-xs lg:text-[11px]">
                {item.data}
              </h1>
              <p className="text1">{item.month}</p>
            </div>

            <img
              className="sm:w-[430px] lg:w-full"
              src={item.img}
              alt={item.img}
            />
            <div className="absolute left-2 lg:left-3 bottom-7 bg-backgroundColor10 text-white rounded-full py-2  px-4  max-w-[154px] lg:max-w-[160px]">
              <h1 className="text3 whitespace-nowrap ">
                {item.maint}
              </h1>
            </div>
          </div>
          <div className="pb-1 flex flex-col xl:gap-6 sm:w-1/2 w-full">
            <h1 className="heading7 text-text9 font-bold">
              {item.name}
            </h1>
            <p className="text3 text-text10 py-1">
              {item.para}
            </p>
            <Button
              title={item.button}
              btnStyle={
                "text1 flex w-full justify-center bg-backgroundColor1 text-white rounded-md whitespace-nowrap"
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;  
