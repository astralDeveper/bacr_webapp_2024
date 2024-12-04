import React from "react";
import Container from "../../components/Container";

import { IMAGES } from "../../utils/Images";
import Cart from "./Components/Cart";

const Blog = () => {
  return (
    <Container>
      <div className="max-w-[80%] mx-auto py-12 font-poppins">
        <div className="grid grid-cols-2 gap-4">
          <Cart />
          {/* <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart /> */}
        </div>
      </div>
    </Container>
  );
};

export default Blog;

{
  /* <Card
  className="max-w-sm rounded-2xl object-cover p-4"
  imgSrc={IMAGES.BLOG1}
  horizontal
>
  <h5 className="heading5 text-text9 font-bold tracking-tight">
    Name of the Blog
  </h5>
  <p className="text1 text-text10 leading-5">
    Trust us to deliver reliable solutions, exceptional service, and peace of
    mind for all your HVAC needs.
  </p>
  <button className="heading7 bg-backgroundColor9 text-white rounded-md py-2">
    Continue reading
  </button>
</Card>; */
}
