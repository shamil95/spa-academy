import React from 'react';
import Image from 'next/image';
import ITFundamentals from '../../assets/images/ITFundamentals.png';
import Programming from '../../assets/images/Programming.png';
import WebDevelopment from '../../assets/images/Webdevelopment.png';
import DataScience from '../../assets/images/DataScience.png';
import CyberSecurity from '../../assets/images/Cybersecurity.png';
import CloudComputing from '../../assets/images/CloudComputing.png';
import styles from './Courses.module.scss';
import Course from './Course/Course';

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

const Courses = () => {
    return (
        <div className={styles.allCourses}>
            <div className={styles.header}>Get to know our courses, choose one of them and join</div>
            <div className={styles.headerExtra}>
                Join our live online classes with industry experts. At an affordable price.
            </div>
            <div className={styles.container}>
                {courses.map(course => (
                    <Course key={course.name} course={course}/>
                ))}
            </div>
        </div>
    );
};

export default Courses;
