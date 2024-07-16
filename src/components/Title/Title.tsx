import React from 'react';
import styles from './Title.module.scss';

type TitleComponentProps = {
    title: string;
    description: string;
    className?: string;
    seccondClassName?: string;
};

const Title: React.FC<TitleComponentProps> = ({ title, description, className, seccondClassName }) => {
    return (
        <div className={`${styles.text} ${className}`}>
            <div className={`${styles.title} ${seccondClassName}`}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default Title;
