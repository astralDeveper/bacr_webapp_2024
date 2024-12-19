import React, { useEffect, useState } from "react";
import { AboutCardData } from "../../../utils/DummyData";
import { fetchTeams } from "../../../api";
import { IMAGES } from "../../../utils/Images";

const AboutCard = () => {

  const [visibleCards, setVisibleCards] = useState([]);
  const [teams, setTeams] = useState([]);
    const fetchProjectsb = async () => {
        
    try {
        const response = await fetchTeams();
        setTeams(response);     
           
    } catch (error) {
        console.error("Error fetching products:", error);
    }
    };
    useEffect(() => {
        fetchProjectsb(); // Fetch brands once
    }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.id]); // Mark card as visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 50% of the card is visible
      }
    );

    // Observe each card element
    const cards = document.querySelectorAll(".pcard");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [teams]);




  return (
    <>
      <div className="w-[80%] mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 flex items-center justify-center flex-col gap-6 ">
          <p className="heading3 md:w-[80%] text-center text-text12 " >Meet the Experts Behind Your Fresh
            Air Solutions.</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-8">
          {teams.map((item, ind) => {
            return (
              <div
                key={ind}
                id={`pcard-${ind}`}
                className={`relative pcard flex flex-col ${visibleCards.includes(`pcard-${ind}`) ? "visible" : ""
                            }  `}
              >
                {/* workers images start */}
                <div className=" flex items-center justify-center ">
                  <img
                    className=" object-contain"
                    src={item?.imagePath ? item?.imagePath : IMAGES.THUMBNAIL}
                    alt={item.img}
                    draggable={false}
                  />
                </div>
                {/* workers images start */}

                {/* Social media icons start  */}
                {/* <div className="absolute -right-5 top-8 bg-white shadow-shadow2 rounded-3xl px-2 py-3 flex flex-col gap-2 ">
                  <img
                    className="w-8 object-contain"
                    src={item.socialIcon}
                    alt={item.socialIcon}
                  />
                  <img
                    className="w-8"
                    src={item.socialIcon2}
                    alt={item.socialIcon2}
                  />
                  <img
                    className="w-8"
                    src={item.socialIcon3}
                    alt={item.socialIcon3}
                  />
                </div> */}
                {/* Social media icons end  */}

                {/* content start here */}
                <div className=" bg-backgroundColor14 md:py-6 py-4 text-center">
                  <p className="text1 font-semibold mx-auto text-text9">
                    {item.name}
                  </p>
                  <p className="text2 text-text12">{item.destination}</p>
                </div>
                {/* content start here */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutCard;