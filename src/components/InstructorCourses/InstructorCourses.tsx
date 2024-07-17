import React from 'react';
import styles from './InstructorCourses.module.scss';
import Title from '../Title/Title';
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
];

const InstructorCourses: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title
                title='Instructor courses'
                description='Lorem ipsum dolor sit amet consectetur. Fermentum bibendum sem sit fames. Tortor elementum vel amet elementum eu commodo'
            />
            <div className={styles.courses}>
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

export default InstructorCourses;
