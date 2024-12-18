import React, { useEffect } from "react";
import Button from "../../components/Button";
import { IMAGES } from "../../utils/Images";
import { useState } from "react";

const ApplyNowForm = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleText, setVisibleText] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("ltr")) {
              setVisibleCards((prev) => [
                ...new Set([...prev, entry.target.id]),
              ]); // Avoid duplicates
            }
            if (entry.target.classList.contains("rtl")) {
              setVisibleText((prev) => [
                ...new Set([...prev, entry.target.id]),
              ]); // Avoid duplicates
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    const cards = document.querySelectorAll(".ltr");
    const texts = document.querySelectorAll(".rtl");

    cards.forEach((card) => observer.observe(card));
    texts.forEach((text) => observer.observe(text));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      texts.forEach((text) => observer.unobserve(text));
    };
  }, []);
  return (
    <div
      id={`rtl`}
      className={` rtl ${
        visibleText.includes(`rtl`) ? "visible" : ""
      }  bg-gradient-to-tr from-backgroundColor3 to-backgroundColor4 rounded-lg shadow-lg p-6 lg:w-[537px]  w-[100%] h-full `}
    >
      <h2 className="heading6 text-backgroundColor2 text-center font-semibold">
        Join Our Team
      </h2>
      <form className="w-full">
        <div className="mb-2">
          <label
            htmlFor="name"
            className="text-backgroundColor2 text1 font-semiBold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg focus:outline-none placeholder:text2 placeholder:text-text10 text2 "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="phone"
            className="text-backgroundColor2 text1 font-semiBold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text2 placeholder:text-text10 text2 "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="text-backgroundColor2 text1 font-semiBold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text2 placeholder:text-text10 text2 "
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="upload-cv"
            className="text-backgroundColor2 text1 font-semiBold"
          >
            Upload CV
          </label>
          <div className="bg- rounded-lg p-2 text-center bg-backgroundColor2 mt-1">
            <img
              src={IMAGES.CLIPBOARD}
              alt="clipboard"
              className="w-[28px] mx-auto"
            />
            <span className="text2 text-text4">
              Drag file and{" "}
              <label
                htmlFor="fileInput"
                className="font-bold text3 underline cursor-pointer"
              >
                Browse
              </label>
            </span>
            <p className="text3 text-text10">Format: PDF, max size: 25MB</p>
            <input
              type="file"
              className="sr-only"
              id="fileInput"
              accept=".pdf"
            />
          </div>
        </div>

        <Button
          title={"Submit to Apply"}
          type={"submit"}
          btnStyle={
            "bg-backgroundColor1 w-full text-backgroundColor2 text1 rounded-lg "
          }
        />
      </form>
    </div>
  );
};

export default ApplyNowForm;
