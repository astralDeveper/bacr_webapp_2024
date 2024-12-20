import React from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";

const ApplyNowForm = () => {
  return (
    <div className="bg-gradient-to-tr from-backgroundColor3 to-backgroundColor4 rounded-lg shadow-lg p-6 lg:w-[537px]  w-[100%] h-full ">
      <h2 className="heading4 text-backgroundColor2 text-center font-semibold">
        Join Our Team
      </h2>
      <form className="w-full">
        <div className="mb-2">
          <label htmlFor="name" className="text-backgroundColor2 heading7">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg focus:outline-none placeholder:text1 placeholder:text-text10 text1 "
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="text-backgroundColor2 heading7">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text1 placeholder:text-text10 text1 "
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-backgroundColor2 heading7">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text1 placeholder:text-text10 text1 "
          />
        </div>
        <div className="mb-2">
          <label htmlFor="upload-cv" className="text-backgroundColor2 heading7">
            Upload CV
          </label>
          <div className="bg- rounded-lg p-2 text-center bg-backgroundColor2  mt-1">
            <img
              src={IMAGES.CLIPBOARD}
              alt={IMAGES.CLIPBOARD}
              className="w-[39px] mx-auto"
            />
            <span className="text2 text-text4 ">
              Drag file and{" "}
              <span className="font-bold underline" id="files">
                Browse
              </span>
            </span>
            <p className="text2 text-text10">Format: PDF, max size: 25MB</p>
            <input type="file" className="sr-only" id="files" />
          </div>
        </div>

        <Button
          title={"Submit to Apply"}
          type={"submit"}
          btnStyle={
            "bg-backgroundColor1 w-full text-backgroundColor2 heading7 rounded-lg "
          }
        />
      </form>
    </div>
  );
};

export default ApplyNowForm;
