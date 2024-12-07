import React, { useState } from "react";
import Container from "../../components/Container";
import {
  OverviewData,
  CompanyProfileData,
  OurBrandsData,
  MeetParaData,
  OurBrandsImagesData,
} from "../../utils/DummyData";
import Overview from "./components/Overview";
import CompanyProfile from "./components/CompanyProfile";
import OurBrands from "./components/OurBrands";
import Meet from "./components/Meet";
import { IMAGES } from "../../utils/Images";
import CertifiedAchievements from "./components/CertifiedAchievements";
import AboutCard from "./components/AboutCard";

const About = () => {
  return (
    <Container
      heading={"About Us."}
      para={`Providing high-quality HVACR products, services, and solutions 
backed by industry-leading partners.`}
      about
      image
      mainStyle={"flex flex-col items-end justify-end text-start "}
    >
      <main className="">
        <Overview
          subTitle="About Us"
          title="The Company Overview"
          para="Established in 2004, Brothers Air Conditioning has emerged 
          as a  leading brand in the HVACR industry, known for its dedication to  
          delivering top-quality chillers that are customized to meet diverse  environmental and client-specific needs. The company has built a  strong reputation for excellence, supported by its expansive  inventory of OEM spare parts for various leading brands, ensuring  swift and reliable service for clients"
          card={OverviewData}
        />
        <CompanyProfile
          subTitle="About Us"
          title="Our Company Profile"
          para={CompanyProfileData}
        />
        <Meet
          profile={IMAGES.CEOMEET}
          name="Humair Ahmed"
          des="CEO & Founder"
          title="Meet Our CEO"
          para={MeetParaData}
        />
        <AboutCard />
        <OurBrands
          title="Brands We Are Offering"
          images={OurBrandsImagesData}
        />
        <div>
          <div className='flex items-center justify-center'>
            <p className='heading2 md:w-[68%] w-full text-center text-text12'>Discover a Legacy of Excellence with Our Certified Achievements</p>
          </div>
          <CertifiedAchievements />
        </div>
      </main>
    </Container>
  );
};

export default About;
