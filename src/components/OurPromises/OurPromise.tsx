import React from 'react';
import styles from './OurPromise.module.scss';
import menImage from '../../assets/images/men.png';
import whiteClick from '../../assets/images/whiteClcik.png';
import computerImage from '../../assets/images/computer.png';
import blackLogoImage from '../../assets/images/blackLogo.png';
import playIcon from '../../assets/images/PlayIcon.png';
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
                <div className={styles.images}>
                    <div className={styles.midle}>
                        <Image className={styles.click} src={whiteClick.src} alt='whiteClic' width={100} height={100} />
                        <div className={styles.academy}>
                            <div className={styles.imgComp}>
                                <Image src={playIcon.src} alt='playIcon' width={27} height={27} />
                            </div>
                            <p className={styles.academyText}>What do I need for study in Science Park Academy?</p>
                            <div className={styles.rec1}></div>
                            <div className={styles.rec2}></div>
                        </div>
                    </div>
                    <Image className={styles.image} src={menImage.src} alt='menImage' width={440} height={480} />
                    <div className={styles.academyCard}>
                        <Image src={blackLogoImage.src} alt='black image' width={50} height={50} />
                        <h1 className={styles.cardHeader}>IT Fundamentals</h1>
                        <p className={styles.cardDes}>Science Park Academy</p>
                        <button className={styles.cardBtn}>Enroll now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPromise;
