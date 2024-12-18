import React, { useEffect, useState } from "react";
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
import { fetchCertificates } from "../../api";

const About = () => {
  const [certificates, setCertificates] = useState([]);
  const fetchCertificatesb = async () => {
        
    try {
        const response = await fetchCertificates();
        setCertificates(response);     
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
      fetchCertificatesb(); // Fetch brands once
    }, []);


  return (
    <Container
      heading={"About Us"}
      //       para={`Providing high-quality HVACR products, services, and solutions 
      // backed by industry-leading partners.`}
      about
      image
      mainStyle={"flex flex-col items-end justify-end text-start "}
    >
      <main className="">
        <Overview
          subTitle="About Us"
          title="The Company Overview"
          para="At Brothers Air Conditioning, we pride ourselves on being a trusted leader in the HVACR industry. With decades of experience, we specialize in delivering cutting-edge heating, ventilation, air conditioning, and refrigeration solutions tailored to meet the diverse needs of our clients.
Our mission is to provide high-quality products and services that prioritize energy efficiency, sustainability, and customer satisfaction. By combining technical expertise with a customer-centric approach, we ensure every project is completed with precision, reliability, and a commitment to excellence.
"
          card={OverviewData}
        />
        <CompanyProfile
          subTitle="About Us"
          title="Our Company Profile"
          CompanyProfileData={CompanyProfileData}
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
            <p className='heading5 md:w-[68%] w-full text-center text-text12'>Discover a Legacy of Excellence with Our Certified Achievements</p>
          </div>
          <CertifiedAchievements certificates={certificates} />
        </div>
      </main>
    </Container>
  );
};

export default About;
