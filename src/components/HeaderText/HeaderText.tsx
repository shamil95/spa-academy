import React, { ReactNode } from 'react';
import styles from './HeaderText.module.scss';

type HeaderTextProps = {
    title: string;
    text: string;
    children: ReactNode;
};

const HeaderText: React.FC<HeaderTextProps> = ({ title, text, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>
                <p>{text}</p>
            </div>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default HeaderText;
