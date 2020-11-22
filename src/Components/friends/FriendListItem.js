import React from 'react';

function FriendListItem ({avatar, name, isOnline}) {

    return (
        <>
        <li className="item">

            <span className={isOnline? "status online" : "status"}></span>
  
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
        </>
    )
}


export default FriendListItem;