import React from "react";

const Button = ({ title, btnStyle, onclick, type, img }) => {
  return (
    <>
      <button
        className={`lg:px-[28px] md:px-[14px] px-[9px] py-[6px] lg:py-[12px] font-medium ${btnStyle}`}
        type={type}
        onClick={onclick}
      >
        {img && 
        <img className="w-4" src={img} alt={img} />
        }
        {title}
      </button>
    </>
  );
};

export default Button;