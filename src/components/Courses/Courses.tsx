'use client';
import React, { useState } from 'react';
import styles from './Courses.module.scss';
import Link from 'next/link';

type CourseType = {
    courseType: string;
    name: string;
    duration: string;
    startDate: string;
};

const courses: CourseType[] = [
    {
        courseType: 'For Teenagers',
        name: 'Mathematics for Programming',
        duration: '4 months',
        startDate: 'Start: June 2024',
    },
    {
        courseType: 'For Teenagers',
        name: 'Programming Fundamentals',
        duration: '4 months',
        startDate: 'Start: June 2024',
    },
    {
        courseType: 'For Teenagers',
        name: 'Computer Architecture and Systems',
        duration: '4 months',
        startDate: 'Start: June 2024',
    },
    {
        courseType: 'For Teenagers',
        name: 'Graphic Design Fundamentals',
        duration: '4 months',
        startDate: 'Start: June 2024',
    },
    {
        courseType: 'For Teenagers',
        name: 'Web Development Fundamentals',
        duration: '4 months',
        startDate: 'Start: June 2024',
    },
];

const coursesTitle: string[] = [
    'Popular Courses',
    'For Teenagers',
    'Mathematics',
    'Data Science',
    'Digital Marketing',
    'Design',
    'Software Development',
    'BootCamps',
];

const Courses: React.FC = () => {
    const [isColored, setIsColored] = useState<boolean[]>(courses.map((_, index) => index === 1));
    const handleClick = (index: number) => {
        const newIsColored = [...isColored];
        newIsColored[index] = !newIsColored[index];
        setIsColored(newIsColored);
    };
    return (
        <div className={styles.allCourses}>
            <div className={styles.main}>
                <div className={styles.header}>Get to know our courses, choose one of them and join</div>
                <div className={styles.headerExtra}>
                    Join our live online classes with industry experts. At an affordable price.
                </div>
            </div>
            <div className={styles.boxes}>
                {coursesTitle.map((courseT, index) => (
                    <div
                        key={index}
                        className={isColored[index] ? styles.box2 : styles.box}
                        onClick={() => handleClick(index)}
                    >
                        <span>{courseT}</span>
                    </div>
                ))}
            </div>
            <div className={styles.container}>
                {courses.map((course, index) => (
                    <React.Fragment key={course.name}>
                        {index === 0 ? (
                            <Link href='/fundamentals' className={styles.course}>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        <div className={styles.courseType}>{course.courseType}</div>
                                        <div className={styles.name}>{course.name}</div>
                                        <div className={styles.blacks}>
                                            <div className={styles.duration}>{course.duration}</div>
                                            <div className={styles.startDate}>{course.startDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div key={course.name} className={styles.course}>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        <div className={styles.courseType}>{course.courseType}</div>
                                        <div className={styles.name}>{course.name}</div>
                                        <div className={styles.blacks}>
                                            <div className={styles.duration}>{course.duration}</div>
                                            <div className={styles.startDate}>{course.startDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Courses;
