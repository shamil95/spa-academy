import React from 'react';
import styles from './InstructorHeader.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import Link from 'next/link';

const { instructorImg, faceBookImage, XImage, instaImage, linkedinImage ,arrowRight} = ICONS;
const footerIcons = [faceBookImage, XImage, instaImage, linkedinImage];

const InstructorHeader: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <Link href='/'>Home</Link>
                        <Image src={arrowRight} alt='Arrow right'/>
                    </div>
                    <div className={styles.link}>
                        <Link href='/instructors'>Instructors</Link>
                        <Image src={arrowRight} alt='Arrow right'/>
                    </div>
                    <div className={styles.link}>
                        <Link href='/'>Carthen Siphron</Link>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <Image
                            src={instructorImg}
                            alt='Instructor image'
                            width={120}
                            height={120}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            <div className={styles.name}>Carter Siphron</div>
                            <div className={styles.profession}>Node Js Backend Developer</div>
                        </div>
                        <div className={styles.footer}>
                            {footerIcons.map((icon, index) => (
                                <div key={index} className={styles.socialIcon}>
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

export default InstructorHeader;
