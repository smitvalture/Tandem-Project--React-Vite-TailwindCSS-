import React from 'react'

const Input = ({type, name, placeholder}) => {
  return (
    <div><input
    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide "
    type={type}
    name={name}
    required
    placeholder={placeholder}
  /></div>
  )
}

export default Input