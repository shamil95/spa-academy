import React from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Innovate from '../Innovate/Innovate';
import Partners from '../Partners/Partners';
import Process from '../Process/Process';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import styles from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    const upButton = <button className={styles.topButton}>About us</button>;

    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='A UX Case Study on Creating Studious Environment for Students'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam, nihil excepturi perferendis molestias dolorem.'
            />
            <WhoWeAre />
            <Process />
            <Innovate />
            <Partners />
            <Footer />
        </>
    );
};

export default AboutPage;
