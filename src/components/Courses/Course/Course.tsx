import React from 'react';
import Link from 'next/link';
import styles from './Course.module.scss';

const Course = ({ course, isFirst }) => {
    return (
        <Link href='/fundamentals' key={course.name} className={`${styles.course} ${isFirst ? styles.hover : ''}`}>
            <div className={styles.info}>
                <div className={styles[course.level.value]}>{course.level.label}</div>
                <div className={styles.name}>{course.name}</div>
                <div className={styles.duration}>{course.duration}</div>
            </div>
            {course.image}
        </Link>
    );
};

export default Course;
