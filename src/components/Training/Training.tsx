import React, { ReactNode } from 'react';
import styles from './Training.module.scss';
import MoneyPng from '../../assets/images/moneys.png';
import Image from 'next/image';
import Technology from './Technology/Technology';
import { GneneralTypes } from './GeneralTypes';
import Title from '../Title/Title';

type BoxesType = {
    id: number;
    image: ReactNode;
    title: string;
};

const boxes: BoxesType[] = [
    {
        id: 1,
        image: <Image src={MoneyPng.src} alt='Money png' width={24} height={24} />,
        title: '44 hours theory',
    },
    {
        id: 2,
        image: <Image src={MoneyPng.src} alt='Money png' width={24} height={24} />,
        title: '28 practical works',
    },
    {
        id: 3,
        image: <Image src={MoneyPng.src} alt='Money png' width={24} height={24} />,
        title: '1 individual and 1 team project',
    },
];
const lessons: GneneralTypes[] = [
    {
        id: 1,
        name: 'Java Basic Syntax',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 2,
        name: 'Object-Oriented Programming (OOP)',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 3,
        name: 'Exception Handling',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 4,
        name: 'Input and Output (I/O)',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 4,
        name: 'Design Patterns',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
];

const bootcamps: GneneralTypes[] = [
    {
        id: 1,
        name: 'Introduction to Spring Boot',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 2,
        name: 'Setting Up a Spring Boot Project',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 3,
        name: 'Hello World Application',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 4,
        name: 'Spring Boot Configuration',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
    {
        id: 5,
        name: 'Dependency Management with Spring Boot',
        lessonCount: '4 Lessons,1 practical works',
        details: [
            'Variables,data types,and literals',
            'Operator and expressions',
            'Control statements (if,switch,loops)',
        ],
    },
];

const Training: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.smallContainer}>
               
                <Title
                className={styles.titleComponent}
                    title='Training program - 6 months'
                    description='To become a front-end developer, no technical education required. Anyone can master this profession
                    and start their journey in IT. Here are the stories of our graduates - they did it, and you can too.'
                />
                <div className={styles.boxes}>
                    {boxes.map(box => (
                        <div className={styles.box} key={box.id}>
                            {box.image}
                            <p>{box.title}</p>
                        </div>
                    ))}
                </div>
                </div>
          
            <div className={styles.cards}>
                <div className={styles.header}>
                    <div className={styles.title}>Advanced Java</div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.lessons}>
                    {lessons.map((lesson, index) => (
                        <Technology key={lesson.id} lesson={lesson} isFirst={index === 0} />
                    ))}
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.header}>
                    <div className={styles.title}>Spring Boot</div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.lessons}>
                    {lessons.map((lesson, index) => (
                        <Technology key={lesson.id} lesson={lesson} isFirst={index === 0} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Training;
