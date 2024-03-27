import React from 'react';
import styles from "./Course.module.scss"

const Course = ({ course }) => {
    return (
        <div key={course.name} className={styles.course}>
            <div className={styles.info}>
                <div className={styles[course.level.value]}>{course.level.label}</div>
                <div className={styles.name}>{course.name}</div>
                <div className={styles.duration}>{course.duration}</div>
            </div>
            {course.image}
        </div>
    );
};

export default Course;
