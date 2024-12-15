import React from "react";
import Button from "../../../components/Button";
import { careerCardData } from "../../../utils/DummyData";

const CareerCard = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {careerCardData.map((items, ind) => (
        <div
          key={ind}
          className="p-6 bg-backgroundColor2 rounded-lg shadow-shadow1 lg:mb-6 mb-2 headingFont5"
        >
          <div className="text- font-light mb-1 text-lg ">{items.jobType}</div>

          <h5 className="mb-2 headingFont5 font-bold text-text4">
            {items.jobTitle}
          </h5>
          <p className="mb-3 font-normal text-text7 textFont2">
            {items.jobDescription}
          </p>
          <Button
            title={"Apply Now"}
            btnStyle={
              "bg-backgroundColor1 text-backgroundColor2 rounded-lg mt-4 heading7"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CareerCard;
