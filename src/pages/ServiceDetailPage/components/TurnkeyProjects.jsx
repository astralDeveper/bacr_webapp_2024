import React from "react";
import { comfortCooling, turnkeyProjects } from "../../../utils/DummyData";
import { IMAGES } from "../../../utils/Images";

const TurnkeyProjects = () => {
  return (
    <div className="w-full lg:py-20 md:py-16 py-12 ">
      <div className="relative max-w-[80%] mx-auto">
        <div
          className="lg:h-[450px] md:h-[450px] h-[250px] md:my-8 my-4 w-full bg-no-repeat bg-cover shadow-2xl bg-center "
          style={{
            backgroundImage: `url(${IMAGES.COMFORT1})`,
          }}
        ></div>
        <div className="md:py-8 py-4">
          <h1 className="headingFont1 font-semibold">
            Welcome to BAC, Your Turnkey Solution for HVACR Chillers and
            Equipment
          </h1>
          <p className="textFont1 text-text7 pt-2">
            We understand the pivotal role that HVACR chillers and equipment
            play in maintaining optimal comfort and efficiency in commercial and
            industrial settings. With our comprehensive expertise and dedication
            to excellence, we offer turnkey solutions tailored to meet the
            diverse needs of our clients.
          </p>
        </div>
        <div className="md:py-8 py-4">
          <h2 className="headingFont1 font-semibold">
            Your Comfort, Our Mission
          </h2>
          <p className="textFont1 text-text7 pt-2">
            Upgrading your existing air conditioning system to more
            energy-efficient models, helping you save on energy bills and reduce
            your carbon footprint Lubrication of moving parts, electrical
            connection inspection,
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  place-items-center items-center justify-center gap-6 py-4">
          {comfortCooling.map((item, index) => (
            <div className="md:py-6 py-2">
              <div
                className=" rounded-xl h-[250px] w-full bg-no-repeat bg-cover shadow-md bg-center "
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>
              <div className="py-4 flex flex-col gap-3 w-full px-2">
                <h3 className="headingFont5 font-semibold lg:w-full md:w-[80%] md:line-clamp-1 ">
                  {item.title}
                </h3>
                <p className="text-text7 font-poppins font-medium ">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:py-8 py-4">
          <h4 className="headingFont1 font-medium">HVAC Systems</h4>{" "}
          <p className="textFont2 text-text7 pt-2">
            We prioritize customer satisfaction above all else, striving to
            exceed expectations at every step of the process. From initial
            consultation to ongoing support, our dedicated team is committed to
            delivering exceptional service and ensuring a seamless experience
            for our clients.
          </p>
          <p className="textFont2 text-text7 pt-2">
            At BAC, we are committed to sustainability and environmental
            responsibility. Our cooling solutions are designed to minimize
            environmental impact while maximizing energy efficiency. By
            utilizing innovative technologies and eco-friendly practices, we
            help clients reduce their carbon footprint and achieve their
            sustainability goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnkeyProjects;
