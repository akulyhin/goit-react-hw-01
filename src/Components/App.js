import React from 'react';

import user from '../data/user.json';
import Profile from './profile/Profile';

import Statistics from './statistics/Statistics';
import statisticalData from '../data/statistical-data.json';

import FriendList from './friends/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './transaction/TransactionHistory';
import transactions from '../data/transactions.json';




  
 export default function App () {
    return (
    <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </>
    );
  }