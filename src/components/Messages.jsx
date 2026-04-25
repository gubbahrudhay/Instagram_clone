import React, { useState } from 'react';
import { Edit, Send } from 'lucide-react';
import './Messages.css';

const Messages = () => {
  const [messageCount, setMessageCount] = useState(15);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
    if (bottom) {
      setMessageCount(prev => prev + 10);
    }
  };

  const dummyMessages = Array.from({ length: messageCount });

  return (
    <div className="messages-page-layout">
      <div className="messages-panel">
        <div className="messages-header">
          <div className="messages-title-container">
            <h2 className="messages-title">username</h2>
            <Edit className="edit-icon" size={24} color="white" />
          </div>
          <div className="messages-tabs">
            <span className="tab active">Messages</span>
            <span className="tab">Requests</span>
          </div>
        </div>

        <div className="messages-body" onScroll={handleScroll}>
          {dummyMessages.map((_, index) => (
            <div key={index} className="message-item">
              <div className="message-avatar"></div>
              <div className="message-info">
                <span className="message-username">username</span>
                <span className="message-preview">Active {index + 1}h ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="messages-content-placeholder">
        <div className="placeholder-circle">
          <Send size={48} color="white" strokeWidth={1} style={{ marginLeft: '-4px', marginTop: '2px' }} />
        </div>
        <h2 className="messages-empty-title">Your messages</h2>
        <p className="messages-empty-subtitle">Send private photos and messages to a friend or group.</p>
        <button className="messages-send-btn">Send message</button>
      </div>
    </div>
  );
};

export default Messages;
