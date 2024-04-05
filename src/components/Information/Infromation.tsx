import React from 'react';
import styles from './Infromation.module.scss';

const Infromation = ({ intro, title, description, children }) => {
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

export default Infromation;

