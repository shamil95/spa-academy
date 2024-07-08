'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Header from '../Header/Header';
import styles from './WebinarsPage.module.scss';
import UpcomingWebinars from '../UpcomingWebinars/UpcomingWebinars';
import PastWebinars from '../PastWebinars/PastWebinars';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const WebinarsPage: React.FC = () => {
    const subscribeRef = useRef<HTMLDivElement | null>(null);

    const handleScrollToSubscribe = () => {
        if (subscribeRef.current) {
            subscribeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.upButton}>Webinar</button>;
    const downButton = (
        <button className={styles.downButton} onClick={handleScrollToSubscribe}>
            Subscribe now
        </button>
    );

    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Come work with us!'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam.'
                downButton={downButton}
            />
            <UpcomingWebinars />
            <PastWebinars />
            <div ref={subscribeRef}>
                <Subscribe
                    title='Subscribe to our webinars'
                    description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
                />
            </div>
            <Footer />
        </>
    );
};

export default WebinarsPage;
