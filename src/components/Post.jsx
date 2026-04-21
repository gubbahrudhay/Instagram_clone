import "../index.css"
import React from "react"
import './stories.css'
// import {RenderStories}  from "./Storiesss"
import {Heart , MessageCircle , Send , Repeat2 , Bookmark , Ellipsis} from 'lucide-react'

const RenderStoriesss = () => {
    return(
        <div className="ml-10 mt-10 w-116.25 bg-blue-500">
            
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex items-center gap-1.75">
                        <div className="w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75">
                            <div className="w-full h-full bg-white rounded-full"></div>
                        </div>
                    <div className="flex w-full justify-between">
                        <span className="">Tushar</span>
                        <div className="flex gap-2.5">
                            <span className = "text-red-500">Follow</span>
                            <span><Ellipsis /></span>
                        </div>
                        
                    </div>
                </div>
                
            
            <div className="h-146 w-116.25 bg-red-500"></div>
            <div className="flex">
                <div className="flex w-[40%] justify-between">
                    <Heart />
                    <MessageCircle />
                    <Send />
                    <Repeat2 />
                </div>
                <div className="flex flex-1 justify-end">
                    <Bookmark />
                </div>
            </div>    
                <span>Tushyyyyyyy ahhhhhh babbyyyyy plsssss hardeerrrrrr ahhhhhhhhhhhh yayyyyyyyyyyyyyyyyyyy</span>
            </div>
        </div>
        
        
        
    )
}


export default RenderStoriesss;