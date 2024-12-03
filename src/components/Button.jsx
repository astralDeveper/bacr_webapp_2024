import React from 'react'

const Button = ({title,btnStyle,onclick}) => {
  return (
    <>
    <button className={`rounded-md px-[28px] py-[12px] font-medium ${btnStyle}`} onClick={onclick} >{title}</button>
    </>
  )
}

export default Button