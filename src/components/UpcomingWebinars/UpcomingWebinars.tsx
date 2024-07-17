import React from 'react';
import styles from './UpcomingWebinars.module.scss';
import Image from 'next/image';
import webinarPng from '../../assets/images/webinar1.png';
import { ICONS } from '@/assets/icons';
import LargeWebinar from '../Large/LargeWebinar';
import Link from 'next/link';

const { calendarStar, alarmOclock, loactionIcon } = ICONS;

type WebinarDataType = {
    id: number;
    image: React.ReactNode;
    text: string;
};

const webinarData: WebinarDataType[] = [
    {
        id: 1,
        image: <Image src={alarmOclock} alt='calendar' />,
        text: '23.08.24, 09:00',
    },
    {
        id: 2,
        image: <Image src={calendarStar} alt='alarm' />,
        text: '90 Minutes',
    },
    {
        id: 3,
        image: <Image src={loactionIcon} alt='location' />,
        text: 'Online',
    },
];

const UpcomingWebinars: React.FC = () => {
    const webinarImage = <Image src={webinarPng} alt='Webinar png' className={styles.image} />;
    const webinarHref = '/singlewebinar';
    return (
        <Link href={webinarHref} className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Upcoming Webinars</div>
                <LargeWebinar
                    webinarTitle='  Team Talk: What is the IT Management Analytics'
                    webinarDescription="Making informed career choices is essential for being content in life, and we're
                                    here to guide you every step of the way. Join us for an exclusive webinar featuring
                                    Nadiia Perehinska, a designer with over six years of industry expertise who is set
                                    to lead our upcoming UX/UI group."
                    webinarImage={webinarImage}
                />
            </div>
        </Link>
    );
};

export default UpcomingWebinars;
