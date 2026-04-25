import React, { useState, useEffect } from 'react';
import '../index.css'
const Follow = ({ user }) => {
    return(
        
            <div className='flex justify-between'>
                <div className='flex gap-2.5'>
                    {user ? (
                        <img src={user.picture.thumbnail} className='h-10 w-10 object-cover rounded-[50%]' alt="avatar" />
                    ) : (
                        <div className='h-10 w-10 bg-gray-500 rounded-[50%]'></div>
                    )}
                    <div>
                        <div className='text-white text-[14px]'>{user ? user.login.username : 'username'}</div>
                        <div className='text-[#a8a8a8] text-[14px]'>{user ? `${user.name.first} ${user.name.last}` : 'Full Name'}</div>
                    </div>
                </div>

                <div className='text-blue-300 flex items-center'>
                    <a href="">Switch</a>
                </div>

            </div>
            
            
  
        
    )
}

const Circle = <div className='h-4 w-4 rounded-[50%] bg-amber-200'></div>

const SuggestedFollow = ({ user })=>{
    return(
        
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    {user ? (
                        <img src={user.picture.thumbnail} className='h-10 w-10 object-cover rounded-[50%]' alt="avatar" />
                    ) : (
                        <div className='h-10 w-10 bg-gray-500 rounded-[50%]'></div>
                    )}
                    <div>
                        <div className='text-white text-[14px]'>{user ? user.login.username : 'username'}</div>
                        <div className='text-[#a8a8a8] text-[14px] flex items-center gap-1'>{Circle}{user ? `${user.name.first} ${user.name.last}` : 'Suggested'}</div>
                    </div>
                </div>
            
                <div className='text-blue-300 flex items-center'>
                    <a href="">Follow</a>
                </div>
            </div>


    )
}

const FollowSuggestedPage = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.error(err));
    }, []);

    return(
        <div className='h-fit w-80 bg-[#0b1014] ml-15 mt-15 flex flex-col gap-4 p-4'>
            <Follow user={users[0]} />
            <div className='flex justify-between text-white font-semibold'>
                <span>Suggested for you</span>
                <span className="text-sm cursor-pointer hover:text-gray-300">See all</span>
            </div>
            {users.slice(1).map((u, i) => <SuggestedFollow key={i} user={u} />)}
        </div>
    )
}


// export default Follow;
// export default SuggestedFollow;
export default FollowSuggestedPage;