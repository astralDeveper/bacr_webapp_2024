import React from "react";
import { IMAGES } from "../utils/Images";
import {
  meneLinks,
  ProductsLinks,
  ProjectsLinks,
  ServicesLinks,
} from "../utils/DummyData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-text8 font-poppins">
      <div class="mx-auto max-w-[80%] py-4">
        <div>
          {/* logo section start here  */}
          <div className="text-backgroundColor2 flex justify-between items-center lg:flex-row flex-col gap-2 py-2 w-full  ">
            <img
              className="w-28"
              src={IMAGES.LOGOWHITE}
              alt={IMAGES.LOGOWHITE}
            />

            {/* MenuLinks section start here  */}
            <div className="flex flex-col mt-8 lg:ml-16 ">
              <ul className="text-backgroundColor2 flex flex-wrap justify-center gap-x-4 gap-y-2 ">
                {meneLinks.map((item, idx) => (
                  <Link to={`${item.href}`}>
                    <li key={idx} className="text1 cursor-pointer">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* MenuLinks section end here  */}
          </div>
          {/* logo section end here  */}

          {/* line start */}
          <div className="border-[1px] opacity-55 border-[#eeeeee] w-full my-4"></div>
          {/* line end */}

          {/* center section start here  */}
          <div class="grid xl:grid-cols-4  2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-6 lg:py-8 ">
            <div className="mb-8">
              {/* service links start here  */}
              <div className="text-backgroundColor2">
                {ServicesLinks.map((item, i) => {
                  return (
                    <div key={i}>
                      <h2 className="font-bold pb-3">{item.heading}</h2>
                      <ul className="border-backgroundColor2">
                        {item.links.map((items, ind) => {
                          return (
                            <div key={ind}>
                              <Link to={items.href}>
                                <li className="text1 py-1 cursor-pointer hover:underline">
                                  {items.link}
                                </li>
                              </Link>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              {/* service links end here  */}
            </div>

            {/* products links start here */}
            <div className="gap-x-4 mr-6 text-backgroundColor2">
              {ProductsLinks.map((item, i) => {
                return (
                  <div key={i}>
                    <h2 className="font-bold pt-3">{item.heading}</h2>
                    <ul className=" border-backgroundColor2">
                      {item.links.map((items, ind) => {
                        return (
                          <div key={ind}>
                            <Link to={items.href}>
                              <li className="text1 py-1 cursor-pointer hover:underline">
                                {items.link}
                              </li>
                            </Link>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            {/* products links end here */}

            {/* Projects links start here */}
            <div className="gap-x-4 mr-6 text-backgroundColor2 mb-4">
              {ProjectsLinks.map((item, i) => {
                return (
                  <div key={i}>
                    <h2 className="font-bold py-3">{item.heading}</h2>
                    <ul className=" border-backgroundColor2">
                      {item.links.map((items, ind) => {
                        return (
                          <div key={ind}>
                            <li
                              className="text1 py-1 cursor-pointer hover:underline"
                              href={items.href}
                            >
                              {items.link}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            {/* Projects links end here */}

            <div>
              <div className="text-backgroundColor2">
                <div className="flex items-center ">
                  <div class="flex rounded-lg shadow-sm">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="py-2 px-4 text-backgroundColor2 bg-transparent border-[1px] border-backgroundColor2 outline-none w-full rounded-s-md text-sm"
                    />
                    <button
                      type="button"
                      class="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-backgroundColor2 text-text4 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-semibold pb-3 text-backgroundColor2">
                  CERTIFICATES
                </h2>
                <div className="flex items-center gap-2">
                  <div className="bg-backgroundColor12 p-2 rounded-md">
                    <img
                      className="w-16"
                      src={IMAGES.CARTIMGONE}
                      alt={IMAGES.CARTIMGONE}
                    />
                  </div>
                  <div className="bg-backgroundColor12 p-2 rounded-md">
                    <img
                      className="w-16"
                      src={IMAGES.CARTIMGTWO}
                      alt={IMAGES.CARTIMGTWO}
                    />
                  </div>
                  <div className="bg-backgroundColor12 p-2 rounded-md">
                    <img
                      className="w-16"
                      src={IMAGES.CARTIMGTHREE}
                      alt={IMAGES.CARTIMGTHREE}
                    />
                  </div>
                  <div className="bg-backgroundColor12 p-2 rounded-md">
                    <img
                      className="w-16"
                      src={IMAGES.CARTIMGFOUR}
                      alt={IMAGES.CARTIMGFOUR}
                    />
                  </div>
                </div>
              </div>
              {/* social media links start here  */}
              <div>
                <h2 className="font-semibold py-3 text-backgroundColor2">
                  Join US
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <img
                    className="w-7 cursor-pointer"
                    src={IMAGES.FACEBOOKWHITE}
                    alt={IMAGES.FACEBOOKWHITE}
                  />
                  <img
                    className="w-7 cursor-pointer"
                    src={IMAGES.INSTAWHITE}
                    alt={IMAGES.INSTAWHITE}
                  />
                  <img
                    className="w-7 cursor-pointer"
                    src={IMAGES.TWITTER}
                    alt={IMAGES.TWITTER}
                  />
                  <img
                    className="w-7 cursor-pointer"
                    src={IMAGES.WHATSAPP}
                    alt={IMAGES.WHATSAPP}
                  />
                </div>
              </div>
              {/* social media links start here  */}
            </div>
          </div>
          {/* center section end here  */}

          {/* line start */}
          <div className="border-[1px] opacity-55 border-[#eeeeee] w-full my-4"></div>
          {/* line end */}

          {/* underline text start */}
          <div className="text-backgroundColor2 flex justify-center items-center lg:flex-row flex-col gap-2 py-2 w-full  ">
            <p className="text1 hover:underline cursor-pointer">
              BAC @ 2024. All rights reserved.
            </p>
          </div>
          {/* underline text end */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;