import React from 'react';
import styles from './LargeWebinar.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';

const { calendarStar, alarmOclock, loactionIcon } = ICONS;

type LargeWebinarComponentProps = {
    webinarImage: React.ReactNode;
    webinarTitle: string;
    webinarDescription: string;
    className?: string;
};

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

const LargeWebinar: React.FC<LargeWebinarComponentProps> = ({
    webinarImage,
    webinarDescription,
    webinarTitle,
    className,
}) => {
    return (
        <div className={styles.webinar}>
            <div className={styles.webinaContainer}>
                {webinarImage}
                <div className={styles.webinarInfo}>
                    <div className={styles.icons}>
                        {webinarData.map(webinar => (
                            <div className={styles.icon} key={webinar.id}>
                                {webinar.image}
                                {webinar.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles.text}>
                        <div className={styles.webinarTitle}>{webinarTitle}</div>
                        <div className={styles.description}>{webinarDescription}</div>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
        </div>
    );
};

export default LargeWebinar;
