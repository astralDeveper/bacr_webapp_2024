import React from "react";
import { Card } from "flowbite-react";
import { IMAGES } from "../../../utils/Images";

const Cart = () => {
  return (
    <Card
      className="max-w-sm rounded-2xl object-cover p-4"
      imgSrc={IMAGES.BLOG1}
      horizontal
    >
      <h5 className="heading6 text-text9 font-bold tracking-tight">
        Name of the Blog
      </h5>
      <p className="text2 text-text10 leading-5">
        Trust us to deliver reliable solutions, exceptional service, and peace
        of mind for all your HVAC needs.
      </p>
      <button className="heading7 bg-backgroundColor9 text-white rounded-md py-2">
        Continue reading
      </button>
    </Card>
  );
};

export default Cart;
