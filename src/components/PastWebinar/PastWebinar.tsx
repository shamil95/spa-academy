import React from 'react';
import styles from './PastWebinar.module.scss';
import Header from '../Header/Header';
import EventHeader from '../EventHeader/EventHeader';
import Title from '../Title/Title';
import webinarPng from '../../assets/images/webinar1.png';
import Image from 'next/image';
import EventBody from '../EventBody/EventBody';
import UpcomingWebinars from '../UpcomingWebinars/UpcomingWebinars';
import EventRegister from '../EventRegister/EventRegister';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const eventImage = (
    <div className={styles.imageContainer}>
        <Image src={webinarPng.src} alt='webina image' width={360} height={230} className={styles.image} />
    </div>
);
const PastWebinar: React.FC = () => {
    const webinarDetails = {
        title: 'About Webinar',
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
        text1: 'Here’s what you are going to discover during the webinar:',
        text2: 'This webinar is for those who',
    };

    return (
        <>
            <Header />
            <EventHeader
                className={styles.eventHeader}
                link1='Home'
                link2='Webinar'
                link3='Team Talk :What is the IT Man...'
                image={eventImage}
                content={
                    <Title
                        className={styles.componentTitle}
                        title='Team Talk: What is the IT Management Analytics'
                        description='Making informed career choices is essential for being content in life, and we re here to guide you every step of the way. Join us for an exclusive webinar featuring Nadiia Perehinska, a designer with over six years of industry expertise who is set to lead our upcoming UX/UI group.'
                    />
                }
            />
            <EventBody
                title={webinarDetails.title}
                description={webinarDetails.description}
                mainPoints={webinarDetails.mainPoints}
                targetAudience={webinarDetails.targetAudience}
                text1={webinarDetails.text1}
                text2={webinarDetails.text2}
            />
            <UpcomingWebinars />
            <Subscribe
                title='Subscribe to our webinars'
                description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
            />
            <Footer />
        </>
    );
};

export default PastWebinar;
