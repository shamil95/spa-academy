import React from 'react';
import styles from "./Student.module.scss"
import { StudentType } from '../StudentType';

const Student: React.FC<{ student: StudentType }> = ({ student }) => {
    return (
        <div className={styles.student} key={student.id}>
            <div className={styles.title}>{student.title}</div>
            <div className={styles.description}>{student.description}</div>
        </div>
    );
};

export default Student;
