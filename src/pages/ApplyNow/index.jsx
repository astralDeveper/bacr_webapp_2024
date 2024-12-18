import React from "react";
import Container from "../../components/Container";
import ApplyNowCard from "./ApplyNowCard";
import ApplyNowForm from "./ApplyNowForm";


const ApplyNow = () => {
  return (
    <Container
      image
      heading="Apply Now"
      para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners."
    >
      <div className="w-[80%] mx-auto flex items-center justify-center md:my-20 my-8  ">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 w-full">
          <ApplyNowCard />
          <ApplyNowForm />
        </div>
      </div>
    </Container>
  );
};

export default ApplyNow;