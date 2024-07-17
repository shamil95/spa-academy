import React from 'react';
import styles from './PastEvent.module.scss';
import Header from '../Header/Header';
import EventHeader from '../EventHeader/EventHeader';
import Title from '../Title/Title';
import EventBody from '../EventBody/EventBody';
import EventLinks from '../EventLinks/EventLinks';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const PastEvent = () => {
    return (
        <>
            <Header />
            <EventHeader
                className={styles.eventComponent}
                link1='Home'
                link2='Events'
                link3='AI for Back-End developers'
                content={
                    <Title
                        className={styles.componentTitle}
                        title='AI for Back-End developers: a deep dive into AI tools for Python'
                        description='Making informed career choices is essential for being content in life, and we re here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.'
                    />
                }
            />
            <EventBody />
            <EventLinks />
            <Subscribe
                title='Subscribe to our Events'
                description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
            />
            <Footer/>
        </>
    );
};

export default PastEvent;
