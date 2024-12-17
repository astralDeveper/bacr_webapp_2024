import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../utils/Images";
import { comfortCooling } from "../../../utils/DummyData";
import BookingForm from "../../Home/Components/BookingForm";

const ComfortCooling = () => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLines((prev) => [...new Set([...prev, entry.target.id])]); // Add id to the list of visible elements
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    // Select all lines or sections you want to observe
    const lines = document.querySelectorAll(".line");
    lines.forEach((line) => observer.observe(line));

    // Cleanup the observer on component unmount
    return () => {
      lines.forEach((line) => observer.unobserve(line));
    };
  }, []);

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
          <h1
            id="line-1"
            className={`headingFont1 font-semibold line ${visibleLines.includes("line-1") ? "visible" : ""}`}
          >
           We provide professional Industrial process cooling solutions as per specific requirement of the process machinery.

          </h1>
          <p
            id="line-2"
            className={`textFont1 text-text7 pt-2 pcard line ${visibleLines.includes("line-2") ? "visible" : ""}`}
          >
            At BAC, we specialize in delivering cutting-edge Comfort Cooling solutions for HVACR chillers and equipment, ensuring optimal performance and enhanced comfort in diverse environments. With a legacy of excellence and innovation spanning decades, we are committed to providing reliable, efficient, and sustainable cooling solutions tailored to meet the unique needs of our clients.


          </p>
        </div>
        <div className="md:py-8 py-4">
          <h2
            id="line-3"
            className={`headingFont1 font-semibold line ${visibleLines.includes("line-3") ? "visible" : ""}`}
          >
            Our Expertise
          </h2>
          <p
            id="line-4"
            className={`textFont1 text-text7 pt-2 line ${visibleLines.includes("line-4") ? "visible" : ""}`}
          >
            <span className="text1 font-semibold text-text4">Advanced Technology Integration</span> <br />
            Our team harnesses the power of advanced technologies to design and implement cooling solutions that maximize efficiency and minimize energy consumption. From state-of-the-art chillers to innovative control systems, we leverage the latest advancements to deliver superior performance and cost savings.
          </p>
        </div>

        {/* Add more sections with unique IDs for each line */}
        <div className="grid md:grid-cols-2 grid-cols-1  place-items-center items-center justify-center gap-6 py-4">
          {comfortCooling.map((item, index) => (
            <div className="md:py-6 py-2" key={index}>
              <div
                className="rounded-xl h-[250px] w-full bg-no-repeat bg-cover shadow-md bg-center"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              ></div>
              <div className="py-4 flex flex-col gap-3 w-full px-2">
                <h3
                  id={`line-${5 + index}`} // Unique ID for each line
                  className={`headingFont5 font-semibold lg:w-full md:w-[80%] md:line-clamp-1 line ${visibleLines.includes(`line-${5 + index}`) ? "visible" : ""}`}
                >
                  {item.title}
                </h3>
                <p
                  id={`line-${6 + index}`} // Unique ID for each line
                  className={`text-text7 font-poppins font-medium line ${visibleLines.includes(`line-${6 + index}`) ? "visible" : ""}`}
                >
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:py-8 py-4">
          <h4
            id="line-7"
            className={`headingFont1 font-medium line ${visibleLines.includes("line-7") ? "visible" : ""}`}
          >
            HVAC Systems
          </h4>
          <p
            id="line-8"
            className={`textFont2 text-text7 pt-2 line ${visibleLines.includes("line-8") ? "visible" : ""}`}
          >
            We prioritize customer satisfaction above all else, striving to exceed expectations at every step of the process. From initial consultation to ongoing support, our dedicated team is committed to delivering exceptional service and ensuring a seamless experience for our clients.
          </p>
          <p
            id="line-9"
            className={`textFont2 text-text7 pt-2 line ${visibleLines.includes("line-9") ? "visible" : ""}`}
          >
            At BAC, we are committed to sustainability and environmental responsibility. Our cooling solutions are designed to minimize environmental impact while maximizing energy efficiency. By utilizing innovative technologies and eco-friendly practices, we help clients reduce their carbon footprint and achieve their sustainability goals.
          </p>
        </div>
      </div>
      <BookingForm/>
    </div>
  );
};

export default ComfortCooling;
