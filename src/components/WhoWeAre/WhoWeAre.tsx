import React from 'react';
import styles from './WhoWeAre.module.scss';
import Image from 'next/image';
import meetingImage from '../../assets/images/meeting.png';
import TextComponent from '../Text/TextComponent';

const WhoWeAre: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.image}>
                    <Image src={meetingImage.src} alt='Meeting image' width={1140} height={340} />
                </div>
                <div className={styles.texts}>
                    <TextComponent
                        smallTitle='Who we are'
                        title='Goal focussed'
                        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum assumenda earum exercitationem consectetur tempora numquam nihil odit facilis unde possimus voluptatum modi rem illum vitae totam facilis unde possimus'
                    />
                    <TextComponent
                        smallTitle=''
                        title='Continuous improvement'
                        description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum assumenda earum exercitationem consectetur tempora numquam nihil odit facilis unde possimus voluptatum modi rem illum vitae totam facilis unde possimus'
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
