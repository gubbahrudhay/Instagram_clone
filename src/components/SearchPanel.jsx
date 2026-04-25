import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import './SearchPanel.css';

const SearchPanel = ({ isOpen, onClose }) => {
  const [searchText, setSearchText] = useState('');


  return (
    <div className={`search-panel ${isOpen ? 'open' : ''}`}>
      <div className="search-header">
        <div className='-mt-7 flex flex-row-reverse'>
          <button onClick={onClose} >
            <X size={30} color='white' />
          </button>
        </div>
        
        <div className="search-title-container">
          <h2 className="search-title">Search</h2>
        </div>
        
        <div className="search-input-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button className="clear-input-btn" onClick={() => setSearchText('')}>
              <X size={12} color="#262626"/>
            </button>
          )}
        </div>
      </div>

      <div className="search-body">
        <div className="recent-section">
          <div className="recent-header">
            <h3 className="recent-title">Recent</h3>
            <button className="clear-all-btn">Clear all</button>
          </div>
          
          <div className="no-recent">
             <span className="no-recent-text">No recent searches.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
