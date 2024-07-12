import React from 'react';
import styles from './EventHeader.module.scss';
import Title from '../Title/Title';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { calendarStar, alarmOclock, loactionIcon, arrowRight, usingLaptop, blackFbIcon, blackXIcon, blackLnIcon } =
    ICONS;

const footerIcons = [blackFbIcon, blackXIcon, blackLnIcon];

type LargeWebinarDataType = {
    id: number;
    image: React.ReactNode;
    text: string;
};

const webinarData: LargeWebinarDataType[] = [
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
const EventHeader: React.FC = () => {

    const scrollToRegister = () => {
        const element = document.getElementById('eventRegister');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <Link href='/'>Home</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link}>
                            <Link href='/events'>Events</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link}>
                            <Link href='/'>Tech Career</Link>
                        </div>
                    </div>
                    <Title
                        className={styles.componentTitle}
                        title='Tech Career Compass: Find Your Path in QA Testing'
                        description='Making informed career choices is essential for being content in life, and we re here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.'
                    />

                    <div className={styles.icons}>
                        {webinarData.map(webinar => (
                            <div className={styles.icon} key={webinar.id}>
                                {webinar.image}
                                {webinar.text}
                            </div>
                        ))}
                    </div>
                    <button className={styles.btn} onClick={scrollToRegister}>Registration</button>
                </div>
                <div className={styles.right}>
                    <div className={styles.imageContainer}>
                        <Image src={usingLaptop} alt='Usinf laptop' width={360} height={230} className={styles.image} />
                    </div>
                    <div className={styles.iconsContainer}>
                        <div className={styles.text}>Share on:</div>
                        <div className={styles.smallIcons}>
                            {footerIcons.map((icon, index) => (
                                <div key={index} className={styles.smallIcon}>
                                    <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHeader;
