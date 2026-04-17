import React from 'react'
import { useState } from 'react';
import insta from "../assets/insta.svg"
import house from "../assets/house.svg"
import {SquarePlay , Send , Search , Compass , Heart , Plus , Menu, Sidebar } from 'lucide-react';
import "../index.css"
import SearchPanel from './SearchPanel';

const Side = () => {
  const [ishovered, sethovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isSearchOpen) sethovered(true);
  };
  const handleMouseLeave = () => sethovered(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) sethovered(false);
  };

  return (
    <>
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`menu bg-[rgb(11,16,20)] h-screen flex flex-col justify-between fixed font-[system-ui] transition-[width] ease-in-out z-50 ${isSearchOpen ? 'border-r border-[#262626]' : ''}`}>

      <div>
        <img src={insta} alt="Instagram" className={'w-7 h-7 ml-5 mt-8'}/>
      </div>
      
      <div className='flex flex-col flex-1 justify-center'>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',padding:'30px 20px',fontSize:'18px',color:'white',borderRadius:"10px"}}>
          <img src={house} alt="house" className='w-7 h-7 mr-2' />
          <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Home</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px"}}>
          <SquarePlay color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Reels</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px"}}>
          <Send color='white' className='w-7 h-7 mr-2'/><span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Messages</span>
        </div>
        <div onClick={toggleSearch} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <Search color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'} p-0 m-0`}>Search</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px"}}>
          <Compass color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Explore</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px"}}>
          <Heart color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Notifications</span>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px"}}>
          <Plus color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen ? '' : 'hidden'}`}>Create</span>
        </div>

      </div>

      <div className='h-15  w-full ml-6'>
        <Menu color='white'/>
      </div>

    </div>
    </>
  )
}

export default Side