import React from 'react';
import styles from './SingleEvent.module.scss';
import Header from '../Header/Header';
import EventHeader from '../EventHeader/EventHeader';
import EventBody from '../EventBody/EventBody';
import EventRegister from '../EventRegister/EventRegister';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { usingLaptop } = ICONS;

const eventImage = (
    <div className={styles.imageContainer}>
        <Image src={usingLaptop} alt='Usinf laptop' width={360} height={230} className={styles.image} />
    </div>
);

const SingleEvent: React.FC = () => {
    const eventDetails = {
        title: 'About Event',
        description:
            "During this free webinar, Nadiia, a Senior Product Designer, will provide an insider's perspective on UX/UI design and showcase real-world UI/UX design tasks in action. Discover the essence of UI/UX design as we uncover typical tasks, objectives, and the daily routines of professionals in this dynamic field. Additionally, we'll conduct a Q&A session at the end so you can ask any questions and seek advice from an experienced designer and Beetroot Academy’s teacher.",
        mainPoints: [
            'What is UI/UX design?',
            'UI/UX designers’ typical tasks and goals',
            'A day in the life of a UI/UX designer',
            'How to tell if design is your cup of tea?',
        ],
        targetAudience: [
            'Are UI/UX newcomers ready to dive into learning;',
            'Contemplate UI/UX and want hands-on practice before deciding;',
            'Seek real insights from a working design professional;',
            'Plan to join our UI/UX course and crave a preview.',
        ],
        text1: 'Here’s what you are going to discover during the event:',
        text2: 'This event is for those who',
    };
    return (
        <>
            <Header />
            <EventHeader
                link1='Home'
                link2='Events'
                link3='Tech Career'
                image={eventImage}
                content={
                    <Title
                        className={styles.componentTitle}
                        title='Tech Career Compass: Find Your Path in QA Testing'
                        description='Making informed career choices is essential for being content in life, and we re here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.'
                    />
                }
            />

            <EventBody
                title={eventDetails.title}
                description={eventDetails.description}
                mainPoints={eventDetails.mainPoints}
                targetAudience={eventDetails.targetAudience}
                text1={eventDetails.text1}
                text2={eventDetails.text2}
            />
            <EventRegister
                title='Event Registration'
                description='Please fill out the form below to register for our upcoming webinar.'
            />
            <Footer />
        </>
    );
};

export default SingleEvent;
