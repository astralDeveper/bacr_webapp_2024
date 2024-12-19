import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import { createAppointment } from "../../../api";

export default function BookingForm(props) {
  const { id, title,ref } = props;

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const app=await createAppointment(formData);
    // console.log('Form Data:', formData);
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
    <section id={id} className="md:w-[80%] mx-auto pb-10">
      <div className="border rounded-md bg-[#D8EEFB] md:px-6 px-2 md:py-8 py-4">
        <h4 className="text-[18px] text-[#000] font-medium leading-none ">
          {title}
        </h4>
        <form onSubmit={handleSubmit} className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2 ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="md:py-3 md:px-3 py-1 px-2 rounded-md border border-gray-400 bg-transparent text2  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="md:py-3 md:px-3 py-1 px-2 rounded-md border border-gray-400 bg-transparent text2  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="md:py-3 md:px-3 py-1 px-2 rounded-md border border-gray-400 bg-transparent text2  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <input
            type="date"
            name="date"
            id="date"
            min={new Date().toISOString().split("T")[0]} 
            value={formData.date}
            onChange={handleChange}
            className="md:py-3 md:px-3 py-1 px-2 rounded-md border border-gray-400 bg-transparent text2  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />

          <Button
          type="submit"
            btnStyle=" bg-backgroundColor1 text3 rounded-md text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold h-full"
            title="Book Appointment"
          />
        </form>
      </div>
    </section>
  );
}
