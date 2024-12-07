import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";

export default function BookingForm(props) {
  const { title } = props;

  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 my-6 ">
      <div className="border rounded-md bg-[#D8EEFB] px-6 py-8">
        <h4 className="text-[18px] text-[#000] font-medium leading-none ">
          {title}
        </h4>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-8">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="h-[70px] w-full rounded-md border border-gray-400 bg-transparent py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="h-[70px] w-full rounded-md border border-gray-400 bg-transparent py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="h-[70px] w-full rounded-md border border-gray-400 bg-transparent py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <input
            type="date"
            name="date"
            id="date"
            className="h-[70px] w-full rounded-md border border-gray-400 bg-transparent py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <Button
            btnStyle="h-[70px] bg-backgroundColor1 text-sm text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold h-full"
            title="Book Appointment"
          />
        </div>
      </div>
    </section>
  );
}
