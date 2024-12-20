import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function OurProducts(props) {
  const { title } = props;
  const { slides, options } = props;
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };



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
    const cards = document.querySelectorAll(".pcard");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);



  return (
    <section className="sm:max-w-[80%] sm:mx-auto p-6 ">
      <h2 className="outfit-font text-[18px] sm:text-[26px] lg:text-[34px] font-bold text-center text-[#031019]">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {slides.map((item, ind) => (
          <Link
            to={{
              pathname: `/detail/${item?.id}`,
            }}
            className='w-full'
          >
            <div
              key={ind}
              id={`pcard-${ind}`}
              className={`w-full pcard group p-6 rounded-xl shadow-md ${clickedIndex === ind
                ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                : "bg-backgroundColor9"
                } cursor-pointer ${visibleCards.includes(`pcard-${ind}`) ? "visible" : ""
                }  `}
              onClick={() => handleClick(ind)}>
              <img
                src={item.images}
                alt={item.productName}
                className="w-[150px] h-auto mb-4 mx-auto group-transition group-duration-300 group-ease-in-out group-hover:scale-110 group-hover:duration-200"
              />
              <div className="flex items-center justify-between mt-8">
                <p className="text1 font-semibold">{item.productName}</p>
                <div className="flex items-center gap-2 text2">
                  <span>12</span>
                  <img src={clickedIndex === ind ? item.iconwhite : item.icon} alt="icon" className="w-4" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text2">
                  Model No: <span className="font-bold text2">{item.modelno}</span>
                </p>
                <p className="text2">
                  Brands Name: <span className="font-bold text2">{item.brands}</span>
                </p>
              </div>
              <div className="md:mt-6 mt-4 flex items-center justify-center">


                <Button
                  btnStyle={`rounded-md w-full text2 ${clickedIndex === ind
                    ? "bg-backgroundColor2 text-backgroundColor1"
                    : "text-backgroundColor6 bg-backgroundColor1"
                    } font-semibold`}
                  title="Visit Store"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to={"/products"} className="flex justify-center py-4">
        <Button
          btnStyle="bg-backgroundColor1 rounded-md w-[250px] text2 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 font-semibold"
          title={"See All Products"}
        />
      </Link>
    </section>
  );
}


// <div
//   key={ind}
//   className={`mt-4 lg:max-w-[370px] lg:max-h-[471px] p-6 rounded-xl shadow-md ${clickedIndex === ind
//     ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
//     : "bg-backgroundColor9"
//     } cursor-pointer`}
//   onClick={() => handleClick(ind)}
// >
//   <img
//     src={item.images}
//     alt={item.productName}
//     className="lg:w-[289px] md:w-[200px] w-[150px] h-auto mb-4 mx-auto"
//   />
//   <div className="flex items-center justify-between">
//     <p className="heading5">{item.productName}</p>
//     <div className="flex items-center gap-2 text1">
//       <span>12</span>
//       <img src={item.icon} alt="icon" className="md:w-6 w-4" />
//     </div>
//   </div>
//   <div className="mt-2">
//     <p className="text1">
//       Model No: <span className="font-bold text1">{item.modelno}</span>
//     </p>
//     <p className="text1">
//       Brands Name: <span className="font-bold text1">{item.brands}</span>
//     </p>
//   </div>
//   <div className="md:mt-6 mt-4 flex items-center justify-center">

//     <Link
//       to={{
//         pathname: `/detail/${item?.id}`,
//       }}
//     >

//       <Button
//         btnStyle={`rounded-md w-full text1 ${clickedIndex === ind
//           ? "bg-backgroundColor2 text-backgroundColor1"
//           : "text-backgroundColor6 bg-backgroundColor1"
//           } font-semibold`}
//         title="Product Inquiry"
//       />
//     </Link>
//   </div>
// </div> 