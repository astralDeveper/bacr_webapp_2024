import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { serviceCardData } from "../../../utils/DummyData";
import { useEffect, useState } from "react";

const CardComponent = () => {
  const setTitle = (text) => {
    localStorage.setItem('title', text)
  }



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
    <>

      <div className="w-[80%] mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCardData.map((item, ind) => {
            return (
              <Link to={`/services-detail?type=${item.text}`} className="w-full" >
                <div
                  key={ind}
                  id={`card-${ind}`} // Set unique id for each card
                  className={`card rounded-lg overflow-hidden group shadow-md flex flex-col ${visibleCards.includes(`card-${ind}`) ? "visible" : ""
                    }`}
                >
                  <div className="relative">
                    <img
                      className="w-full h-[180px] rounded-t-2xl object-cover group-transition group-duration-300 group-ease-in-out group-hover:scale-110 group-hover:duration-200 "
                      src={item.image}
                      alt={item.image}
                      draggable={false}
                    />

                    {/* centered Text */}
                    {/* <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading7 font-semibold">
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
                  <p className="pl-3 w-[100%] mx-auto rounded-xl text-black md:mt-8 mt-4 heading7 font-semibold">
                    {item.text}
                  </p>
                  <div className="p-3 bg-BackgroundColor1">
                    <p className="text-text6 text3 text-start">
                      {item.description.slice(0, 90)}...
                    </p>
                    <div className="mt-6 flex items-center justify-center  rounded-md">

                      <Button
                        btnStyle="bg-backgroundColor1 w-full rounded-md text2 text-backgroundColor6 lg:font-semibold "
                        title={"Learn More"}
                        onclick={() => { setTitle(item.text) }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardComponent;