'use client';
import React, { useState } from 'react';
import styles from './WhyWe.module.scss';
import Statistic from './Statistic/Statistic';
import HeaderText from '../HeaderText/HeaderText';
import { StaticProps } from './Statistic/StaticProps';
import ContactModal from '../ContactModal/ContactModal';

const statistics: StaticProps[] = [
    {
        statistic: '250+',
        label: 'studying student',
    },
    {
        statistic: '24/7',
        label: 'plan study time around your own schedule',
    },
    {
        statistic: '250+',
        label: 'those who complete the course note that they have achieved their goals',
    },
    {
        statistic: '30+',
        label: 'our highly knowledgeable instructors teach you',
    },
];

const WhyWe: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            {openModal && <ContactModal closeModal={setOpenModal} />}
            <div className={styles.statistics}>
                {statistics.map(stat => (
                    <Statistic key={stat.label} statistic={stat} />
                ))}
            </div>

            <HeaderText
                title='Why choose the Science Park Academy educational center'
                text='In our academy, you can choose your desired field of IT and form the necessary knowledge and skills
                for your future career development'
            >
                <button className={styles.apply} onClick={() => setOpenModal(true)}>
                    Apply now
                </button>
                <button className={styles.learnMore}>Contact us</button>
            </HeaderText>
        </div>
    );
};

export default WhyWe;
