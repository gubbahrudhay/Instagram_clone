import "../index.css"
import React, { useState } from "react"
import "./stories.css"
import { Heart, MessageCircle, Send, Repeat2, Bookmark, Ellipsis } from "lucide-react"
import RedHeart from "../assets/Redheart.svg"

const RenderStoriesss = ({ user }) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className="ml-10 mt-10 w-116.25">
            
            {/* Header */}
            <div className="flex flex-col gap-y-1.5">
                <div className="flex items-center gap-1.75">
                    
                    {/* Profile */}
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.75 cursor-pointer">
                        {user ? (
                            <img
                                src={user.picture.thumbnail}
                                className="w-full h-full bg-white rounded-full object-cover"
                                alt="avatar"
                            />
                        ) : (
                            <div className="w-full h-full bg-white rounded-full"></div>
                        )}
                    </div>

                    {/* Username + Actions */}
                    <div className="flex w-full justify-between">
                        <span className="text-white font-semibold cursor-pointer hover:text-gray-300">
                            {user ? user.login.username : "username"}
                        </span>
                        <div className="flex gap-2.5">
                            <span className="text-blue-500 font-semibold cursor-pointer hover:text-white">
                                Follow
                            </span>
                            <Ellipsis />
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Image */}
            <div
                className="h-146 w-116.25 bg-[#262626] flex items-center justify-center rounded overflow-hidden mt-3"
                onDoubleClick={() => setLiked(prev => !prev)}
            >
                {user && (
                    <img
                        src={`https://picsum.photos/seed/${user.login.uuid}/800/800`}
                        className="w-full h-full object-cover"
                        alt="post"
                    />
                )}
            </div>

            {/* Actions */}
            <div color="white" className="flex mt-2">
                <div color="white" className="flex w-[40%] justify-between items-center">
                    
                    {/* Like Button */}
                    {liked ? (
                        <img
                            src={RedHeart}
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setLiked(prev => !prev)}
                            alt="liked"
                        />
                    ) : (
                        <Heart
                            color="white"
                            className="w-6 h-6 cursor-pointer"
                            onClick={() => setLiked(prev => !prev)}
                        />
                    )}

                    <MessageCircle color="white" className="cursor-pointer" />
                    <Send color="white" className="cursor-pointer" />
                    <Repeat2 color="white" className="cursor-pointer" />
                </div>

                <div className="flex flex-1 justify-end">
                    <Bookmark color="white" className="cursor-pointer" />
                </div>
            </div>

            {/* Caption */}
            <span className="text-white mt-2 block">
                <span className="font-semibold mr-2">
                    {user ? user.login.username : "username"}
                </span>
                Beautiful day! ✨ Feeling great.
            </span>

        </div>
    )
}

export default RenderStoriesss