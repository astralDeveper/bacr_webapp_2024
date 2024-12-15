import React from "react";
import Container from "../../components/Container";
import JoinOurTeamForm from "./components/JoinOurTeamForm ";
import CareerCard from "./components/Card";

const Career = () => {
  return (
    <Container
      image
      heading="Career"
      para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners."
    >
      <div className="grid grid-cols-12  md:w-[80%] w-[90%] mx-auto my-12 gap-6">
        <div className="col-span-12 xl:col-span-8 ">
          <CareerCard />
        </div>
        <div className="col-span-12 xl:col-span-4 ">
          <JoinOurTeamForm />
        </div>
      </div>
    </Container>
  );
};

export default Career;
