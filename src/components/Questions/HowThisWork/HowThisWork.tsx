import React from 'react';
import styles from './HowThisWork.module.scss';
import Cards from '../Cards/Cards';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { minusIcon } = ICONS;

export default function HowThisWork() {
    return (
        <div className={styles.container}>
            <div className={styles.blackdiv}>
                <button className={styles.round}>
                    <Image src={minusIcon.src} alt='plus' width={30} height={30} />
                </button>

                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1 className={styles.header}>How this work?</h1>
                    </div>
                    <div className={styles.description}>
                        <p className={styles.content}>
                            It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can
                            attend classes and find answers to your questions with the help of our experts.
                        </p>
                    </div>
                </div>
            </div>
            <Cards />
        </div>
    );
}
