import { useState } from 'react';
import './index.css'
// import Post from "./components/Post";
import Side from "./components/Side"
import RenderStories from "./components/Storiesss"
import RenderStoriesss from "./components/Post"
import Reels from "./components/Reels"
import Messages from "./components/Messages"

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
      ) : activeTab === 'messages' ? (
        <Messages />
      ) : null}
    </div>
  )
}
export default App;