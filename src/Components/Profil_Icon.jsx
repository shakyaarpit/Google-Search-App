import React from 'react'
import { TbGridDots } from "react-icons/tb";
import arpit1 from '../assets/arpit1.jpg'
const Profil_Icon = () => {
  return (
    <div className='flex gap-2'>
      <span className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/[0.2]'>
        <TbGridDots size={20} color='#5f6368'/>
      </span>
      <span >
       <img className='h-10 w-10 rounded-full' src={arpit1} alt="" />
      </span>
    </div>
  )
}

export default Profil_Icon
