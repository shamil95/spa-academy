'use client';
import React, { useRef } from 'react';
import styles from './ITStrategy.module.scss';
import Header from '../Header/Header';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import WorkTogether from '../WorkTogether/WorkTogether';
import Image from 'next/image';
import strategyImage from '../../assets/images/strategyImage.png';
import ManagementStatistics from '../ManagementStatistics/ManagementStatistics';
import OurExperts from '../OurExperts/OurExperts';
import ManagementServices from '../ManagementServices/ManagementServices';
import ProjectManagement from '../ProjectManagement/ProjectManagement';
import OurFeedbacks from '../OurFeedbacks/OurFeedbacks';
import ProjectManagers from '../ProjectManagers/ProjectManagers';
import Footer from '../Footer/Footer';
import ServiceForm from '../ServiceForm/ServiceForm';

const ITStrategy = () => {
    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        if (positionsRef.current) {
            positionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.upButton}>Consulting services</button>;
    const downButton = (
        <button className={styles.downButton} onClick={scrollToPositions}>
            Get in touch with us
        </button>
    );

    const componentImage = <Image src={strategyImage.src} alt='2 girls meeting' width={555} height={382} />;
    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title=' IT project management'
                text='We are  one team combining deep digital consulting experience, sector knowledge, and technical expertise in engineering'
                downButton={downButton}
            />
            <WorkTogether
                title=' We believe in defining the future.'
                description='With this insurgent mindset, we help companies at every step of their digital transformation journeys, from building and scaling cutting-edge technology solutions to transforming legacy IT infrastructure into digital platforms.

We are  one team combining deep digital consulting experience, sector knowledge, and technical expertise in engineering, artificial intelligence, and data science.'
                image={componentImage}
            />
            <ManagementStatistics />
            <OurExperts />
            <ManagementServices />
            <ProjectManagement />
            <OurFeedbacks/>
            <ProjectManagers/>
            <div ref={positionsRef}>
            <ServiceForm/>
            </div>
            <Footer/>
        </>
    );
};

export default ITStrategy;
