import React from 'react';
import styles from './TextComponent.module.scss';

type TextComponentProps = {
    smallTitle: string | '';
    title: string;
    description: string;
};

const TextComponent: React.FC<TextComponentProps> = ({ smallTitle, title, description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.smallTitle}>{smallTitle}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default TextComponent;
