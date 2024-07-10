'use client';
import React, { useRef } from 'react';
import styles from './CareersPage.module.scss';
import Header from '../Header/Header';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import WorkTogether from '../WorkTogether/WorkTogether';
import Beetroot from '../Beetroot/Beetroot';
import Spotlight from '../Spotlight/Spotlight';
import Positions from '../Positions/Positions';
import Footer from '../Footer/Footer';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import girlsPng from '../../assets/images/2girlsMeeting.png';

const { buttonDownIcon } = ICONS;

const CareersPage: React.FC = () => {
    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        if (positionsRef.current) {
            positionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.upButton}>About us</button>;
    const downButton = (
        <button className={styles.downButton} onClick={scrollToPositions}>
            See Vacancies <Image src={buttonDownIcon} alt='Button Down' />
        </button>
    );

    const componentImage = <Image src={girlsPng.src} alt='2 girls meeting' width={555} height={382} />;
    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Come work with us!'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam.'
                downButton={downButton}
            />
            <WorkTogether
                title=' Work together and help us shape the future of digital learning'
                description='We are on the quest to build a world-class education company that offers life-changing
                            opportunities to people across the globe. We help people start and improve careers in tech
                            by offering courses and a community that gives them the knowledge and network needed to
                            succeed.'
                image={componentImage}
            />
            <Beetroot />
            <Spotlight />
            <div ref={positionsRef}>
                <Positions />
            </div>
            <Footer />
        </>
    );
};

export default CareersPage;
