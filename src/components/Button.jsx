import React from 'react'

const Button = ({title,btnStyle}) => {
  return (
    <>
    <button className={`rounded-md px-[28px] py-[12px] font-medium ${btnStyle}`} >{title}</button>
    </>
  )
}

export default Button