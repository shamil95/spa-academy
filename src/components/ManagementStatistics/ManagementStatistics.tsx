import React from 'react';
import styles from './ManagementStatistics.module.scss';

type DataType = {
    id: number;
    experienceNumber: string;
    experienceInfo: string;
    statisticsText: string;
};

const statisticsData: DataType[] = [
    {
        id: 1,
        experienceNumber: '7',
        experienceInfo: 'Years of experience',
        statisticsText:
            'Our knowledge and hands-on experience have been successfully securing project deliveries in terms of timing and scope since 2007',
    },
    {
        id: 2,
        experienceNumber: '120+',
        experienceInfo: 'Talented project managers',
        statisticsText:
            'The pool of professional IT Project Managers apply the best benchmarks and Management 3.0 methodologies to deliver value',
    },
    {
        id: 3,
        experienceNumber: '30+',
        experienceInfo: 'Successfully projects',
        statisticsText:
            'Our team provides IT Project Management as a Service to plan your operations, optimize resources, and secure the ultimate success',
    },
];

const ManagementStatistics: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Excellent quality and delivery with our IT Project Management</div>
                <div className={styles.boxes}>
                    {statisticsData.map((data) => (
                        <div key={data.id} className={styles.box}>
                            <div className={styles.statistic}>
                                <div className={styles.number}>{data.experienceNumber}</div>
                                <div className={styles.info}>{data.experienceInfo}</div>
                            </div>
                            <div className={styles.text}>{data.statisticsText}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementStatistics;

