import '../index.css'
import Side from "../components/Side"
import RenderStories from '../components/Storiesss'
import FollowSuggestedPage from '../components/SuggestedFollowers'
import RenderStoriesss from '../components/Post'
import React, { useState, useEffect } from 'react'

import Reels from '../components/Reels'
import Messages from '../components/Messages'
import Explore from '../components/Explore'

const Layout = () => {
    const [activeTab, setActiveTab] = useState('home')
    const [pages, setpages] = useState(0)
    const [stories, setStories] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/?results=35');
                const data = await res.json();
                setStories(data.results.slice(0, 15));
                setPosts(data.results.slice(15, 35));
            } catch (err) {
                console.error(err);
            }
        };
        fetchHomeData();
    }, []);

    const NextStory = () => {
        setpages(pages + 1)
    }

    const PreviousStory = () => {
        setpages(pages - 1)
    }


    return(
        <div className='flex h-full w-screen bg-[#0b1014]'>
            <div className='h-screen w-[72px] shrink-0 border-r border-[#262626] z-50'>
                <Side setActiveTab={setActiveTab} />
            </div>

            {activeTab === 'home' && (
                <div className='flex-1 flex justify-center'>
                    <div className='h-fit w-150 py-4 bg-blue-500 flex flex-col items-center'>

                <div className="flex gap-2 overflow-x-scroll w-138 no-scrollbar pb-2">
                    {stories.map((user, i) => <RenderStories key={i} user={user} />)}
                </div>

                

                <div className="mt-8 flex flex-col gap-10 pb-10">
                    {posts.map((user, i) => <RenderStoriesss key={i} user={user} />)}
                </div>

                    </div>

                <div className='h-fit w-2/5 max-w-[350px] ml-10'><FollowSuggestedPage/></div>
                </div>
            )}

            {activeTab === 'reels' && (
                <div className='w-full h-screen overflow-y-auto flex justify-center'>
                    <Reels />
                </div>
            )}

            {activeTab === 'messages' && (
                <div className='w-full h-screen'>
                    <Messages />
                </div>
            )}

            {activeTab === 'explore' && (
                <div className='w-full h-screen overflow-y-auto'>
                    <Explore />
                </div>
            )}
        </div>
    )
}

export default Layout;

