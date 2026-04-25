import '../index.css'
import Side from "../components/Side"
import RenderStories from '../components/Storiesss'
import FollowSuggestedPage from '../components/SuggestedFollowers'
import RenderStoriesss from '../components/Post'
import { useState } from 'react'

import Reels from '../components/Reels'
import Messages from '../components/Messages'
import Explore from '../components/Explore'

const Layout = () => {
    const [activeTab, setActiveTab] = useState('home')
    const [pages, setpages] = useState(0)

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

                <div className="flex  gap-2 overflow-x-scroll w-138">
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                    <RenderStories />
                </div>

                

                <div>
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
                    <RenderStoriesss />
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

