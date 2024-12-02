import React from "react";
import { IMAGES } from "../utils/Images";

const Footer = () => {
  const Data = [
    {
      heading: "About Us",
      links: [
        { link: "Company Overview", href: "http://link1.com" },
        { link: "Company Profile", href: "http://link2.com" },
        { link: "CEO’s Message", href: "http://link3.com" },
        { link: "Projects", href: "http://link4.com" },
        { link: "Certficates", href: "http://link4.com" },
        { link: "Testimonials", href: "http://link4.com" },
      ],
    },
    {
      heading: "Products & Services",
      links: [
        { link: "New Products", href: "http://service1.com" },
        { link: "Used Equipment", href: "http://service2.com" },
        { link: "BAC Store", href: "http://service3.com" },
        { link: "Services", href: "http://service3.com" },
        { link: "Blogs", href: "http://service3.com" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { link: "Privacy Policy", href: "mailto:contact@example.com" },
        { link: "Careers", href: "tel:+1234567890" },
        { link: "Blogs", href: "tel:+1234567890" },
      ],
    },
  ];

  const location =
    "Suite # 404, 4th Floor, Tahir Plaza, Plot No. A-20, K.C.H.S.U. Block 7/8, Karachi, Pakistan.";

  return (
    <div className="bg-[#004671] text-white w-full">
      <div className="max-w-[80%] mx-auto py-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-x-6 gap-y-6">
          <div className="flex justify-startq flex-col gap-y-4 py-0">
            <img
              className="w-28"
              src={IMAGES.LOGOWHITE}
              alt={IMAGES.LOGOWHITE}
            />
            <p className="text-sm">{location}</p>
            <div className="flex items-center justify-start gap-2">
              <img
                className="w-5"
                src={IMAGES.FACEBOOK}
                alt={IMAGES.FACEBOOK}
              />
              <img className="w-5" src={IMAGES.INSTA} alt={IMAGES.INSTA} />
              <img
                className="w-5"
                src={IMAGES.WHATSAPP}
                alt={IMAGES.WHATSAPP}
              />
              <img className="w-5" src={IMAGES.YOUTUBE} alt={IMAGES.YOUTUBE} />
            </div>
          </div>

          <div className=" grid grid-cols-3 gap-x-4">
            {Data.map((item, i) => {
              return (
                <div className="" key={i}>
                  <h2 className="font-bold pb-3">{item.heading}</h2>
                  <ul>
                    {item.links.map((items, ind) => {
                      return (
                        <div key={ind}>
                          <li
                            className="md:text-[0.8rem] text-sm py-1 cursor-pointer hover:underline"
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
            <div>
              <h2 className="font-bold pb-3">Subscribe</h2>
              <div className="flex items-center ">
                <div className="flex rounded-lg shadow-sm">
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
              <h2 className="font-semibold pb-3">Certficates</h2>
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
        <div className="border-[1px] border-[#eeeeee] w-full my-4"></div>
        {/* line end */}

        {/* underline text start */}
        <div className="text-center gap-2 py-2">
          <p>&copy; 2023 Brothers Air Conditioing. All rights reserved </p>
        </div>
        {/* underline text end */}
      </div>
    </div>
  );
};

export default Footer;

// const generateImagePath = (name) => `src/assets/images/${name}.png`;

// const imageNames = [
//   "logo"
// ];

// const IMAGES = imageNames.reduce((acc, name) => {
//   acc[name.toUpperCase()] = generateImagePath(name);
//   return acc;
// }, {});

// export { IMAGES };
