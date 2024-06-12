import React from 'react';
import styles from './Infromation.module.scss';

type InformationProps = {
    intro: string;
    title: string;
    description: string;
    children: React.ReactNode;
};

const Information: React.FC<InformationProps> = ({ intro, title, description, children }) => {
    return (
        <div className={styles.info}>
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
