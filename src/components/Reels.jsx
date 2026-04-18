import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronUp, ChevronDown, VolumeX } from 'lucide-react';
import './Reels.css';

export const ReelCard = () => {
    return (
        <div className="reels-content-wrapper">

            <div className="reels-video-player">

                <div className="video-player-inner">
                    <div className="video-content-placeholder">

                    </div>


                    <div className="bottom-info-gradient"></div>
                </div>


                <div className="reel-bottom-info">
                    <div className="reel-user-info">
                        <div className="reel-avatar">
                        </div>
                        <span className="reel-username"></span>
                        <span className="reel-dot">•</span>
                        <button className="reel-follow-btn">Follow</button>
                    </div>
                    <p className="reel-caption"></p>
                </div>


                <button className="mute-btn">
                    <VolumeX size={14} color="currentColor" />
                </button>
            </div>


            <div className="reels-actions">
                <button className="action-button">
                    <Heart size={26} color="currentColor" />
                    <span></span>
                </button>
                <button className="action-button">
                    <MessageCircle size={26} color="currentColor" />
                    <span></span>
                </button>
                <button className="action-button">
                    <Send size={26} color="currentColor" />
                    <span></span>
                </button>
                <button className="action-button action-bookmark">
                    <Bookmark size={26} color="currentColor" />
                </button>
                <button className="action-button">
                    <MoreHorizontal size={26} color="currentColor" />
                </button>
                <div className="audio-track-icon">
                </div>
            </div>
        </div>
    );
};

const Reels = () => {
    return (
        <div className="reels-container">
            <ReelCard />


            <div className="nav-chevrons">
                <button className="chevron-btn chevron-up-btn">
                    <ChevronUp size={20} color="currentColor" />
                </button>
                <button className="chevron-btn">
                    <ChevronDown size={20} color="currentColor" />
                </button>
            </div>



        </div>
    );
};

export default Reels;
