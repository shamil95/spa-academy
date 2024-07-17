import React from 'react';
import styles from './ComponentHeader.module.scss';

type ComponetnHeaderProps = {
    upButton: React.ReactNode;
    title: string;
    text: string;
    downButton?: React.ReactNode;
};

const ComponentHeader: React.FC<ComponetnHeaderProps> = ({ upButton, title, text, downButton }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftRectangle}></div>
            <div className={styles.rightRectangle}></div>
            <div className={styles.content}>
                {upButton}
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
                {downButton}
            </div>
        </div>
    );
};

export default ComponentHeader;
