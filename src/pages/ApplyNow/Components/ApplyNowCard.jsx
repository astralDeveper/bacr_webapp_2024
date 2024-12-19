import React, { useEffect, useState } from "react";
import { ApplyNowData, data } from "../../../utils/DummyData";
import { fetchJobs } from "../../../api";

const ApplyNowCard = () => {
  // get api job
  const [jobs, setJobs] = useState([]);
  const fetchJobsb = async () => {
    try {
        const response = await fetchJobs();
        setJobs(response.jobs);
        
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
      fetchJobsb();
  }, []);
  return (
    <div className="w-full lg:pr-10">
      <div>
        <div className="flex items-start justify-between">
          <h1 className="heading5 leading-6 text-text4 font-semiBold">
            HVAC Technician dd
          </h1>
          <p className="text2 text-text8 font-bold">Job Type: Full Time</p>
        </div>
        <p className="text2 text-text9 lg:pt-4 pt-2">{data}</p>
      </div>
      <div>
        {jobs?.map((items, ind) => (
          <div key={ind}>
            <h1 className="heading6  text-text4">{items.heading}</h1>
            {items.Description.map((item, i) => (
              <div className="flex items-center py-2 gap-3" key={i}>
                <img
                  className="lg:w-4 md:w-3 sm:w-2 w-2 object-contain"
                  src={item.img}
                  alt={item.img}
                />
                <p className="text2  text-text9">{item.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyNowCard;
