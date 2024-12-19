import React from "react";
import { comfortCooling, turnkeyProjects } from "../../../utils/DummyData";
import { IMAGES } from "../../../utils/Images";
import BookingForm from "../../Home/Components/BookingForm";

const TurnkeyProjects = () => {
  return (
    <div className="w-full py-14">
      <div className="relative max-w-[80%] mx-auto">
        {/* <img src={IMAGES.SERVICEFOUR} alt={IMAGES.SERVICEFOUR} /> */}
        <div className="py-8">
          <h1 className="heading1 py-2">
          Seamless Turnkey Solutions: From Design to Commissioning

          </h1>
          <p className="text1 text-text7">
          We understand the pivotal role that HVACR chillers and equipment play in maintaining optimal comfort and efficiency in commercial and industrial settings. With our comprehensive expertise and dedication to excellence, we offer turnkey solutions tailored to meet the diverse needs of our clients.

          </p>
        </div>
        <div className="py-6">
          <h1 className="heading1 py-2">Our Expertise</h1>
          <p className="text1 text-text7 text-justify">
          Our process begins with a comprehensive understanding of your needs and objectives. Our team collaborates closely with you to develop a customized design that aligns with your goals and budget.

          </p>
        </div>
        <div className="w-[100%] grid md:grid-cols-2 grid-cols-1 place-items-center items-center justify-center gap-4 py-4">
          {turnkeyProjects.map((item, index) => (
            <div className="py-4">
              <div>
                <img
                  className=" object-cover md:w-[748px] w-[500px] h-[300px]"
                  src={item.img}
                  alt={item.img}
                />
              </div>
              <div className="py-4 flex flex-col gap-3 w-full">
                <h1 className="heading5 lg:w-full md:w-[80%] md:line-clamp-1 ">
                  {item.title}
                </h1>
                <p className="text1 font-poppins text-justify text-text7 line-clamp-4">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-8">
          <h1 className="heading4">HVAC Systems</h1>
          <p className="text1 text-text7 text-justify">
            We prioritize customer satisfaction above all else, striving to
            exceed expectations at every step of the process. From initial
            consultation to ongoing support, our dedicated team is committed to
            delivering exceptional service and ensuring a seamless experience
            for our clients.
          </p>
          <br />
          <p className="text1 text-text7 text-justify">
            At BAC, we are committed to sustainability and environmental
            responsibility. Our cooling solutions are designed to minimize
            environmental impact while maximizing energy efficiency. By
            utilizing innovative technologies and eco-friendly practices, we
            help clients reduce their carbon footprint and achieve their
            sustainability goals.
          </p>
        </div>
      </div>
      <BookingForm title="Book an Appointment" id="bookingForm" />
    </div>
  );
};

export default TurnkeyProjects;
