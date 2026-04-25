import React from 'react'
import { useState } from 'react';
import insta from "../assets/insta.svg"
import house from "../assets/house.svg"
import {SquarePlay , Send , Search , Compass , Heart , Plus , Menu, Sidebar } from 'lucide-react';
import "../index.css"
import SearchPanel from './SearchPanel';
import Messages from './Messages';

import Notification from './Notification';

const Side = ({ setActiveTab }) => {
  const [ishovered, sethovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isSearchOpen && !isNotificationOpen) sethovered(true);
  };
  const handleMouseLeave = () => sethovered(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNotificationOpen(false);
    if (!isSearchOpen) sethovered(false);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsSearchOpen(false);
    if (!isNotificationOpen) sethovered(false);
  };

  return (
    <>
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}/>
      <Notification isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)}/>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`menu bg-[rgb(11,16,20)] ${ishovered && !isSearchOpen && !isNotificationOpen ? 'w-[244px]' : 'w-[72px]'} h-screen flex flex-col justify-between fixed font-[system-ui] transition-all duration-300 ${isSearchOpen || isNotificationOpen ? 'border-r border-[#262626]' : ''} z-50 overflow-hidden`}>

      <div>
        <img src={insta} alt="Instagram" className={'w-7 h-7 ml-5 mt-8'}/>
      </div>
      
      <div className='flex flex-col flex-1 justify-center'>
        <div onClick={() => setActiveTab && setActiveTab('home')} style={{display:'flex',flexDirection:'row',alignItems:'center',padding:'30px 20px',fontSize:'18px',color:'white',borderRadius:"10px", cursor: 'pointer'}}>
          <img src={house} alt="house" className='w-7 h-7 mr-2' />
          <span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'}`}>Home</span>
        </div>

        <div onClick={() => setActiveTab && setActiveTab('reels')} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <SquarePlay color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'}`}>Reels</span>
        </div>

        <div onClick={() => { setActiveTab && setActiveTab('messages'); setIsSearchOpen(false); setIsNotificationOpen(false); }} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <Send color='white' className='w-7 h-7 mr-2'/><span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'}`}>Messages</span>
        </div>

        <div onClick={toggleSearch} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <Search color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'} p-0 m-0`}>Search</span>
        </div>

        <div onClick={() => { setActiveTab && setActiveTab('explore'); setIsSearchOpen(false); setIsNotificationOpen(false); }} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <Compass color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'}`}>Explore</span>
        </div>

        <div onClick={toggleNotification} style={{display:'flex',flexDirection:'row',alignItems:'center',fontSize:'18px',color:'white',padding:'30px 20px',borderRadius:"10px", cursor: 'pointer'}}>
          <Heart color='white' className='w-7 h-7 mr-2'/> <span className={`${ishovered && !isSearchOpen && !isNotificationOpen ? '' : 'hidden'}`}>Notifications</span>
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