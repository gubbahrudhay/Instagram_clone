import React from 'react'
import { useState } from 'react';
import insta from "../assets/insta.svg"
import house from "../assets/house.svg"
import {SquarePlay , Send , Search , Compass , Heart , Plus , Menu, Sidebar } from 'lucide-react';
import "../index.css"

const Side = () => {
  const [ishovered, sethovered] = useState(false);
  const handleMouseEnter = ()=>{sethovered(true)};
  const handleMouseLeave = () => {sethovered(false)}


  return (
    // with only icons the width is w-18
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`cursor-pointer menu bg-black h-screen flex flex-col justify-between fixed font-[system-ui] transition-all ease-in duration-2000 `}>

      <div>
        <img src={insta} alt="Instagram" className={'w-7 h-7 ml-5 mt-8'}/>
      </div>
      
      <div className='flex flex-col flex-1 justify-center'>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',padding:'30px 20px',fontSize:'18px',color:'white'}}>
          <img src={house} alt="house" className='w-7 h-7 mr-2' />
          <span className={`${ishovered ? '' : 'hidden'}`}>Home</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <SquarePlay color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered ? '' : 'hidden'}`}>Reels</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <Send color='white' className='w-7 h-7 mr-2'/><span className={`${ishovered ? '' : 'hidden'}`}>Messages</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <Search color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered ? '' : 'hidden'} p-0 m-0`}>Search</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <Compass color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered ? '' : 'hidden'}`}>Explore</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <Heart color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered ? '' : 'hidden'}`}>Notifications</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px'}}>
          <Plus color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered ? '' : 'hidden'}`}>Create</span>
        </div>

      </div>

      <div className='h-15  w-full ml-6'>
        <Menu color='white'/>
      </div>

    </div>
    
  )
}

export default Side