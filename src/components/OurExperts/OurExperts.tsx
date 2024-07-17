import React from 'react';
import styles from './OurExperts.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { instructorImg, womenInstructor, youngInstrcutor, fbIcon, xIcon, instaIcon, linkedinIcon } = ICONS;
const footerIcons = [fbIcon, xIcon, instaIcon, linkedinIcon];

type ExpertDataType = {
    id: number;
    image: React.ReactNode;
    name: string;
    profession: string;
};

const expertsData: ExpertDataType[] = [
    {
        id: 1,
        image: <Image src={instructorImg} alt='Instructor' width={85} height={85} className={styles.image} />,
        name: 'Carter Siphron',
        profession: 'Consultant',
    },
    {
        id: 2,
        image: <Image src={womenInstructor} alt='Instructor' width={85} height={85} className={styles.image} />,
        name: 'Lindsey Dokidis',
        profession: 'Consultant',
    },
    {
        id: 3,
        image: <Image src={youngInstrcutor} alt='Instructor' width={85} height={85} className={styles.image} />,
        name: 'Davis Dokidis',
        profession: 'Consultant',
    },
];

const OurExperts: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Our IT Project Management Experts</div>
                <div className={styles.boxes}>
                    {expertsData.map((expert) => (
                        <div key={expert.id} className={styles.box}>
                            <div className={styles.imageContainer}>
                                {expert.image}
                            </div>
                            <div className={styles.text}>
                                <div className={styles.name}>{expert.name}</div>
                                <div className={styles.profession}>{expert.profession}</div>
                                <div className={styles.icons}>
                                    {footerIcons.map((icon, index) => (
                                        <div key={index} className={styles.socialIcon}>
                                            <div className={styles.effects}></div>
                                            <Image src={icon.src} alt={icon.alt} width={16} height={16} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurExperts;

