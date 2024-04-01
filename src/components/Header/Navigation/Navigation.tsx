'use client';
import React from 'react';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { LogoIcon, arrowDownIcon } = ICONS;

const navigationData = [
    {
        id: 1,
        title: 'Academy',
    },
    {
        id: 2,
        title: 'Consulting services',
    },
    {
        id: 3,
        title: 'Resources',
    },
    {
        id: 4,
        title: 'Pricing',
    },
];

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigationLinks}>
                <Image src={LogoIcon.src} alt={'logo'} width={162} height={40} />
                <div className={styles.allCourses}>
                    All courses
                    <Image className={styles.icon} src={arrowDownIcon.src} alt='arrow down' width={20} height={15} />
                </div>
                <ul className={styles.links}>
                    {navigationData.map(data => (
                        <li className={styles.link} key={data.id}>
                            {data.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
