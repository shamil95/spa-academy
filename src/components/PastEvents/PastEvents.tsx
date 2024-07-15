'use client';
import React from 'react';
import styles from './PastEvents.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { calendarStar, alarmOclock, loactionIcon } = ICONS;

type DateInfoType = {
    id: number;
    dayofWeek: string;
    dayofmonth: string;
    month: string;
};

type EventDataType = {
    id: number;
    dateInfo: DateInfoType[];
    eventTitle: string;
    eventDescription: string;
};

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
        image: <Image src={loactionIcon} alt='location' />,
        text: 'Online',
    },
];

const eventsData: EventDataType[] = [
    {
        id: 1,
        dateInfo: [{ id: 1, dayofWeek: 'Monday', dayofmonth: '28', month: 'April' }],
        eventTitle: 'AI for Back-End developers: a deep dive into AI tools for Python',
        eventDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 2,
        dateInfo: [{ id: 1, dayofWeek: 'Monday', dayofmonth: '28', month: 'April' }],
        eventTitle: 'AI for Back-End developers: a deep dive into AI tools for Python',
        eventDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 3,
        dateInfo: [{ id: 1, dayofWeek: 'Monday', dayofmonth: '28', month: 'April' }],
        eventTitle: 'AI for Back-End developers: a deep dive into AI tools for Python',
        eventDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 4,
        dateInfo: [{ id: 1, dayofWeek: 'Monday', dayofmonth: '28', month: 'April' }],
        eventTitle: 'AI for Back-End developers: a deep dive into AI tools for Python',
        eventDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 5,
        dateInfo: [{ id: 1, dayofWeek: 'Monday', dayofmonth: '28', month: 'April' }],
        eventTitle: 'AI for Back-End developers: a deep dive into AI tools for Python',
        eventDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
];

const PastEvents: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Past events</div>
                <div className={styles.boxes}>
                    {eventsData.map((event, index) => (
                        <React.Fragment key={event.id}>
                            {index === 0 ? (
                                <Link href='/pastevent' key={event.id} className={styles.box}>
                                    <div className={styles.date}>
                                        <div className={styles.smalText}>{event.dateInfo[0].dayofWeek}</div>
                                        <div className={styles.number}>{event.dateInfo[0].dayofmonth}</div>
                                        <div className={styles.smalText}>{event.dateInfo[0].month}</div>
                                    </div>
                                    <div className={styles.webinarText}>
                                        <div className={styles.icons}>
                                            {webinarData.map(webinar => (
                                                <div className={styles.icon} key={webinar.id}>
                                                    {webinar.image}
                                                    {webinar.text}
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.webinarTitle}>{event.eventTitle}</div>
                                        <div className={styles.description}>{event.eventDescription}</div>
                                    </div>
                                </Link>
                            ) : (
                                <div key={event.id} className={styles.box}>
                                    <div className={styles.date}>
                                        <div className={styles.smalText}>{event.dateInfo[0].dayofWeek}</div>
                                        <div className={styles.number}>{event.dateInfo[0].dayofmonth}</div>
                                        <div className={styles.smalText}>{event.dateInfo[0].month}</div>
                                    </div>
                                    <div className={styles.webinarText}>
                                        <div className={styles.icons}>
                                            {webinarData.map(webinar => (
                                                <div className={styles.icon} key={webinar.id}>
                                                    {webinar.image}
                                                    {webinar.text}
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.webinarTitle}>{event.eventTitle}</div>
                                        <div className={styles.description}>{event.eventDescription}</div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastEvents;
