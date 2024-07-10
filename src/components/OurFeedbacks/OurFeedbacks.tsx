import React from 'react';
import styles from './OurFeedbacks.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
const { commaIcon, personImage,vectorLeft,vectorRight } = ICONS;

const OurFeedbacks: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.text}>
                    <div className={styles.imageContainer}>
                        <Image src={commaIcon} alt='commaIcon' />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>What they say about our Academy?</div>
                        <div className={styles.text}>More than 3000 users have been helped by World Online Course.</div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.row1}>
                        <div className={styles.cardTitle}>What they say</div>
                        <div className={styles.points}></div>
                    </div>
                    <div className={styles.row2}>
                        "Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the
                        assignments given are also relevant to the current scope of work,"
                    </div>
                    <div className={styles.row3}>
                        <div className={styles.person}>
                            <div className={styles.personImage}>
                                <Image src={personImage} alt='Person' width={60} height={60} className={styles.image} />
                            </div>
                            <div className={styles.personInfo}>
                                <div className={styles.name}>Terry Press</div>
                                <div className={styles.profession}>Backend Developer @Europark</div>
                            </div>
                        </div>
                        <div className={styles.directions}>
                            <div className={styles.left}>
                                <Image src={vectorLeft} alt='Vector Left'/>
                            </div>
                            <div className={styles.right}>
                            <Image src={vectorRight} alt='Vector Right'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeedbacks;
