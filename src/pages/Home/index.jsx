import React, { useState } from "react";
import Container from "../../components/Container";
import OurProducts from "./Components/OurProducts";
import OurPartner from "./Components/OurPartner";
import OurClient from "./Components/OurClient";
import TrustUs from "./Components/TrustUs";
import OurBlog from "./Components/OurBlog";
import WhatWeDo from "./Components/WhatWeDo";
import {
  WhatWeDoData,
  OurPartnerImagesData,
  OurClientImagesData,
  TrustUsCardData,
  TrustUsCarouselCardData,
  OurBlogCardData,
  OurProductsData,
} from "../../utils/DummyData";
import BookingForm from "./Components/BookingForm";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  // carousel props
  const OPTIONS = {};

  const scrollToElement = () => {
    const element = document.getElementById("bookingForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container
      heading={"Innovative HVACR Solutions for a Comfortable Tomorrow."}
      para={
        "Providing high-quality HVACR products, services, and solutions backed by industry-leading partners."
      }
      home={
        <div className="flex gap-4">
          <div className="flex  lg:gap-10 md:gap-6 gap-4 lg:flex-row md:flex-row flex-col lg:mt-10 md:mt-4 mt-4  ">
            <Link to={"/products"} className="">
              <Button
                className=""
                btnStyle="bg-backgroundColor2 w-full rounded-md text2"
                title={"Explore Our Products"}
              />
            </Link>
          </div>
          <div className="flex  lg:gap-10 md:gap-6 gap-4 lg:flex-row md:flex-row flex-col lg:mt-10 md:mt-4 mt-4  ">
            <Button
              className=""
              btnStyle="bg-backgroundColor2 w-full rounded-md text2"
              title={"Book Now"}
              onclick={scrollToElement}
            />
          </div>
        </div>
      }
      image
      mainStyle={"flex flex-col items-end justify-end text-start "}
      id="book"
    >
      {/* <main className=""> */}
      <WhatWeDo card={WhatWeDoData} title="What We Do" subTitle="What we do" />
      <OurProducts
        title="Our Products"
        slides={OurProductsData}
        options={OPTIONS}
      />
      <OurPartner title="Our Partner" images={OurPartnerImagesData} />

      <OurClient title="Our Client" images={OurClientImagesData} />
      {/* <OurClient images={OurClientImagesData} /> */}

      <TrustUs
        title="Why Trust Us"
        subTitle="Top 4 Reasons"
        para="Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu
          culpa ut irure nisi occaecat dolore adipisicing do pariatur."
        card={TrustUsCardData}
        carouselCard={TrustUsCarouselCardData}
      />
      <OurBlog
        title="Our Blogs"
        subTitle="Blogs"
        para="We specialize in providing top-quality HVACR solutions, offering everything 
          from installation to maintenance, and even consulting services for businesses in need of expert guidance."
        card={OurBlogCardData}
      />
      <div id="bookingForm">
        <BookingForm title="Book an Appointment" id="bookingForm" />
      </div>
      {/* </main> */}
    </Container>
  );
};

export default Home;
