import React from 'react';
import styles from './WebinarBody.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import peopleUsingLaptop from '../../assets/images/peopleUsingLaptop.png';
import Title from '../Title/Title';

const { blogImage } = ICONS;

const WebinarBody: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.text}>
                    In todays rapidly evolving digital landscape, opt-in email marketing stands out as a cornerstone of
                    effective communication. By prioritizing user consent and personalization, businesses enhance their
                    brands credibility and also ensure that their messages reach a genuinely interested audience. Lets
                    delve into the strategic importance of this method and explore how it can be a game-changer for your
                    brands outreach efforts
                </div>

                <Image src={peopleUsingLaptop.src} alt='Blog image' height={310} width={750} />
                <div className={styles.text}>
                    In todays rapidly evolving digital landscape, opt-in email marketing stands out as a cornerstone of
                    effective communication. By prioritizing user consent and personalization, businesses enhance their
                    brands credibility and also ensure that their messages reach a genuinely interested audience. Lets
                    delve into the strategic importance of this method and explore how it can be a game-changer for your
                    brands outreach efforts.
                </div>
                <div className={styles.text2}>
                    <div className={styles.textTitle}>In this post :</div>
                    <ul className={styles.styleList}>
                        <li>Are UI/UX newcomers ready to dive into learning;</li>
                        <li>Contemplate UI/UX and want hands-on practice before deciding;</li>
                        <li>Seek real insights from a working design professional;</li>
                        <li>Plan to join our UI/UX course and crave a preview.</li>
                    </ul>
                </div>
                <Title
                    title='What is opt-in email marketing?'
                    seccondClassName={styles.titleComponent}
                    description="Opt-in email marketing is an inbound marketing strategy and consent-based approach to sending commercial messages. Rather than blasting emails to just anyone, opt-in marketing ensures that recipients have given explicit permission to receive emails from a particular company or brand.
This practice transforms the conventional monologue of brand emails into a two-way dialogue. Opt-in allows users to actively voice their interest and let you know they want to hear what you've got to say. 
For consumers who choose to opt in, it's like building a library where they get to handpick each book versus having random titles thrust into their hands. 
After all, no one wants a bunch of spam emails crowding their inbox. Opt-in makes it easy for brands to avoid being the annoying company consumers have to unsubscribe from over and over."
                />
            </div>
        </div>
    );
};

export default WebinarBody;
