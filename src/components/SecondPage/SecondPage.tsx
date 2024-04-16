import React from 'react';
import styles from './SecondPage.module.scss';
import Header from '../Header/Header';
import Infromation from '../Information/Infromation';
import Image from 'next/image';
import ITFundamentals from '../../assets/images/ITfundamentals2.png';
import Students from '../WhichStudents/Students';
import Training from '../Training/Training';
import OurBenefits from '../OurBenefits/OurBenefits';
import OurPromise from '../OurPromises/OurPromise';
import WhyFundamentals from '../WhyFundamentals/WhyFundamentals';
import AnyQuestions from '../AnyQuestions/AnyQuestions';
import Footer from '../Footer/Footer';

const informations = [
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

const SecondPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.rectangle}>
                </div>
                <div className={styles.rectangle2}><h1>Messi</h1></div>
                <div className={styles.banner}>
                    <Infromation
                        intro='Beginner'
                        title='IT Fundamentals'
                        description=' We will help you master an in-demand profession from scratch in 10 months and find a job in IT. The first week of training is free. We will help you master an in-demand profession from scratch in 10 months and find a job in IT. '
                    >
                        <div className={styles.buttons}>
                            <button className={styles.start}>Start learning with us</button>
                            <button className={styles.see}>See the lesson program</button>
                        </div>
                        <p className={styles.text}> The nearest start is January 25, February 8 and February 22 </p>
                    </Infromation>
                    <Image
                        className={styles.image}
                        src={ITFundamentals.src}
                        alt={'fundamentalsPng'}
                        width={575}
                        height={520}
                    />
                </div>
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
            <Students />
            <Training />
            <OurPromise />
            <WhyFundamentals />
            <AnyQuestions />
            <OurBenefits />
            <Footer />
        </>
    );
};

export default SecondPage;
