import React from "react";
import { IMAGES } from "../../utils/Images";
import Button from "../../components/Button";

const ErrorPage = () => {
  const para = ` We’re working on securing the treasures behind this page. Stay
            tuned! In the meantime, feel free to explore other sections of our
            website.`;

  return (
    <div className="w-full h-screen font-poppins gap-8 lg:px-24 md:px-10 px-5 py-10 flex flex-col md:flex-row-reverse items-center justify-between">
      {/* Image Section */}
      <div className="w-full lg:w-[48%] flex justify-center">
        <img
          className="md:w-[620px] w-[300px]"
          src={IMAGES.PAGENOTFOUND}
          alt={IMAGES.PAGENOTFOUND}
          draggable={false}
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col md:items-start items-center" >
        <h1 className="heading1 sm:leading-[30px] text-[#FF0000] font-bold">
          Error 404
        </h1>
        <p className="heading2 font-bold">Oops....</p>
        <p className="heading5">Page not found</p>
        <p className="text1 md:text-start w-[70%] text-text8 py-2">{para}</p>
        <Button
          title="Back to home"
          btnStyle={
            "text1 font-semibold bg-text8  flex items-center justify-center gap-3 text-backgroundColor2 px-8 mt-6 py-3 rounded-md"
          }
          arrow={IMAGES.LEFTARROW}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
