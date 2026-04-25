import React, { useState } from 'react'
import './stories.css'
import { X } from 'lucide-react';

const RenderStories = () => {

    const Visible = () => {
        return(
        <div>
            
            <div className='absolute inset-0 h-screen w-screen bg-black flex items-center justify-center'>
                <img src="tushar.jpg" alt="" className='relative h-100 w-100 object-cover'/>
                <button className='absolute top-5 right-5' onClick={() => {setshowstory(false)}}>
                    <X color='white'/>
                </button>
            </div>
        </div>
        )
        
    }

    const [showstory , setshowstory] = useState(false)
    const [seen , setSeen] = useState(false)

    return (
        <div className='main'>
            <div className={seen ? 'big bg-gray-500' : 'big bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600'}>
                <div className='small bg-[url(tushar.jpg)] bg-cover bg-center' onClick={() => {setshowstory(true) ; setSeen(true)}}></div>    
            </div>
            {showstory && <Visible />}
        </div>


    );
};

export default RenderStories