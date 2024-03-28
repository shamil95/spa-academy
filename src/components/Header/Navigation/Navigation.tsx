'use client';
import React from 'react';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { LogoIcon } = ICONS;

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigationLinks}>
                <Image src={LogoIcon.src} alt={'logo'} width={162} height={40} />
                <div className={styles.allCourses}>All courses</div>
                <div className={styles.links}>
                    <div className={styles.link}>Academy</div>
                    <div className={styles.link}>Consulting services</div>
                    <div className={styles.link}>Resources</div>
                    <div className={styles.link}>Pricing</div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
