import React from 'react';
import feedback1 from '../../assets/images/feedback1.png';
import feedback2 from '../../assets/images/feedback2.png';
import feedback3 from '../../assets/images/feedback3.png';
import upComma from '../../assets/icons/upComma.svg';
import Image from 'next/image';
import styles from './StudentFeedback.module.scss';
import FeedBack from './Feedback/FeedBack';
import { FeedbackProps } from './Feedback/FeedbackProps';

const feedBacks :FeedbackProps[] = [
    {
        fullName: 'Maria Philips',
        profession: 'Web developer',
        image: <Image src={feedback1.src} alt={'feedback1'} width={50} height={50} />,
        feedbackBody:
            'SPAcademy attaches great importance to customer satisfaction. Whenever you need help with anything. Each lesson is carefully designed to provide me with a deep understanding of the subject in @SPA.',
    },
    {
        fullName: 'Ahmad Bator',
        profession: 'Data Analytic',
        image: <Image src={feedback2.src} alt={'feedback2'} width={50} height={50} />,
        feedbackBody:
            '@SPAcademy offers students an excellent experience using the latest technology in education. Their online platforms make it easy to interact with course content. This academy offers various opportunities..',
    },
    {
        fullName: 'Jaylon Gouse',
        profession: 'Java Programmer',
        image: <Image src={feedback3.src} alt={'feedback3'} width={50} height={50} />,
        feedbackBody:
            'The teachers at this academy are not only experts in their subjects, but also stand out for their ability to inspire students. They helped me understand the dynamics of the business world and improve myself.',
    },
];

const StudentFeedback: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>Student Feedback</div>
            <div className={styles.headerExtra}>
                Our students tell you about the knowledge they gained at the academy and the style of conducting
                lessons...
            </div>
            <div className={styles.feedbacks}>
                {feedBacks.map(course => (
                    <FeedBack key={course.fullName} course={course} />
                ))}
            </div>
        </div>
    );
};

export default StudentFeedback;
