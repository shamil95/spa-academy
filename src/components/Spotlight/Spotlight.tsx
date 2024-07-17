import React from 'react';
import styles from './Spotlight.module.scss';
import Image from 'next/image';
import spotlightPng from '../../assets/images/sptolight.png';

const Spotlight: React.FC = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.main}>
                <div className={styles.imageContainer}>
                    <Image src={spotlightPng} alt='Spotlight' />
                </div>
                <div className={styles.midle}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            {' '}
                            <span>Team member spotlight</span>
                            <div className={styles.border}></div>
                        </div>
                        <div className={styles.description}>
                            Since starting at Science Park Academy I have been involved in a variety of challenging
                            projects and I have the freedom to choose the most appropriate technologies to get the job
                            done. I really enjoy getting to work alongside a talented team with a diverse skillset.
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.instructor}>Elshad Pirimov, Senior Full-stack Developer</div>
                            <div className={styles.colorText}>@ScienceParkAcademy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;
