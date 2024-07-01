import AboutHeader from '../AboutHeader/AboutHeader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Innovate from '../Innovate/Innovate';
import Partners from '../Partners/Partners';
import Process from '../Process/Process';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import styles from './AboutPage.module.scss';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            <AboutHeader />
            <WhoWeAre />
            <Process />
            <Innovate />
            <Partners />
            <Footer />
        </>
    );
};

export default AboutPage;
