import React from "react";
import Container from "../../components/Containre";
import { IMAGES } from "../../utils/Images";

const Service = () => {
  // const Data = [
  //   {
  //     heading: "1. Split Systems",
  //     links: [
  //       { para: ""},
  //       { para: },
  //       { para: },
  //       { para: },
  //       { para: },
  //       { para: },
  //     ],
  //   },

  // ];

  return (
    <Container>
      <div className="w-full py-14">
        <div className="relative max-w-[80%] mx-auto">
          <img src={IMAGES.SERVICESIMG} alt={IMAGES.SERVICESIMG} />
          <div className="py-12">
            <h1 className="font-bold text-4xl py-4">
              Cooling You Can Count On
            </h1>
            <p className="">
              Fast and efficient installation of new air conditioning units. Our
              certified technicians ensure your system is properly installed for
              optimal performance Site assessment, equipment delivery air an
              complete installation.
            </p>
            <br />
            <p className="">
              Regular maintenance services to keep your air conditioning system
              running smoothly and for as efficiently, preventing an breakdowns
              and extending its lifespan Filter replacement, coil cleaning,
              refrigerant check, thermostat calibration, and system inspection
              air conditioning Upgrading your existing air conditioning system.
            </p>
          </div>
          <div className="py-4">
            <h1 className="font-bold text-3xl py-4">
              Your Comfort, Our Mission
            </h1>
            <p>
              Upgrading your existing air conditioning system to more
              energy-efficient models, helping you save on energy bills and
              reduce your carbon footprint Lubrication of moving parts,
              electrical connection inspection,
            </p>
          </div>
          <div className="w-[100%] grid grid-cols-2 items-center justify-center gap-3 py-4">
            <img
              className="rounded-xl"
              src={IMAGES.SERVICELEFTIMG}
              alt={IMAGES.SERVICELEFTIMG}
            />
            <img
              className="rounded-xl"
              src={IMAGES.SERVICERIGHTIMG}
              alt={IMAGES.SERVICERIGHTIMG}
            />
          </div>
          <div>
            <p>
              Energy assessment, old unit removal, new unit installation, and
              energy efficiency optimization a Advanced diagnostic services
              using the latest technology to detect and address issues in your
              air conditioning system before they become major problems
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service;
