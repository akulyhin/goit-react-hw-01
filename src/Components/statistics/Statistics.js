import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const random = () => Math.floor(Math.random() * 256);

function Statistics({title, stats}) {
    return (
        <>
    <section className={styles.statistics}>
    {title && (
  <h2 className={styles.title}>{title}</h2>
  )}
        
                <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
            return (
                <li key={id} className={styles.item} style={{ backgroundColor: `rgb(${random()}, ${random()}, ${random()})` }}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
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