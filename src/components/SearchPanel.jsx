import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import './SearchPanel.css';

const SearchPanel = ({ isOpen, onClose }) => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.login.username.toLowerCase().includes(searchText.toLowerCase()) ||
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchText.toLowerCase())
  );
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
        {searchText === '' ? (
          <div className="recent-section">
            <div className="recent-header">
              <h3 className="recent-title">Recent</h3>
              <button className="clear-all-btn">Clear all</button>
            </div>
            
            <div className="no-recent">
               <span className="no-recent-text">No recent searches.</span>
            </div>
          </div>
        ) : (
          <div className="search-results" style={{ paddingTop: '12px' }}>
            {loading ? (
              <div style={{ color: '#8e8e8e', textAlign: 'center', padding: '20px' }}>Loading...</div>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user.login.uuid} className="hover:bg-[#1a1a1a] cursor-pointer" style={{ display: 'flex', alignItems: 'center', padding: '8px 24px' }}>
                  <img src={user.picture.thumbnail} alt="avatar" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', marginRight: '12px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>{user.login.username}</span>
                    <span style={{ color: '#8e8e8e', fontSize: '14px' }}>{user.name.first} {user.name.last}</span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ color: '#8e8e8e', textAlign: 'center', padding: '20px' }}>No results found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
