import React from 'react';
import styles from './InstructorsBody.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { instructorImg, faceBookImage, XImage, instaImage, linkedinImage } = ICONS;
const footerIcons = [faceBookImage, XImage, instaImage, linkedinImage];

type InstructordDataType = {
    id: number;
    image: React.ReactNode;
    name: string;
    profession: string;
    text: string;
};

const IntructorsData: InstructordDataType[] = [
    {
        id: 1,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 2,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 3,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 4,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 5,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 6,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 7,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 8,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 9,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 10,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 11,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
    {
        id: 12,
        image: <Image src={instructorImg} alt='Instructor' width={120} height={120} className={styles.image} />,
        name: 'Carten Siphron',
        profession: 'Node JS Backend Developer',
        text: ' Carter Siphron has a Ph.D. in machine learning and learning analytics with a specific focus on sc',
    },
];

const InstructorsBody: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.row}>
                    {IntructorsData.map((instructor, index) =>
                        index === 0 ? (
                            <Link href='/instructors/instructor' key={instructor.id} className={styles.instructor}>
                                <div className={styles.imageContainer}>{instructor.image}</div>
                                <div className={styles.textContainer}>
                                    <div className={styles.title}>
                                        <div className={styles.name}>{instructor.name}</div>
                                        <div className={styles.border}></div>
                                        <div className={styles.profession}>{instructor.profession}</div>
                                    </div>
                                    <div className={styles.text}>{instructor.text}</div>
                                    <div className={styles.footer}>
                                        {footerIcons.map((icon, index) => (
                                            <div key={index} className={styles.socialIcon}>
                                                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div key={instructor.id} className={styles.instructor}>
                                <div className={styles.imageContainer}>{instructor.image}</div>
                                <div className={styles.textContainer}>
                                    <div className={styles.title}>
                                        <div className={styles.name}>{instructor.name}</div>
                                        <div className={styles.border}></div>
                                        <div className={styles.profession}>{instructor.profession}</div>
                                    </div>
                                    <div className={styles.text}>{instructor.text}</div>
                                    <div className={styles.footer}>
                                        {footerIcons.map((icon, index) => (
                                            <div key={index} className={styles.socialIcon}>
                                                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstructorsBody;
