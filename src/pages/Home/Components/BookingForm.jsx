import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";

export default function BookingForm(props) {
  const { title } = props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // reset Form data start
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
    })
    // reset Form data end
  };



  return (
    <section className="w-[80%] mx-auto p-6 my-6 ">
      <div className="border rounded-md bg-[#D8EEFB] md:px-6 px-2 md:py-8 py-4">
        <h4 className="text-[18px] text-[#000] font-medium leading-none ">
          {title}
        </h4>
        <form onSubmit={handleSubmit} className="mt-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-x-2 gap-x-1 md:gap-y-8 gap-y-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="lg:h-[70px] md:h-[40px] h-[30px] w-full rounded-md border border-gray-400 bg-transparent py-1 md:px-6 px-2 md:text-base font-medium text-1 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="lg:h-[70px] md:h-[40px] h-[30px] w-full rounded-md border border-gray-400 bg-transparent py-1 md:px-6 px-2 md:text-base font-medium text-1 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="lg:h-[70px] md:h-[40px] h-[30px] w-full rounded-md border border-gray-400 bg-transparent py-1 md:px-6 px-2 md:text-base font-medium text-1 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="lg:h-[70px] md:h-[40px] h-[30px] w-full rounded-md border border-gray-400 bg-transparent py-1 md:px-6 px-2 md:text-base font-medium text-1 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <Button
            btnStyle="h-[70px] bg-backgroundColor1 text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold h-full"
            title="Book Appointment"
          />
        </form>
      </div>
    </section>
  );
}
