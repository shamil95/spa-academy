import React from 'react';
import styles from './Statistic.module.scss';
import { StaticProps } from './StaticProps';

const Statistic: React.FC<{statistic:StaticProps}> = ({ statistic }) => {
    const { statistic: stat, label } = statistic;
    return (
        <div key={label} className={styles.statistic}>
            <div className={styles.count}>{stat}</div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default Statistic;
