import React, { useState } from 'react';
import Image from 'next/image';
import ITFundamentals from '../../assets/images/ITFundamentals.png';
import Programming from '../../assets/images/Programming.png';
import WebDevelopment from '../../assets/images/Webdevelopment.png';
import DataScience from '../../assets/images/DataScience.png';
import CyberSecurity from '../../assets/images/Cybersecurity.png';
import CloudComputing from '../../assets/images/CloudComputing.png';
import styles from './Courses.module.scss';

import Link from 'next/link';

const courses = [
    {
        level: {
            label: 'Beginner',
            value: 'beginner',
        },
        name: 'IT Fundamentals',
        duration: '4 month',
        image: <Image src={ITFundamentals.src} alt={'course'} width={225} height={225} />,
    },
    {
        level: {
            label: 'Advanced',
            value: 'advanced',
        },
        name: 'Programming',
        duration: '4 month',
        image: <Image src={Programming.src} alt={'course'} width={225} height={225} />,
    },
    {
        level: {
            label: 'Professional',
            value: 'professional',
        },
        name: 'Web Development',
        duration: '4 month',
        image: <Image src={WebDevelopment.src} alt={'course'} width={225} height={225} />,
    },
    {
        level: {
            label: 'Middle',
            value: 'middle',
        },
        name: 'Data Science',
        duration: '4 month',
        image: <Image src={DataScience.src} alt={'course'} width={225} height={225} />,
    },
    {
        level: {
            label: 'Advanced',
            value: 'advanced',
        },
        name: 'Cyber Security',
        duration: '4 month',
        image: <Image src={CyberSecurity.src} alt={'course'} width={225} height={225} />,
    },
    {
        level: {
            label: 'Beginner',
            value: 'beginner',
        },
        name: 'Cloud Computing',
        duration: '4 month',
        image: <Image src={CloudComputing.src} alt={'course'} width={225} height={225} />,
    },
];

const Courses:React.FC = () => {
    return (
        <div className={styles.allCourses}>
            <div className={styles.main}>
                <div className={styles.header}>Get to know our courses, choose one of them and join</div>
                <div className={styles.headerExtra}>
                    Join our live online classes with industry experts. At an affordable price.
                </div>
            </div>
            <div className={styles.container}>
                {courses.map((course, index) => (
                    <React.Fragment key={course.name}>
                        {index === 0 ? (
                            <Link href='/fundamentals'  className={styles.hover}>
                                <div className={styles.info}>
                                    <div className={styles[course.level.value]}>{course.level.label}</div>
                                    <div className={styles.name}>{course.name}</div>
                                    <div className={styles.duration}>{course.duration}</div>
                                </div>
                                {course.image}
                            </Link>
                        ) : (
                            <div key={course.name} className={styles.course}>
                                <div className={styles.info}>
                                    <div className={styles[course.level.value]}>{course.level.label}</div>
                                    <div className={styles.name}>{course.name}</div>
                                    <div className={styles.duration}>{course.duration}</div>
                                </div>
                                {course.image}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Courses;
