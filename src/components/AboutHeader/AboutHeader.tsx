import React from 'react';
import styles from './AboutHeader.module.scss';

const AboutHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftRectangle}></div>
            <div className={styles.rightRectangle}></div>
            <div className={styles.content}>
                <button className={styles.aboutButton}>About us</button>
                <div className={styles.title}>A UX Case Study on Creating Studious Enviroment for Students</div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae
                    laboriosam, nihil excepturi perferendis molestias dolorem.
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
