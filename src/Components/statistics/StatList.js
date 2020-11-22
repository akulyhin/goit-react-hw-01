import React from 'react';

const random = () => Math.floor(Math.random() * 256);

function StatList( {stats} ) {
    return (
        <ul className="stat-list">
        {stats.map(li => (
              <li key={li.id} className="item" style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
              <span className="label">{li.label}</span>
              <span className="percentage">{li.percentage}%</span>
            </li>
        ))}
    </ul>
    )
}

export default StatList;
