import React from 'react';
import styles from './Title.module.scss';

type TitleComponentProps = {
    title: string;
    description: string;
};

const Title: React.FC<TitleComponentProps> = ({ title, description }) => {
    return (
        <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default Title;
