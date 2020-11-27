import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const random = () => Math.floor(Math.random() * 256);

function Statistics({title, stats}) {
    return (
        <>
    <section className="statistics">
    {title && (
  <h2 className="title">{title}</h2>
  )}
        
    <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
            return (
                <li key={id} className="item" style={{ backgroundColor: `rgb(${random()}, ${random()}, ${random()})` }}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
        )})}    
    </ul>
</section>
        </>
    )
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired, 
};

export default Statistics;