import React from "react";
import { comfortCooling, energyOptimization } from "../../../utils/DummyData";
import { IMAGES } from "../../../utils/Images";
import BookingForm from "../../Home/Components/BookingForm";

const EnergyOptimization = () => {
  return (
    <div className="w-full py-14">
      <div className="relative max-w-[80%] mx-auto">
        {/* <img src={IMAGES.SERVICEFIVE} alt={IMAGES.SERVICEFIVE} /> */}
        <div className="py-8">
          <h1 className="heading1 py-2">
            We provide professional Industrial process Annual Maintenance as per
            specific requirement of the process machinery.
          </h1>
          <p className="text1 text-text7 text-justify">
            At BAC, we understand the critical role HVACR chillers and equipment
            play in maintaining optimal comfort and productivity within your
            facility. Our comprehensive annual maintenance services are tailored
            to ensure the peak performance and longevity of your HVACR systems,
            safeguarding your investment and providing peace of mind.
          </p>
        </div>
        <div className="py-6">
          <h1 className="heading1 py-2"> Our Expertise</h1>
          <p className="text1 text-text7 text-justify">
          Upgrading your existing air conditioning system to more energy-efficient models, helping you save on energy bills and reduce your carbon footprint Lubrication of moving parts, electrical connection inspection.

          </p>
        </div>
        <div className="w-[100%] grid md:grid-cols-2 grid-cols-1 justify-center gap-4 py-4">
          {energyOptimization.map((item, index) => (
            <div className="py-4">
              <div>
                <img
                  className="object-cover md:w-[768px]  w-[500px] h-[300px]"
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

export default EnergyOptimization;
