import React from 'react';
import styles from './Innovate.module.scss';
import TextComponent from '../Text/TextComponent';
import Image from 'next/image';
import meetinPng2 from '../../assets/images/meeting2.png';
import focusComputer from '../../assets/images/focuesComp.png';

const Innovate: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.middle}>
                    <TextComponent
                        smallTitle='Our Mission'
                        title='Inspire,Innovate,Share'
                        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum assumenda earum exercitationem consectetur tempora numquam nihil odit facilis unde possimus voluptatum modi rem illum vitae totam facilis unde possimus'
                    />
                </div>
                <div className={styles.image}>
                    <Image src={meetinPng2.src} alt='Meeting' width={514} height={334} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.image}>
                    <Image src={focusComputer.src} alt='Meeting' width={514} height={334} />
                </div>
                <div className={styles.middle}>
                    <TextComponent
                        smallTitle='Our Vision'
                        title='IGeneral Focus to Future'
                        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum assumenda earum exercitationem consectetur tempora numquam nihil odit facilis unde possimus voluptatum modi rem illum vitae totam facilis unde possimus'
                    />
                </div>
            </div>
        </div>
    );
};

export default Innovate;
