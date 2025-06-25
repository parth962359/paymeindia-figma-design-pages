import React from 'react'

interface Buttonprops{
    variant:"primary"|"secondary";
    text:string;
    endicon?:React.ReactElement;
    onclick?:()=>void;
}
const variantstyles={
    primary:"bg-[#FC6603] text-white ",
    secondary:"bg-white text-[#FC6603] border-[1px] border-[#FC6603] hover:bg-[#FC6603] hover:text-white  duration-300"
}

export const Button = ({variant,text,endicon,onclick}:Buttonprops) => {
  return (
    <button onClick={onclick} className={variantstyles[variant] + " w-full max-w-[356px] min-w-[0] h-[44px] sm:h-[48px] rounded-md flex justify-center items-center gap-2 text-[16px] sm:text-[18px] mx-auto"}>
        <div className='flex items-center justify-center'>
        {text}
        </div>
        {endicon}
    </button>
  )
}
