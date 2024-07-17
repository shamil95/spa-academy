 "use client";
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

const { buttonDownIcon } = ICONS;

const CareersPage: React.FC = () => {
    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        if (positionsRef.current) {
            positionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.topButton}>About us</button>;
    const downButton = (
        <button className={styles.upButton} onClick={scrollToPositions}>
            See Vacancies <Image src={buttonDownIcon} alt='Button Down' />
        </button>
    );

    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Come work with us!'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam.'
                downButton={downButton}
            />
            <WorkTogether />
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
