'use client';
import React from 'react';
import styles from './Subscribe.module.scss';

type SubscribeProps = {
    title: string;
    description: string;
};

const Subscribe: React.FC<SubscribeProps> = ({ title, description }) => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.subscribeContainer}>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type='email' placeholder='Your Email Address' className={styles.input} />
                    <button className={styles.btn}>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
