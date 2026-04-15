import React from 'react'
import insta from "../assets/insta.svg"
import house from "../assets/house.svg"
import {SquarePlay , Send , Search , Compass , Heart , Plus , Menu, Sidebar } from 'lucide-react';
import "../index.css"

const Side = () => {
  return (
    <div className='left bg-black h-screen w-18 flex flex-col fixed'>

      <div>
        <img src={insta} alt="Instagram" className='w-8 h-8 ml-5 mt-8' />
      </div>
      

      <div className='flex flex-col gap-11 items-center justify-center flex-1'>

        <img src={house} alt="house" className='w-6 h-6' />

        <SquarePlay color='white' className='w-8 h-8'/>
        <Send color='white' className='w-8 h-8'/>
        <Search color='white' className='w-8 h-8'/>
        <Compass color='white' className='w-8 h-8'/>
        <Heart color='white' className='w-8 h-8'/>``
        <Plus color='white' className='w-8 h-8'/>

      </div>

      <div className='h-15  w-full flex justify-center'>
        <Menu color='white'/>
      </div>

    </div>
    
  )
}

export default Side