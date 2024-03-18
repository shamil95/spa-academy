import React from 'react';
import styles from './Benefits.module.scss';
import Image from 'next/image';
import upComma from '@/assets/icons/upComma.svg';
import { ICONS } from '@/assets/icons';
import classNames from 'classnames';

const benefits = [
    {
        title: 'Mentor support',
        active: true,
        body: 'Our mentors are always there to facilitate the learning process. They are accessible guides that you can easily ask questions and get answers quickly during the learning process.',
    },
    {
        title: 'Free trial lesson',
        active: false,
        body: 'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        title: 'Career support',
        active: false,
        body: 'You need to acquire the necessary knowledge and skills for a successful career. Our professional team will help you on this way. Our business relations will provide.',
    },
    {
        title: 'Best EDU format',
        active: false,
        body: 'You can participate in the training process both face-to-face and remotely. Both in-person and remote classes are taught based on the same program.',
    },
    {
        title: '24/7 open to learn',
        active: false,
        body: 'To be a real professional, you need to be surrounded by professionals. Our academy is open 24/7. Here you can learn, share what you have learned.',
    },
    {
        title: 'Internship programs',
        active: false,
        body: 'All job postings require experience. We will provide the internship program after successful graduation!',
    },
];

const { benefitIcon, benefitIcon2 } = ICONS;

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>We promise our students a future beyond just educating them</div>
            <div className={styles.headerExtra}>
                One of the main features of our course is that after training the students, we give them real projects
                and prepare them for the market
            </div>
            <div className={styles.benefits}>
                {benefits.map(benefit => (
                    <div
                        key={benefit.title}
                        className={classNames(styles.benefit, { [styles.active]: benefit.active })}
                    >
                        {benefit.active ? (
                            <Image src={benefitIcon.src} alt={'benefit'} width={40} height={40} />
                        ) : (
                            <Image src={benefitIcon2.src} alt={'benefit'} width={40} height={40} />
                        )}

                        <div className={styles.title}>{benefit.title}</div>
                        <div>{benefit.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
