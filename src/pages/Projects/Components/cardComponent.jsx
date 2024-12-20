import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { projectCardData } from "../../../utils/DummyData";
import { useEffect, useState } from "react";

const ProjectsCardComponent = ({ setIsModalOpen, isModalOpen }) => {
  const navigation = useNavigate();
const [visibleCards, setVisibleCards] = useState([]);
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
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div>
      <div className="bg-Navbar">
        <div className="w-[80%] mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectCardData.map((item, ind) => {
              return (
                <div
                  key={ind}
                  id={`card-${ind}`}
                  className={`rounded-lg card group shadow-md flex flex-col cursor-pointer ${
                    visibleCards.includes(`card-${ind}`) ? "visible" : "" 
                  } `}
                >
                  <div className="relative">
                    <img
                      className="w-full h-[180px] rounded-t-2xl object-cover group-transition group-duration-300 group-ease-in-out group-hover:scale-110 group-hover:duration-200"
                      src={item.image}
                      alt={item.image}
                      draggable={false}
                    />

                    {/* centered Text */}
                    {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading4">
                      {item.text}
                    </p> */}

                    {/* Logo positioned half on the image and half below it */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center bg-white rounded-xl shadow-black shadow-xs">
                      <img
                        className="rounded-lg p-2 object-contain w-[50px] h-[50px]"
                        src={item.logo}
                        alt={item.logo}
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-BackgroundColor1 ">
                    <p className=" w-[100%] mx-auto rounded-xl md:py-4 py-2  text-black text1 ">
                      {item.text.slice(0, 26)}...
                    </p>

                    <p className="text-text6 text3 ">
                      {item.description}
                    </p>
                    <div className="md:mt-4 mt-2 flex items-center justify-center  rounded-md">
                      <div className=" w-full">
                        {/* <Link
                          to={{
                            pathname: `/detail/${item?.id}`,   
                          }}
                        >
                          
                        </Link> */}
                        <Button
                          btnStyle="bg-backgroundColor1 w-full  text2 text-backgroundColor6 lg:font-semibold "
                          title="Learn More"
                          onclick={() => { setIsModalOpen(!isModalOpen) }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardComponent;