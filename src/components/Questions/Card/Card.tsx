import React from 'react';
import { ICONS } from '@/assets/icons';
import styles from './Card.module.scss';
import Image from 'next/image';

const { plusIcon } = ICONS;
export default function Card({ title, details }) {
    return (
        <div className={styles.card}>
            <button className={styles.btn}>
                <Image src={plusIcon.src} alt='plus' width={30} height={30} />
            </button>
            <h3>{title}</h3>
            {true ? <div>{details}</div> : null}
        </div>
    );
}
