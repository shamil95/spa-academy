import React from 'react';
import styles from './EventHeader.module.scss';
import Title from '../Title/Title';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { calendarStar, alarmOclock, loactionIcon, arrowRight, blackFbIcon, blackXIcon, blackLnIcon } = ICONS;

const footerIcons = [blackFbIcon, blackXIcon, blackLnIcon];

type LargeWebinarDataType = {
    id: number;
    image: React.ReactNode;
    text: string;
};
type EventHeaderProps = {
    link1: string;
    link2: string;
    link3: string;
    content: React.ReactNode;
    image?: React.ReactNode;
    className?: string;
    mainClassName?: string;
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
const EventHeader: React.FC<EventHeaderProps> = ({ link1, link2, link3, content, image, className,mainClassName }) => {
    const scrollToRegister = () => {
        const element = document.getElementById('eventRegister');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.container} ${className}`}>
            <div className={`${styles.main} ${mainClassName}`}>
                <div className={styles.left}>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <Link href='/'> {link1}</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link}>
                            <Link href='/events'> {link2}</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link}>
                            <Link href='/'> {link3}</Link>
                        </div>
                    </div>

                    {content}

                    <div className={styles.icons}>
                        {webinarData.map(webinar => (
                            <div className={styles.icon} key={webinar.id}>
                                {webinar.image}
                                {webinar.text}
                            </div>
                        ))}
                    </div>
                    <button className={styles.btn} onClick={scrollToRegister}>
                        Registration
                    </button>
                </div>
                <div className={styles.right}>
                    {image}
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
