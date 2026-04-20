import '../index.css'
import Side from "../components/Side"
import RenderStories from '../components/Storiesss'
import FollowSuggestedPage from '../components/SuggestedFollowers'
import RenderStoriesss from '../components/Post'
import { useState } from 'react'

const Layout = () => {

    const[pages,setpages] =  useState(0)

    const NextStory = () => {
        setpages(pages + 1)
    }

    const PreviousStory = () => {
        setpages(pages - 1)
    }


    return(
        <div className='flex h-full w-screen bg-[#0b1014]'>
            <div className='h-screen w-1/5'><Side/></div>

            <div className='h-fit w-150 p-4 flex bg-blue-500 flex-col'>

                <div className='flex bg-red-500 w-full '>

                    <button className='text-white' onClick={PreviousStory}>◀</button>

                    <div className="flex w-full gap-2 overflow-hidden w-123.75">
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

                    <button className='text-white' onClick={NextStory}>▶</button>

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

            <div className='h-fit w-2/5 '><FollowSuggestedPage/></div>
        </div>
    )
}

export default Layout;