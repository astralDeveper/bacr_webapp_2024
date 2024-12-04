import React from 'react'

const Button = ({title,btnStyle,onclick,type}) => {
  return (
    <>
    <button className={`px-[28px] py-[12px] font-medium ${btnStyle}`} type={type} onClick={onclick} >{title}</button>
    </>
  )
}

export default Button