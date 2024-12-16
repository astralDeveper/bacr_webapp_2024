import React from "react";
import Container from "../../components/Container";
import {
  heading,
  heading2,
  heading6,
  para1,
  parag2,
  parag3,
  parag4,
  parag5,
  parag6,
  subhead1,
  subhead2,
  subhead3,
} from "../../utils/DummyData";

const PrivacyPolicy = () => {
  return (
    <Container image heading={"Privacy Policy"}>
      <div className="max-w-[80%] mx-auto py-12 font-poppins">
        <p className="textFont2 text-text7">{para1}</p>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading}</h1>
          <p className="textFont2 text-text7">{parag2}</p>
        </div>
        <div className="py-6">
          <h1 className="headingFont5 font-bold py-2">{heading2}</h1>
          <div className="text-text7">
            <p className="textFont2 mb-3">{parag4}</p>
            <p className="textFont2 mb-3">{subhead1}</p>
            <p className="textFont2 mb-3">{subhead2}</p>
            <p className="textFont2 mb-3">{subhead3}</p>
            <p className="textFont2 mb-3">{subhead1}</p>
          </div>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading}</h1>
          <p className="textFont2 text-text7">{para1}</p>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading6}</h1>
          <p className="textFont2 text-text7">{parag4}</p>
        </div>
        <div className="py-6">
          <h1 className="headingFont5 font-bold py-2">{heading6}</h1>
          <p className="textFont2 text-text7">{parag4}</p>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading}</h1>
          <p className="textFont2 text-text7">{parag5}</p>
          <br />
          <p className="textFont2 text-text7">{parag6}</p>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading2}</h1>
          <div className="text-text7">
            <p className="textFont2 mb-3">{parag3}</p>
            <p className="textFont2 mb-3">{subhead1}</p>
            <p className="textFont2 mb-3">{subhead2}</p>
            <p className="textFont2 mb-3">{subhead3}</p>
            <p className="textFont2 mb-3">{subhead1}</p>
          </div>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading}</h1>
          <p className="textFont2 text-text7">{parag5}</p>
          <br />
          <p className="textFont2 text-text7">{parag6}</p>
        </div>
        <div className="py-6 ">
          <h1 className="headingFont5 font-bold py-2">{heading6}</h1>
          <p className="textFont2 text-text7">{parag4}</p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;