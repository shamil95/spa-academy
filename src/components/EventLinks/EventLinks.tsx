import React from 'react';
import styles from './EventLinks.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { usingLaptop, calendarStar, loactionIcon } = ICONS;

type LargeWebinarDataType = {
    id: number;
    image: React.ReactNode;
    text: string;
};

const webinarData: LargeWebinarDataType[] = [
    {
        id: 1,
        image: <Image src={calendarStar} alt='calendar' />,
        text: '23.08.24, 09:00',
    },
    {
        id: 2,
        image: <Image src={loactionIcon} alt='alarm' />,
        text: '90 Minutes',
    },
];

type EventsDataType = {
    id: number;
    image: React.ReactNode;
    title: string;
    description: string;
};

const eventsData: EventsDataType[] = [
    {
        id: 1,
        image: <Image src={usingLaptop} alt='using laptop' width={350} height={228} />,
        title: 'Tech Career Compass: Find Your Path in QA Testing',
        description:
            '  Making informed career choices is essential for being content in life, and we re here to  guide you every step of the way. Join us for an exclusive webinar featuring Nadiia    Perehinska, a designer with over six years of industry expertise who is set to lead our    upcoming UX/UI group',
    },
    {
        id: 2,
        image: <Image src={usingLaptop} alt='using laptop' width={350} height={228} />,
        title: 'Tech Career Compass: Find Your Path in QA Testing',
        description:
            '  Making informed career choices is essential for being content in life, and we re here to  guide you every step of the way. Join us for an exclusive webinar featuring Nadiia    Perehinska, a designer with over six years of industry expertise who is set to lead our    upcoming UX/UI group',
    },
];

const EventLinks: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Upcoming Events</div>
                <div className={styles.boxes}>
                    {eventsData.map(event => (
                        <div className={styles.box} key={event.id}>
                            {event.image}
                            <div className={styles.text}>
                                <div className={styles.icons}>
                                    {webinarData.map(webinar => (
                                        <div className={styles.icon} key={webinar.id}>
                                            {webinar.image}
                                            {webinar.text}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.title}>{event.title}</div>
                                <div className={styles.desc}>{event.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventLinks;
