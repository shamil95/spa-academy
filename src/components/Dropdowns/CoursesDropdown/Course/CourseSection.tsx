import React from 'react';
import styles from './CourseSection.module.scss';
import Link from 'next/link';

type CoursesType = {
    id: number;
    title: string;
};

type CourseSectionProps = {
    title: string;
    courses: CoursesType[];
};

const CourseSection: React.FC<CourseSectionProps> = ({ title, courses }) => (
    <div className={styles.row}>
        <div className={styles.title}>{title}</div>
        <ul className={styles.links}>
            {courses.map(course => (
                <li className={styles.link} key={course.id}>
                    <Link href=''>{course.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default CourseSection;
