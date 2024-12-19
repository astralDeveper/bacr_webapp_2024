import React from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../components/Button";
import { addJob } from "../../../api";

const ApplyNowForm = () => {
  // post api 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value, // For file input, take the first file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    if (formData.cv) data.append("resumes", formData.cv);

    try {
      const response = await addJob(data);

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="bg-gradient-to-tr from-backgroundColor3 to-backgroundColor4 rounded-lg shadow-lg p-6 lg:w-[537px]  w-[100%] h-full ">
      <h2 className="heading4 text-backgroundColor2 text-center font-semibold">
        Join Our Team
      </h2>
      <form className="w-full" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="text-backgroundColor2 heading7">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg focus:outline-none placeholder:text1 placeholder:text-text10 text1 "
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="phone" className="text-backgroundColor2 heading7">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Your phone number"
          className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text1 placeholder:text-text10 text1 "
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="text-backgroundColor2 heading7">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text1 placeholder:text-text10 text1 "
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="cv" className="text-backgroundColor2 heading7">
          Upload CV
        </label>
        <div className="bg- rounded-lg p-2 text-center bg-backgroundColor2  mt-1">
          <img
            src={IMAGES.CLIPBOARD}
            alt="Upload"
            className="w-[39px] mx-auto"
          />
          <span className="text2 text-text4 ">
            Drag file and{" "}
            <span className="font-bold underline" id="files">
              Browse
            </span>
          </span>
          <p className="text2 text-text10">Format: PDF, max size: 25MB</p>
          <input
            type="file"
            className="sr-only"
            id="cv"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        title={"Submit to Apply"}
        type={"submit"}
        btnStyle={
          "bg-backgroundColor1 w-full text-backgroundColor2 heading7 rounded-lg "
        }
      />
    </form>
    </div>
  );
};

export default ApplyNowForm;
