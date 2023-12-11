import React from 'react'
import Profil_Icon from './Profil_Icon'
const HomeHeader = () => {
  return (
    <header className='flex justify-between h-16 md:justify-end items-center px-5 gap-4'>
     <div className="flex gap-4">
      <span className='text-black/[0.87] text-[13px] cursor-pointer hover:underline'>Gmail</span>
      <span className='text-black/[0.87] text-[13px] cursor-pointer hover:underline'>Image</span>
     </div>
     <Profil_Icon/>
    </header>
  )
}

export default HomeHeader
