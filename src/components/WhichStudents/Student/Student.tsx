import React from 'react';
import styles from './Student.module.scss';

const Student = ({ student }) => {
    return (
        <div className={styles.student} key={student.id}>
            <h3 className={styles.title}>{student.title}</h3>
            <p className={styles.description}>{student.description}</p>
        </div>
    );
};

export default Student;
