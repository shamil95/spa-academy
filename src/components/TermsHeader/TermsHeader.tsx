import React from 'react';
import styles from './TermsHeader.module.scss';

type HeaderProps = {
    className?: string;
    title: string;
    text?: React.ReactNode;
};

const TermsHeader: React.FC<HeaderProps> = ({ className, title, text }) => {
    return (
        <div className={`${styles.container} ${className ? className : ''}`}>
            <div className={styles.main}>
                <div className={styles.title}>{title}</div>
                {text && <div className={styles.text}>{text}</div>}
            </div>
        </div>
    );
};

export default TermsHeader;
