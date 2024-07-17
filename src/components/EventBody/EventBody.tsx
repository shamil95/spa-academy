import React from 'react';
import styles from './EventBody.module.scss';
import Title from '../Title/Title';

interface EventBodyProps {
    title: string;
    description: string;
    mainPoints: string[];
    targetAudience: string[];
    text1: string;
    text2: string;
}

const EventBody: React.FC<EventBodyProps> = ({ title, description, mainPoints, targetAudience, text1, text2 }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title title={title} description={description} />
                <div className={styles.text}>
                    <div className={styles.title}>{text1}</div>
                    <ul>
                        {mainPoints.map((point, index) => (
                            <li key={index}>🔸{point}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.text2}>
                    <div className={styles.title}>{text2}</div>
                    <ul className={styles.styleList}>
                        {targetAudience.map((audience, index) => (
                            <li key={index}>{audience}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventBody;
