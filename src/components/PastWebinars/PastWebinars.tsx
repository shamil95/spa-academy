import styles from './PastWebinars.module.scss';
import React from 'react';
import Image from 'next/image';
import webinarPng from '../../assets/images/webinar1.png';
import webinarStudent from '../../assets/images/webinars/webinarStudent.png';
import webinarTeacher from '../../assets/images/webinars/webinarTeacher.png';
import webinarTeam from '../../assets/images/webinars/webinarTalking.png';
import webinarOnlineMeeting from '../../assets/images/webinars/webinarOnlineMeeting.png';
import webinarStuding from '../../assets/images/webinars/webinarStuding.png';
import { ICONS } from '@/assets/icons';
import Webinar from '../WebinarComponent/Webinar';

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

type WebinarComponentDataType = {
    id: number;
    webinarImage: React.ReactNode;
    webinarTitle: string;
    webinarDescription: string;
};

const webinarComponentData: WebinarComponentDataType[] = [
    {
        id: 1,
        webinarImage: <Image src={webinarStudent} alt='webinar png' width={545} height={290} />,
        webinarTitle: 'Team Talk: What is the IT Management Analytics',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 2,
        webinarImage: <Image src={webinarTeacher} alt='webinar png' width={545} height={290} />,
        webinarTitle: 'Team Talk: What is the IT Management Analytics',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 3,
        webinarImage: <Image src={webinarTeam} alt='webinar png' width={545} height={290} />,
        webinarTitle: 'Team Talk: What is the IT Management Analytics',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 4,
        webinarImage: <Image src={webinarOnlineMeeting} alt='webinar png' width={545} height={290} />,
        webinarTitle: 'Team Talk: What is the IT Management Analytics',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
    {
        id: 5,
        webinarImage: <Image src={webinarStuding} alt='webinar png' width={545} height={290} />,
        webinarTitle: 'Team Talk: What is the IT Management Analytics',
        webinarDescription:
            "Making informed career choices is essential for being content in life, and we're here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.",
    },
];

const PastWebinars: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Past Webinars</div>
                <div className={styles.boxes}>
                    {webinarComponentData.map(data => (
                        <>
                            <Webinar
                                webinarImage={data.webinarImage}
                                webinarTitle={data.webinarTitle}
                                webinarDescription={data.webinarDescription}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PastWebinars;
