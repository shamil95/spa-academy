import React from 'react';
import styles from './Statistic.module.scss';

const Statistic = ({ statistic }) => {
    return (
        <div key={statistic.label} className={styles.statistic}>
            <div className={styles.count}>{statistic.statistic}</div>
            <div className={styles.label}>{statistic.label}</div>
        </div>
    );
};

export default Statistic;
