import React from "react";
import { IMAGES } from "../utils/Images";

const Footer = () => {
  const Data = [
    {
      heading: "Services",
      links: [
        { link: "Comfort Cooling", href: "http://service1.com" },
        { link: "Process Cooling", href: "http://service2.com" },
        { link: "Cold Chain Storage", href: "http://service3.com" },
        { link: "Turnkey Solution", href: "http://service3.com" },
        { link: "Eenergy Optimization", href: "http://service3.com" },
        { link: "Operation maintenance", href: "http://service3.com" },
        { link: "Troubleshooting", href: "http://service3.com" },
      ],
    },
  ];

  const Data2 = [
    {
      heading: "Products",
      links: [
        { link: "New Products", href: "mailto:contact@example.com" },
        { link: "Used Equipments", href: "tel:+1234567890" },
        { link: "BAC Store", href: "tel:+1234567890" },
      ],
    },
  ];

  const links = [
    { link: "Home" },
    { link: "About Us" },
    { link: "products" },
    { link: "Services" },
    { link: "Career" },
    { link: "Contact Us" },
    { link: "Blogs" },
  ];

  const meneLinks = [
    "Home",
    "About Us",
    "Products",
    "Services",
    "Career",
    "Contact Us",
    "blogs",
  ];

  const location =
    "Providing innovative air conditioning and HVACR solutions with reliability and excellence.";

  return (
    <footer class="bg-[#004671] font-poppins">
      <div class="mx-auto max-w-[80%] py-4">
        <div>
          <div class="grid xl:grid-cols-5  2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-6 lg:py-8 ">
            <div className="mb-8">
              <img
                className="w-28"
                src={IMAGES.LOGOWHITE}
                alt={IMAGES.LOGOWHITE}
              />
              <p className="text-sm font-poppins text-white py-6">{location}</p>
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

            <div className="flex flex-col mt-8 lg:ml-16 ">
              <ul className="text-white font-bold uppercase">
                {meneLinks.map((item, idx) => (
                  <li className="pb-2 font-bold uppercase hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* service and products links  */}
            <div className="text-white mt-6">
              {Data.map((item, i) => {
                return (
                  <div key={i}>
                    <h2 className="font-bold pb-3">{item.heading}</h2>
                    <ul className="pl-4 pt-4 border-l-[1px] border-t-[1px] border-white">
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
            <div className="gap-x-4 mr-6 text-white mt-6">
              {Data2.map((item, i) => {
                return (
                  <div key={i}>
                    <h2 className="font-bold pb-3">{item.heading}</h2>
                    <ul className=" border-t-[1px] border-white">
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

          <div className="">
            <div className="text-backgroundColor2" >
              <h2 className="font-bold pb-3">Subscribe</h2>
              <div className="flex items-center ">
                <div class="flex rounded-lg shadow-sm">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="py-2 px-4 text-white bg-transparent border-[1px] border-white outline-none w-full rounded-s-md text-sm"
                  />
                  <button
                    type="button"
                    class="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-semibold pb-3 text-backgroundColor2">Certficates</h2>
              <div className="flex items-center gap-2">
                <div className="bg-[#023B5E] p-2 rounded-md">
                  <img
                    className="w-16"
                    src={IMAGES.CARTIMGONE}
                    alt={IMAGES.CARTIMGONE}
                  />
                </div>
                <div className="bg-[#023B5E] p-2 rounded-md">
                  <img
                    className="w-16"
                    src={IMAGES.CARTIMGTWO}
                    alt={IMAGES.CARTIMGTWO}
                  />
                </div>
                <div className="bg-[#023B5E] p-2 rounded-md">
                  <img
                    className="w-16"
                    src={IMAGES.CARTIMGTHREE}
                    alt={IMAGES.CARTIMGTHREE}
                  />
                </div>
                <div className="bg-[#023B5E] p-2 rounded-md">
                  <img
                    className="w-16"
                    src={IMAGES.CARTIMGFOUR}
                    alt={IMAGES.CARTIMGFOUR}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* line start */}
        <div className="border-[1px] opacity-55 border-[#eeeeee] w-full my-4"></div>
        {/* line end */}

        {/* underline text start */}
        <div className="text-white flex justify-between items-center lg:flex-row flex-col gap-2 py-2 w-full  ">
          <p className="text1 text-center">
            &copy; 2023 Brothers Air Conditioing. All rights reserved
          </p>
          <p className="text1 hover:underline cursor-pointer">
            Our Privacy Policy
          </p>
        </div>
        {/* underline text end */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
