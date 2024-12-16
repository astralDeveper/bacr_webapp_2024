import React, { useEffect, useRef, useState } from "react";
import { IMAGES } from "../utils/Images";
import { navManue, socialIcons } from "../utils/DummyData";
import { Link, useLocation } from "react-router";
import Button from "./Button";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Navbar = ({ mainStyle, heading, para, home, image, id }) => {
  const active = useLocation().pathname;
  // const myAnimationLeft = {
  //     initial: { opacity: 0, y: 100 },
  //     inView: { opacity: 1, y: 0, transition: { delay: 0.1, ease: "linear", duration: 1 } },
  // };

  const [menueOpen, SetMenueOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Handle animation logic
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  useEffect(() => {
    if (menueOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menueOpen]);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Trigger the loaded class after the page loads
    setHasLoaded(true);
  }, []);

  return (
    <div
      className={`${
        image ? "bg-hero-pattern bg-no-repeat bg-cover w-full" : ""
      }`}
    >
      <div className="max-w-[80%] mx-auto md:rounded-b-[30px] rounded-b-[20px] bg-white shadow-shadow2  py-1 px-6 ">
        <div className={`flex items-center justify-between`}>
          <Link to={"/"} className="shrink-0">
            <img
              src={IMAGES.LOGO}
              alt="logo"
              className="md:w-[80px] w-[60px] object-contain"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="md:block hidden">
            <nav className="flex items-center justify-center xl:gap-4 gap-2">
              {navManue.map((item, ind) => (
                <Link
                  key={ind}
                  to={item.href}
                  className={`xl:text2 text3 menu overflow-y-hidden transition-transform duration-1000 ${
                    isAnimated ? "animate-slide-up" : ""
                  } ${
                    active === item.href
                      ? "text-backgroundColor4 font-bold cursor-default"
                      : "font-medium"
                  }`}
                  style={{
                    animation: `slideUp 1s ease-out forwards`,
                    animationDelay: `${ind * 0.2}s`, // Delay based on index
                    opacity: 0, // Initially invisible
                    transform: "translateY(20px)", // Initially positioned below
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          {/* Desktop Contact Info */}
          <div className={`md:block hidden overflow-hidden `}>
            <div
              className={`flex items-center xl:gap-2 gap-1 transition-transform duration-1000 ${
                isAnimated ? "animate-slide-rtl" : ""
              } `}
            >
              <img
                src={IMAGES.PHONE}
                alt="phone Icon"
                className="md:w-[15px] w-[8px]"
              />
              <a href="tel:+92 345 3456563" className="xl:text2 text3">
                +92 345 3456563
              </a>
            </div>
            <div
              className={`flex items-center xl:gap-2 gap-1 transition-transform duration-1000 ${
                isAnimated ? "animate-slide-rtl" : ""
              } `}
            >
              <img
                src={IMAGES.MAIL}
                alt="mail Icon"
                className="md:w-[15px] w-[8px]"
              />
              <a href="mailto:bacremail@gmail.com" className="xl:text2 text3">
                bacremail@gmail.com
              </a>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className="md:hidden"
            onClick={() => {
              SetMenueOpen(!menueOpen);
            }}
          >
            <img
              src={IMAGES.MANUE}
              alt={IMAGES.MANUE}
              className="w-[40px] object-contain bg-gradient-to-tr from-[#3a5b70] to-[#717e8a] p-2 rounded-full"
            />
          </div>
        </div>

        {/* Mobile Start crossicon */}
        {menueOpen && (
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className={`w-full  2xl:hidden flex items-center flex-col bg-backgroundColor2 absolute left-0 top-0 h-full z-50 overscroll-y-none p-5 `}
          >
            <div
              className="flex items-end justify-end w-full cursor-pointer"
              onClick={() => {
                SetMenueOpen(!menueOpen);
              }}
            >
              <img
                src={IMAGES.CLOSE}
                alt={IMAGES.CROSSICON}
                className="w-[36px] bg-gradient-to-tr from-[#3a5b70] to-[#717e8a] p-2 rounded-full"
              />
            </div>
            <nav className="flex items-center justify-center flex-col gap-6 mt-12 ">
              {navManue.map((item, ind) => {
                return (
                  <Link
                    key={ind}
                    to={item.href}
                    className={`flex items-center flex-row gap-2  justify-center text1 font-semibold ${
                      active === item.href ? "text-backgroundColor4" : ""
                    } `}
                  >
                    {item.title}
                    {/* {item.icon && <img src={IMAGES.ARROWDOWN} alt='arrow' className='w-[12px]' />} */}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col  items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <img src={IMAGES.PHONE} alt="phone Icon" className="w-[20px]" />
                <a href="tel:+92 345 3456563" className="text1">
                  +92 345 3456563
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={IMAGES.MAIL} alt="mail Icon" className="w-[20px]" />
                <a href="mailto:bacremail@gmail.com" className="text1">
                  bacremail@gmail.com
                </a>
              </div>
            </div>
            {/* <div className={`flex items-center justify-center gap-2 mt-6 w-full`}>
                                {
                                    socialIcons.map((item, ind) => (
                                        <div key={ind} className='shrink-0'>
                                            <img src={item.icon} alt="icons" className='w-[42px]' />
                                        </div>
                                    ))
                                }
                            </div> */}
          </motion.div>
        )}
        {/* Mobile End */}
      </div>
      {/*   gap-6 flex items-center justify-center flex-col */}
      {image && (
        <div
          className={`w-[80%] mx-auto ${
            para ? "md:py-16 py-8" : "py-6 pb-28"
          } `}
        >
          <div
            className={` ${
              active === "/"
                ? ""
                : "flex flex-col items-center justify-center  text-center"
            }  `}
          >
            <p className={`heading4  text-backgroundColor2 md:w-[82%] w-full`}>
              <Typewriter
                words={[heading]} // Make sure heading is an array of strings
                loop={1} // Use the length of the array for the loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            {para && (
              <p
                className={`text2 ${
                  para ? "mt-4" : ""
                } text-backgroundColor2 md:w-[40%] w-full`}
              >
                {para}
              </p>
            )}
          </div>
          {home}
        </div>
      )}
    </div>
  );
};
export default Navbar;

