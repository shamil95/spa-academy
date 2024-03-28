import React from 'react';
import styles from './WhyWe.module.scss';

const statistics = [
    {
        statistic: '250+',
        label: 'studying student',
    },
    {
        statistic: '24/7',
        label: 'plan study time around your own schedule',
    },
    {
        statistic: '250+',
        label: 'those who complete the course note that they have achieved their goals',
    },
    {
        statistic: '30+',
        label: 'our highly knowledgeable instructors teach you',
    },
];

const WhyWe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statistics}>
                {statistics.map(statistic => (
                    <div key={statistic.label} className={styles.statistic}>
                        <div className={styles.count}>{statistic.statistic}</div>
                        <div>{statistic.label}</div>
                    </div>
                ))}
            </div>
            <div className={styles.info}>
                <div className={styles.title}>Why choose the Science Park Academy educational center</div>
                <div className={styles.description}>
                    In our academy, you can choose your desired field of IT and form the necessary knowledge and skills
                    for your future career development
                </div>
                <button className={styles.apply}>Apply now</button>
                <button className={styles.learnMore}>Contact us</button>
            </div>
        </div>
    );
};

export default WhyWe;
