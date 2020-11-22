import React from 'react';
import FriendListItem from './FriendListItem';
import './module.friends.css';

function FriendList ({friends}) {
    return (
    <ul className="friend-list">
        {friends.map(el => (
            <FriendListItem key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
        ))}
    </ul> 
  )
};

export default FriendList;