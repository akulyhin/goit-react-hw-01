import React from 'react';
import PropTypes from 'prop-types';
import StatList from '../StatList';
import './module.statistics.css';


function Statistics({title, stats}) {
    return (
        <>
    <section class="statistics">
    {title && (
  <h2 class="title">{title}</h2>
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