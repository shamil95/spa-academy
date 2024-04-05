import React from 'react';
import styles from './Students.module.scss';
 import Student from './Student/Student';

const studentTypes = [
    {
        id: 1,
        title: 'To non-IT professionals',
        description:
            'If you are not satisfied with your current career and earnings, Front-end programming will be a convenient entry for you into the lucrative and growing IT industry.',
    },
    {
        id: 2,
        title: 'To university students',
        description:
            'Get a second major while studying at university. Get hands-on experience and earn while you are a student.',
    },
    {
        id: 3,
        title: 'To IT professionals',
        description:
            'Systematize your IT knowledge and acquire new applied skills required in domestic and international markets.',
    },
];

const Students = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.header}>Who is the IT Fundamentals course for?</h1>
                    <p className={styles.description}>
                        It is a direction open to anyone with any professional background. It is not necessary to have
                        experience in the field of IT to become a front-end developer — it is enough to be goal-oriented
                        and have enough time to learn and improve the acquired knowledge.
                    </p>
                </div>
                <div className={styles.students}>
                    {studentTypes.map(student => (
                        <Student key={student.id} student={student} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Students;
