import React from 'react';

const random = () => Math.floor(Math.random() * 256);

function StatList( {stats} ) {
    return (
        <ul class="stat-list">
        {stats.map(li => 
              <li class="item" style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
              <span class="label">{li.label}</span>
              <span class="percentage">{li.percentage}%</span>
            </li>
        )}
    </ul>
    )
}

export default StatList;
