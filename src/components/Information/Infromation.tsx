import React from 'react';
import styles from './Infromation.module.scss';

type InformationProps = {
    intro: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    
};

const Information: React.FC<InformationProps> = ({ intro, title, description, children,className }) => {
    return (
        <div className={`${styles.info} ${className}`}>
            <div className={styles.intro}>{intro}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                <p> {description}</p>
            </div>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default Information;
