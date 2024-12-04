import React from 'react'

const Button = ({title,btnStyle}) => {
  return (
    <>
    <button className={`${btnStyle} rounded-md w-full  text1 px-[28px] py-[12px] font-medium`} >{title}</button>
    </>
  )
}

export default Button