'use client';
import LargeWebinar from '../Large/LargeWebinar';
import styles from './UpcomingEvents.module.scss';
import React from 'react';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { usingLaptop } = ICONS;

type WebinarsDataTtpe = {
    id: number;
    webinarTitle: string;
    webinarDescription: string;
    webinarImage: React.ReactNode;
};

const webinarsData: WebinarsDataTtpe[] = [
    {
        id: 1,
        webinarTitle: 'Tech Career Compass: Find Your Path in QA Testing',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
        webinarImage: <Image src={usingLaptop} alt='using laptop' />,
    },
    {
        id: 2,
        webinarTitle: 'Tech Career Compass: Find Your Path in QA Testing',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
        webinarImage: <Image src={usingLaptop} alt='using laptop' />,
    },
];

const UpcomingEvents: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Upcoming Events</div>
                <div className={styles.webinarContainer}>
                    {webinarsData.map((webinar, index) => (
                        <React.Fragment key={webinar.id}>
                            {index === 0 ? (
                                <Link href='/event'>
                                    <LargeWebinar
                                        href='event'
                                        webinarDescription={webinar.webinarDescription}
                                        webinarTitle={webinar.webinarTitle}
                                        key={webinar.id}
                                        webinarImage={webinar.webinarImage}
                                    />
                                </Link>
                            ) : (
                                <LargeWebinar
                                    href='event'
                                    webinarDescription={webinar.webinarDescription}
                                    webinarTitle={webinar.webinarTitle}
                                    key={webinar.id}
                                    webinarImage={webinar.webinarImage}
                                />
                            )}
                        </React.Fragment>

                        // <LargeWebinar
                        //     href='event'
                        //     webinarDescription={webinar.webinarDescription}
                        //     webinarTitle={webinar.webinarTitle}
                        //     key={webinar.id}
                        //     webinarImage={webinar.webinarImage}
                        // />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
