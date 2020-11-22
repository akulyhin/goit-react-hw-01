import React from 'react';
import Product from './Product';
import Profile from './Profile';
import Statistics from './Statistics';
import statisticalData from '../data/statistical-data.json';



  
 export default function App () {
    return (
    <>
    <Profile/>
    <Statistics title="Upload stats" stats={statisticalData} />;
    <Statistics stats={statisticalData} />
    </>
    );
  }