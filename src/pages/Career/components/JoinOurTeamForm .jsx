import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { IMAGES } from "../../../utils/Images";
import { createCareer, fetchDepartments } from "../../../api";

const JoinOurTeamForm = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [visibleText, setVisibleText] = useState([]);
    const [dep, setDep] = useState([]);
    const [formData, serformData]=useState({
        name:"",
        phone:"",
        email:"",
        department:"",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        serformData({
          ...formData,
          [name]: type === "file" ? files[0] : value, // Store the file if input type is file
        });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData();
          data.append("name", formData.name);
          data.append("phone", formData.phone);
          data.append("email", formData.email);
          data.append("department", formData.department);
          data.append("resume", formData.resume);
        await createCareer(data);
        serformData({
            name:"",
            phone:"",
            email:"",
            department:"",
            resume: null,
        });
      };
    
    
    const fetchDepartmentsb = async () => {
        try {
            const response = await fetchDepartments();
            setDep(response);
            
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        };
    useEffect(() => {
        fetchDepartmentsb();
      }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains("ltr")) {
                            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                        if (entry.target.classList.contains("rtl")) {
                            setVisibleText((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );

        const cards = document.querySelectorAll(".ltr");
        const texts = document.querySelectorAll(".rtl");

        cards.forEach((card) => observer.observe(card));
        texts.forEach((text) => observer.observe(text));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
            texts.forEach((text) => observer.unobserve(text));
        };
    }, []);
    return (

        <div id={`rtl`} className={` rtl ${visibleText.includes(`rtl`) ? "visible" : ""}  bg-gradient-to-tr from-backgroundColor3 to-backgroundColor4 rounded-lg shadow-lg p-6 lg:w-[537px]  w-[100%] h-full `}>
            <h2 className="heading6 text-backgroundColor2 text-center font-semibold">
                Join Our Team
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-2">
                    <label htmlFor="name" className="text-backgroundColor2 text1 font-semiBold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Your name"
                        className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg focus:outline-none placeholder:text2 placeholder:text-text10 text2 "
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="text-backgroundColor2 text1 font-semiBold">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        placeholder="Your phone number"
                        className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text2 placeholder:text-text10 text2 "
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="text-backgroundColor2 text1 font-semiBold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Your email"
                        className="block w-full py-2 pl-4 lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text2 placeholder:text-text10 text2 "
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="department"
                        className="text-backgroundColor2 heading7 "
                    >
                        Department
                    </label>
                    <select
                        onChange={handleChange}
                        value={formData.department}
                        id="department"
                        name="department"
                        className="block w-[100%] lg:p-[16px] mt-1 rounded-lg outline-none placeholder:text1 placeholder:text-text10 text1 "
                        >
                        <option >Select Department</option>
                        {dep.map((item, index) => (
                            <>
                            <option key={index} value={item?._id}>{item?.name}</option>
                            </>
                            ))}
                            {/* <option>Development</option>
                        <option>Marketing</option>
                        <option>HR</option> */}
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="upload-cv"
                        className="text-backgroundColor2 text1 font-semiBold">
                        Upload CV
                    </label>
                    <div className="bg- rounded-lg p-2 text-center bg-backgroundColor2 mt-1">
                        <img
                            src={IMAGES.CLIPBOARD}
                            alt="clipboard"
                            className="w-[28px] mx-auto"
                        />
                        <span className="text2 text-text4">
                            Drag file and{" "}
                            <label
                                htmlFor="fileInput"
                                className="font-bold text3 underline cursor-pointer"
                            >
                                Browse
                            </label>
                        </span>
                        <p className="text3 text-text10">
                            Format: PDF, max size: 25MB
                        </p>
                        <input
                            type="file"
                            className="sr-only"
                            id="fileInput"
                            accept=".pdf"
                            name="resume"
                            onChange={handleChange}

                        />
                    </div>

                </div>

                <Button
                    title={"Submit to Apply"}
                    type={"submit"}
                    btnStyle={
                        "bg-backgroundColor1 w-full text-backgroundColor2 text1 rounded-lg "
                    }
                />
            </form>
        </div>

    );
};

export default JoinOurTeamForm;
