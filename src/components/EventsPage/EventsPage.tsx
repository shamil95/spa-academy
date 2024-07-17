'use client';
import React, { useRef } from 'react';
import styles from './EventsPage.module.scss';
import Header from '../Header/Header';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import PastEvents from '../PastEvents/PastEvents';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const EventsPage: React.FC = () => {
    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        if (positionsRef.current) {
            positionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.upButton}>Events</button>;
    const downButton = (
        <button className={styles.downButton} onClick={scrollToPositions}>
            Subscribe now
        </button>
    );

    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Follow our Events Closely'
                text='Our academy continuously organizes events on different topics according to the interests of our students.'
                downButton={downButton}
            />
            <UpcomingEvents />
            <PastEvents />
            <div ref={positionsRef}>
            <Subscribe
                title='Subscribe to our events'
                description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
            />
            </div>
            <Footer/>
        </>
    );
};

export default EventsPage;
