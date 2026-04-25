import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronUp, ChevronDown, VolumeX } from 'lucide-react';
import './Reels.css';

export const ReelCard = ({ user }) => {
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
                        {user ? (
                            <img src={user.picture.thumbnail} alt="avatar" className="reel-avatar" style={{ objectFit: 'cover' }} />
                        ) : (
                            <div className="reel-avatar"></div>
                        )}
                        <span className="reel-username">{user ? user.login.username : 'username'}</span>
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
    const [reels, setReels] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const fetchReels = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(`https://randomuser.me/api/?results=3&page=${page}`);
            const data = await response.json();
            setReels(prev => [...prev, ...data.results]);
            setPage(prev => prev + 1);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReels();

    }, []);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
        if (bottom) {
            fetchReels();
        }
    };

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <div 
            className="reels-container" 
            ref={containerRef}
            onScroll={handleScroll}
            style={{ overflowY: 'scroll', scrollSnapType: 'y mandatory', flexDirection: 'column', justifyContent: 'flex-start' }}
        >
            {reels.map((user, index) => (
                <div key={`${user.login.uuid}-${index}`} style={{ width: '100%', height: '100vh', flexShrink: 0, scrollSnapAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReelCard user={user} />
                </div>
            ))}

            <div className="nav-chevrons" style={{ position: 'fixed' }}>
                <button className="chevron-btn chevron-up-btn" onClick={handlePrev}>
                    <ChevronUp size={20} color="currentColor" />
                </button>
                <button className="chevron-btn" onClick={handleNext}>
                    <ChevronDown size={20} color="currentColor" />
                </button>
            </div>
        </div>
    );
};

export default Reels;
