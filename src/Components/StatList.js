import React from 'react';

function StatList( {stats} ) {
    return (
        <ul class="stat-list">
        {stats.map(li => 
              <li class="item">
              <span class="label">{li.label}</span>
              <span class="percentage">{li.percentage}</span>
            </li>
        )}
    </ul>
    )
}

export default StatList;