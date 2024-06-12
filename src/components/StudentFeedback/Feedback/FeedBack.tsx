import React, { ReactNode } from 'react';
import upComma from '../../../assets/icons/upComma.svg';
import Image from 'next/image';
import styles from './FeedBack.module.scss';
import { FeedbackProps } from './FeedbackProps';

const FeedBack: React.FC<{ course: FeedbackProps }> = ({ course }) => {
    const { fullName, image, profession, feedbackBody } = course;
    return (
        <div key={fullName} className={styles.feedback}>
            <div className={styles.profile}>
                <div className={styles.personalInfo}>
                    {image}
                    <div className={styles.name}>
                        <div>{course.fullName}</div>
                        <div className={styles.profession}>{profession}</div>
                    </div>
                </div>
                <Image src={upComma.src} alt={'comma'} width={40} height={29} />
            </div>
            <div className={styles.feedbackBody}>{feedbackBody}</div>
        </div>
    );
};

export default FeedBack;
