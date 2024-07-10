import React from 'react';
import styles from './WorkTogether.module.scss';

type WorkTogetherProps = {
    title: string;
    description: string;
    image: React.ReactNode;
};

const WorkTogether: React.FC<WorkTogetherProps> = ({ title, description, image }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.midle}>
                    <div className={styles.text}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                    </div>
                </div>
                <div className={styles.imageContainer}>{image}</div>
            </div>
        </div>
    );
};

export default WorkTogether;
