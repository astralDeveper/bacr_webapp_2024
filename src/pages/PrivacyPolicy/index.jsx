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
    <Container image heading={"Privacy Policy"} >
      <div className="max-w-[80%] mx-auto py-12 font-poppins">
        <p className="text1 text-text7 text-justify">{para1}</p>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7 text-justify">{parag2}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading2}</h1>
          <div className="text-text7">
            <p className="text1 text-justify">{parag4}</p>
            <br />
            <p className="text1">{subhead1}</p>
            <br />
            <p className="text1">{subhead2}</p>
            <br />
            <p className="text1">{subhead3}</p>
            <br />
            <p className="text1">{subhead1}</p>
          </div>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7 text-justify">{para1}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading6}</h1>
          <p className="text1 text-text7 text-justify">{parag4}</p>
        </div>
        <div className="py-6">
          <h1 className="heading5 py-2">{heading6}</h1>
          <p className="text1 text-text7 text-justify">{parag4}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7 text-justify">{parag5}</p>
          <br />
          <p className="text1 text-text7 text-justify">{parag6}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading2}</h1>
          <div className="text-text7">
            <p className="text1 text-justify">{parag3}</p>
            <br />
            <p className="text1">{subhead1}</p>
            <br />
            <p className="text1">{subhead2}</p>
            <br />
            <p className="text1">{subhead3}</p>
            <br />
            <p className="text1">{subhead1}</p>
          </div>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading}</h1>
          <p className="text1 text-text7 text-justify">{parag5}</p>
          <br />
          <p className="text1 text-text7 text-justify">{parag6}</p>
        </div>
        <div className="py-6 ">
          <h1 className="heading5 py-2">{heading6}</h1>
          <p className="text1 text-text7 text-justify">{parag4}</p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
