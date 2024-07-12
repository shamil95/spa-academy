import React from 'react';
import styles from './EventBody.module.scss';
import Title from '../Title/Title';

const EventBody: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title
                    title='About Event'
                    description="During this free webinar, Nadiia, a Senior Product Designer, will provide an insider's perspective on UX/UI design and showcase real-world UI/UX design tasks in action. Discover the essence of UI/UX design as we uncover typical tasks, objectives, and the daily routines of professionals in this dynamic field. Additionally, we'll conduct a Q&A session at the end so you can ask any questions and seek advice from an experienced designer and Beetroot Academy’s teacher. "
                />
                <div className={styles.text}>
                    <div className={styles.title}>Here’s what you are going to discover during the event:</div>
                    <ul>
                        <li>🔸What is UI/UX design?</li>
                        <li>🔸UI/UX designers’ typical tasks and goals</li>
                        <li>🔸A day in the life of a UI/UX designer</li>
                        <li>🔸How to tell if design is your cup of tea?</li>
                    </ul>
                </div>

                <div className={styles.text2}>
                    <div className={styles.title}>This event is for those who</div>
                    <ul className={styles.styleList}>
                        <li>Are UI/UX newcomers ready to dive into learning;</li>
                        <li>Contemplate UI/UX and want hands-on practice before deciding;</li>
                        <li>Seek real insights from a working design professional;</li>
                        <li>Plan to join our UI/UX course and crave a preview.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventBody;
