import React from 'react';
import PropTypes from 'prop-types';
import StatList from './StatList';
import './module.statistics.css';


function Statistics({title, stats}) {
    return (
        <>
    <section className="statistics">
    {title && (
  <h2 className="title">{title}</h2>
  )}

 <StatList stats={stats} />
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