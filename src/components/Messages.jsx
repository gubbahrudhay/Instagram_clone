import React, { useState, useEffect } from 'react';
import { Edit, Send } from 'lucide-react';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=15&page=${page}`);
      const data = await response.json();
      setMessages(prev => [...prev, ...data.results]);
      setPage(prev => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

  }, []);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 10;
    if (bottom) {
      fetchMessages();
    }
  };

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
          {messages.map((user, index) => (
            <div key={`${user.login.uuid}-${index}`} className="message-item">
              <img src={user.picture.thumbnail} alt="avatar" className="message-avatar" style={{ objectFit: 'cover' }} />
              <div className="message-info">
                <span className="message-username">{user.login.username}</span>
                <span className="message-preview">Active {Math.floor(Math.random() * 12) + 1}h ago</span>
              </div>
            </div>
          ))}
          {loading && <div style={{ color: '#8e8e8e', textAlign: 'center', padding: '10px' }}>Loading...</div>}
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
