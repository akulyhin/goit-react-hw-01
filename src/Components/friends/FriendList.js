import React from 'react';
import './Friends.css';

function FriendList ({friends}) {
    return (
    <ul className="friend-list">
            {friends.map(({avatar, name, isOnline, id}) => {
            return (
        <li key={id} className="item">

            <span className={isOnline ? "status online" : "status"}></span>
  
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
        })}
    </ul> 
  )
};

export default FriendList;