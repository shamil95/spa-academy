import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Benefit.module.scss';
import { ICONS } from '@/assets/icons';
const { benefitIcon, benefitIcon2 } = ICONS;

const Benefit = ({ benefit, isFirst }) => {
    return (
        <div key={benefit.title} className={`${styles.benefit} ${isFirst ? styles.active : ''}`}>
            <Image src={isFirst ? benefitIcon.src : benefitIcon2.src} alt={'benefit'} width={40} height={40} />
            <div className={styles.title}>{benefit.title}</div>
            <div>{benefit.body}</div>
        </div>
    );
};

export default Benefit;
