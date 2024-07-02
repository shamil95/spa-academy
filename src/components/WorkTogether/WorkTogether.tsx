import React from 'react';
import styles from './WorkTogether.module.scss';
import Image from 'next/image';
import girlsPng from '../../assets/images/2girlsMeeting.png';

const WorkTogether: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.midle}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Work together and help us shape the future of digital learning
                        </div>
                        <div className={styles.description}>
                            We are on the quest to build a world-class education company that offers life-changing
                            opportunities to people across the globe. We help people start and improve careers in tech
                            by offering courses and a community that gives them the knowledge and network needed to
                            succeed.
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={girlsPng.src} alt='2 girls meeting' width={555} height={382} />
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;
