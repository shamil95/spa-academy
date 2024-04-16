import React from 'react';
import upComma from "../../../assets/icons/upComma.svg"
import Image from 'next/image';
import styles from './FeedBack.module.scss';

const FeedBack = ({ course }) => {
    return (
        <div key={course.fullName} className={styles.feedback}>
            <div className={styles.profile}>
                <div className={styles.personalInfo}>
                    {course.image}
                    <div className={styles.name}>
                        <div>{course.fullName}</div>
                        <div className={styles.profession}>{course.profession}</div>
                    </div>
                </div>
                <Image src={upComma.src} alt={'comma'} width={40} height={29} />
            </div>
            <div className={styles.feedbackBody}>{course.feedbackBody}</div>
        </div>
    );
};

export default FeedBack;
