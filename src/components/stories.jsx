import React from 'react'
import './stories.css'
const renderStories = () => {
        return (
            <div className='big'>
                <div className='small'></div>
            </div>
        );
    };
const Stories = () => {
    return (
        <div className='main'>
            {renderStories()}
            {renderStories()}
            {renderStories()}
            {renderStories()}
            {renderStories()}
            {renderStories()}
            {renderStories()}
        </div>
    )
}

export default Stories