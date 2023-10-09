import React from 'react'
import cls from 'classnames'

const Button = ({ text, style = "w-full bg-[#095494] text-white" }) => {
  return (
    <button className={cls('text-center  block rounded-md py-3 px-4 my-2', style)}>{text}</button>

  )
}

export default Button