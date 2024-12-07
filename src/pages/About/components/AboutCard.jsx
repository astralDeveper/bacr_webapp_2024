import React from "react";
import { AboutCardData } from "../../../utils/DummyData";

const AboutCard = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="mb-20 flex items-center justify-center flex-col gap-6 ">
                <p className="text2 text-text1" >Our Team</p>
                <p className="heading2 w-[80%] text-center text-text12 " >Meet the Experts Behind Your Fresh 
                Air Solutions.</p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AboutCardData.map((item, ind) => {
            return (
              <div
                key={ind}
                className="relative   flex flex-col "
              >
                {/* workers images start */}
                <div className=" flex items-center justify-center ">
                  <img
                    className="w-[100%] object-contain"
                    src={item.img}
                    alt={item.img}
                    draggable={false}
                  />
                </div>
                {/* workers images start */}

                {/* Social media icons start  */}
                <div className="absolute -right-5 top-8 bg-white shadow-shadow2 rounded-3xl px-2 py-3 flex flex-col gap-2 ">
                  <img
                    className="w-8 object-contain"
                    src={item.socialIcon}
                    alt={item.socialIcon}
                  />
                  <img
                    className="w-8"
                    src={item.socialIcon2}
                    alt={item.socialIcon2}
                  />
                  <img
                    className="w-8"
                    src={item.socialIcon3}
                    alt={item.socialIcon3}
                  />
                </div>
                {/* Social media icons end  */}

                {/* content start here */}
                <div className=" bg-backgroundColor14 py-6 text-center">
                  <p className="lg:text-[26px] md:text-[21px] text-[15px] font-semibold w-[100%] mx-auto text-text9">
                    {item.name}
                  </p>
                  <p className="text2 text-text12">{item.destination}</p>
                </div>
                {/* content start here */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutCard;