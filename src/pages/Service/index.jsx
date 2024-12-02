import React from "react";
import Container from "../../components/Containre";
import { IMAGES } from "../../utils/Images";
import { servicesCartData } from "../../utils/DummyData";

const Service = () => {
  return (
    <Container>
      <div className="w-full py-14">
        <div className="relative max-w-[80%] mx-auto">
          <img src={IMAGES.SERVICESIMG} alt={IMAGES.SERVICESIMG} />
          <div className="py-12">
            <h1 className="heading5  py-4">
              Welcome to BAC Comfort Cooling Solutions
            </h1>
            <p className="heading7">
              At BAC, we specialize in delivering cutting-edge Comfort Cooling
              solutions for HVACR chillers and equipment, ensuring optimal
              performance and enhanced comfort in diverse environments. With a
              legacy of excellence and innovation spanning decades, we are
              committed to providing reliable, efficient, and sustainable
              cooling solutions tailored to meet the unique needs of our
              clients.
            </p>
          </div>
          <div className="py-6">
            <h1 className="font-bold text-3xl py-4">
              Your Comfort, Our Mission
            </h1>
            <p className="heading7">
              Upgrading your existing air conditioning system to more
              energy-efficient models, helping you save on energy bills and
              reduce your carbon footprint Lubrication of moving parts,
              electrical connection inspection,
            </p>
          </div>
          <div className="w-[100%] grid grid-cols-2  items-center justify-center gap-4 py-4">
            {servicesCartData.map((item, index) => (
              <div>
                <div>
                  <img className="rounded-xl" src={item.img} alt={item.img} />
                </div>
                <h1 className="pt-4 heading4">{item.title}</h1>
                <p className="heading7 py-4 leading-5">{item.para}</p>
              </div>
            ))}
          </div>
          <div className="py-8">
            <h1 className="font-bold text-2xl">HVAC Systems</h1>
            <p className="heading7">
              We prioritize customer satisfaction above all else, striving to
              exceed expectations at every step of the process. From initial
              consultation to ongoing support, our dedicated team is committed
              to delivering exceptional service and ensuring a seamless
              experience for our clients.
            </p>
            <br />
            <p className="heading7">
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
    </Container>
  );
};

export default Service;
