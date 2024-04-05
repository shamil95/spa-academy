import React from 'react';
import styles from './OurPromise.module.scss';
import clickImage from '../../assets/images/click.png';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Promise from './Promise/Promise';

const { downArrowIcon, upArrowIcon } = ICONS;
const questions = [
    {
        id: 1,
        title: 'Why should you choose this course?',
        details: [
            ' As employees of Science Park Academy, our trainers speak their words not only with their theoretical knowledge, but also with their experience in local and global projects.',

            'Our experienced trainers know the problems that arise in real projects and share specific solutions with students.',

            'Students who complete the course can gain experience in real projects and enrich their portfolio',
        ],
    },
    {
        id: 2,
        title: 'Real work experience',
        details: [
            ' As employees of Science Park Academy, our trainers speak their words not only with their theoretical knowledge, but also with their experience in local and global projects.',

            'Our experienced trainers know the problems that arise in real projects and share specific solutions with students.',

            'Students who complete the course can gain experience in real projects and enrich their portfolio',
        ],
    },
    {
        id: 3,
        title: 'Highly experienced tutors',
        details: [
            ' As employees of Science Park Academy, our trainers speak their words not only with their theoretical knowledge, but also with their experience in local and global projects.',

            'Our experienced trainers know the problems that arise in real projects and share specific solutions with students.',

            'Students who complete the course can gain experience in real projects and enrich their portfolio',
        ],
    },
    {
        id: 4,
        title: 'Become a member of the startups',
        details: [
            ' As employees of Science Park Academy, our trainers speak their words not only with their theoretical knowledge, but also with their experience in local and global projects.',

            'Our experienced trainers know the problems that arise in real projects and share specific solutions with students.',

            'Students who complete the course can gain experience in real projects and enrich their portfolio',
        ],
    },
];

const OurPromise = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.header}>What do we promise you?</h1>
                <p className={styles.description}>
                    There are several types of courses operating in our course. Choosing Java in the IT field is a very
                    powerful choice. It is useful for you to get extensive information about what you will get during
                    the course and what you will achieve after this course.
                </p>
            </div>
            <div className={styles.rectangle}>
                <div className={styles.cards}>
                    {questions.map((question, index) => (
                        <Promise key={question.id} question={question} isFirst={index === 0} />
                    ))}
                </div>
                <div className={styles.images}></div>
            </div>
        </div>
    );
};

export default OurPromise;
