import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import './Notification.css';

const Notification = ({ isOpen, onClose }) => {
  return (
    <div className={`notification-panel ${isOpen ? 'open' : ''}`}>
      <div className="notification-header">
        <div className="notification-title-container">
          <h2 className="notification-title">Notifications</h2>
          <button className="notification-close-btn" onClick={onClose}>
            <X size={24} color="white" />
          </button>
        </div>
        
        <div className="notification-chips">
          <div className="notification-chip active">All</div>
          <div className="notification-chip">Comments</div>
        </div>
      </div>

      <div className="notification-body">
        

        <div className="notification-item" style={{ borderBottom: '1px solid #262626', paddingBottom: '16px', marginBottom: '24px' }}>
          <div className="notification-avatar" style={{ border: '2px solid #262626' }}></div>
          <div className="notification-content">
            <span className="notification-text">
              <span className="notification-username">Follow requests</span><br/>
              <span style={{ color: '#8e8e8e', fontSize: '13px' }}>username + others</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0095f6' }}></div>
            <ChevronRight size={20} color="#8e8e8e" />
          </div>
        </div>


        <div className="notification-section">
          <h3 className="notification-section-title">Yesterday</h3>
          
          <div className="notification-item">
            <div className="notification-avatar"></div>
            <div className="notification-content">
              <span className="notification-text">
                <span className="notification-username">username</span> requested to follow you. <span className="notification-time">1d</span>
              </span>
            </div>
            <div className="notification-actions">
              <button className="notification-btn primary">Confirm</button>
              <button className="notification-btn secondary">Delete</button>
            </div>
          </div>
        </div>


        <div className="notification-section">
          <h3 className="notification-section-title">This week</h3>
          
          <div className="notification-item">
            <div className="notification-avatar"></div>
            <div className="notification-content">
              <span className="notification-text">
                <span className="notification-username">username</span> started following you. <span className="notification-time">2d</span>
              </span>
            </div>
            <div className="notification-actions">
              <button className="notification-btn secondary">Following</button>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-avatar"></div>
            <div className="notification-content">
              <span className="notification-text">
                <span className="notification-username">username</span> started following you. <span className="notification-time">2d</span>
              </span>
            </div>
            <div className="notification-actions">
              <button className="notification-btn secondary">Requested</button>
            </div>
          </div>

          <div className="notification-item">
            <div className="notification-avatar"></div>
            <div className="notification-content">
              <span className="notification-text">
                <span className="notification-username">username</span>, who you might know, is on Instagram. <span className="notification-time">2d</span>
              </span>
            </div>
            <div className="notification-actions">
              <button className="notification-btn primary">Follow</button>
            </div>
          </div>
        </div>


        <div className="notification-section">
          <h3 className="notification-section-title">This month</h3>
          
          <div className="notification-item">
            <div className="notification-avatar"></div>
            <div className="notification-content">
              <span className="notification-text">
                <span className="notification-username">username</span> posted a thread that you might be interested in. <span className="notification-time">6d</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Notification;
