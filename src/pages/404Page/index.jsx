import React from "react";
import { IMAGES } from "../../utils/Images";

const ErrorPage = () => {
  const para = ` We’re working on securing the treasures behind this page. Stay
            tuned! In the meantime, feel free to explore other sections of our
            website.`;

  return (
    <div className="w-full h-screen font-poppins gap-8 lg:px-24 md:px-10 px-5 py-10 flex flex-col lg:flex-row-reverse items-center justify-between">
      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          className="w-[640px]"
          src={IMAGES.PAGENOTFOUND}
          alt={IMAGES.PAGENOTFOUND}
          draggable={false}
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[50%]">
        <h1 className="heading1 sm:leading-[30px] text-[#FF0000] font-bold">
          Error 404
        </h1>
        <p className="heading2 font-bold">Oops....</p>
        <p className="heading5">Page not found</p>
        <p className="text1 w-[70%] text-text8 py-2">{para}</p>
        <button className="text1 font-semibold bg-backgroundColor9 flex items-center justify-center gap-3 text-white px-8 mt-6 py-3 rounded-md">
          <img className="w-4" src={IMAGES.LEFTARROW} alt={IMAGES.LEFTARROW} />
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
