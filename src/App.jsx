import { useState } from 'react';
import './index.css'
// import Post from "./components/Post";
import Side from "./components/Side"
import RenderStories from "./components/Storiesss"
import RenderStoriesss from "./components/Post"
import Reels from "./components/Reels"

function App(){
  const [activeTab, setActiveTab] = useState('home');

  return(
    <div className="bg-black min-h-screen text-white">
      <Side setActiveTab={setActiveTab} />
      {activeTab === 'home' ? (
        <>
          <RenderStories />
          <RenderStoriesss />
        </>
      ) : activeTab === 'reels' ? (
        <Reels />
      ) : null}
    </div>
  )
}
export default App;