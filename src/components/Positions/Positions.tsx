import React from 'react';
import styles from './Positions.module.scss';
import Title from '../Title/Title';
import Link from 'next/link';

type PositionDataType = {
    id: number;
    positionTitle: string;
    time: string;
    office: string;
    deadline: string;
    applyButton: React.ReactNode;
};

const positionsData: PositionDataType[] = [
    {
        id: 1,
        positionTitle: 'QA manual teacher',
        time: 'Full-time',
        office: 'Full-time,SPA Head office',
        deadline: 'Deadline:August 30,2024',
        applyButton: <button className={styles.apply}>Apply now</button>,
    },
    {
        id: 2,
        positionTitle: 'QA manual teacher',
        time: 'Full-time',
        office: 'Full-time,SPA Head office',
        deadline: 'Deadline:August 30,2024',
        applyButton: <button className={styles.apply}>Apply now</button>,
    },
    {
        id: 3,
        positionTitle: 'QA manual teacher',
        time: 'Full-time',
        office: 'Full-time,SPA Head office',
        deadline: 'Deadline:August 30,2024',
        applyButton: <button className={styles.apply}>Apply now</button>,
    },
];

const Positions: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title
                    title='Open positions'
                    description='Open vacancies are displayed here. You can enter the vacancy that suits you, read the requirements and conditions and send your information.'
                />
                <div className={styles.positions}>
                    {positionsData.map((position, index) => (
                        <React.Fragment key={position.id}>
                            {index === 0 ? (
                                <Link href='/vacancy' className={styles.position}>
                                    <div className={styles.content}>
                                        <div className={styles.positionTitle}>{position.positionTitle}</div>
                                        <div className={styles.boxes}>
                                            <div className={styles.time}>{position.time}</div>
                                            <div className={styles.positionText}>{position.office}</div>
                                            <div className={styles.positionText}>{position.deadline}</div>
                                        </div>
                                    </div>
                                    {position.applyButton}
                                </Link>
                            ) : (
                                <div className={styles.position} key={position.id}>
                                    <div className={styles.content}>
                                        <div className={styles.positionTitle}>{position.positionTitle}</div>
                                        <div className={styles.boxes}>
                                            <div className={styles.time}>{position.time}</div>
                                            <div className={styles.positionText}>{position.office}</div>
                                            <div className={styles.positionText}>{position.deadline}</div>
                                        </div>
                                    </div>
                                    {position.applyButton}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                ;
            </div>
        </div>
    );
};

export default Positions;
