import AboutHeader from '../AboutHeader/AboutHeader';
import Header from '../Header/Header';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import styles from './AboutPage.module.scss';
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            <AboutHeader />
            <WhoWeAre />
        </>
    );
};

export default AboutPage;
