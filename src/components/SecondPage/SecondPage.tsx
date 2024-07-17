'use client';
import React, { useRef } from 'react';
import styles from './SecondPage.module.scss';
import Header from '../Header/Header';
import Infromation from '../Information/Infromation';
import Students from '../WhichStudents/Students';
import Training from '../Training/Training';
import OurPromise from '../OurPromises/OurPromise';
import WhyFundamentals from '../WhyFundamentals/WhyFundamentals';
import AnyQuestions from '../AnyQuestions/AnyQuestions';
import Footer from '../Footer/Footer';
import CourseForm from '../CourseForm/CourseForm';

type InformationType = {
    id: number;
    title: string;
    info: string;
    count: string;
};

const informations: InformationType[] = [
    {
        id: 1,
        title: 'Duration',
        info: '6 Months (25 Weeks)',
        count: '2-3 hours per week',
    },
    {
        id: 2,
        title: 'Employment',
        info: 'We will help you find a job or internship',
        count: '',
    },
    {
        id: 3,
        title: 'Document',
        info: 'Diploma of professional retraining',
        count: '',
    },
    {
        id: 4,
        title: 'Price',
        info: '375AZN/ay',
        count: 'Ümumi kurs üzrə ödəniş:3600 AZN',
    },
];

const SecondPage: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const programRef = useRef<HTMLDivElement>(null);
    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToProgram = () => {
        if (programRef.current) {
            programRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <div className={styles.main}>
                        <Infromation
                            intro='For teenagers'
                            title='Mathematics for Programming'
                            description=' We will help you master an in-demand profession from scratch in 10 months and find a job in IT. The first week of training is free. We will help you master an in-demand profession from scratch in 10 months and find a job in IT. '
                        >
                            <div className={styles.buttons}>
                                <button className={styles.start} onClick={scrollToForm}>
                                    Start learning with us
                                </button>
                                <button className={styles.see} onClick={scrollToProgram}>
                                    See the lesson program
                                </button>
                            </div>
                            <p className={styles.text}> The nearest start is January 25, February 8 and February 22 </p>
                        </Infromation>

                        <div className={styles.info}>
                            {informations.map(information => (
                                <div className={styles.information} key={information.id}>
                                    <p className={styles.title}>{information.title}</p>
                                    <h3>{information.info}</h3>
                                    <p className={styles.title}>{information.count}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Students />
            <div ref={programRef}>
                <Training />
            </div>
            <OurPromise />
            <WhyFundamentals />
            <AnyQuestions />
            <div ref={formRef}>
                <CourseForm />
            </div>
            <Footer />
        </>
    );
};

export default SecondPage;
