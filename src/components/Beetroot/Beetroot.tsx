import React from 'react';
import styles from './Beetroot.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Title from '../Title/Title';

const { beetrootIcon1, beetrootIcon2, beetrootIcon3, beetrootIcon4, beetrootIcon5, beetrootIcon6 } = ICONS;

type boxDataType = {
    id: number;
    image: React.ReactNode;
    title: string;
    description: string;
};

const boxData: boxDataType[] = [
    {
        id: 1,
        image: <Image src={beetrootIcon1} alt='Document Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
    {
        id: 2,
        image: <Image src={beetrootIcon2} alt='User Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
    {
        id: 3,
        image: <Image src={beetrootIcon3} alt='Star Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
    {
        id: 4,
        image: <Image src={beetrootIcon4} alt='Cup Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
    {
        id: 5,
        image: <Image src={beetrootIcon5} alt='Music Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
    {
        id: 6,
        image: <Image src={beetrootIcon6} alt='Clock Icon' width={36} height={36} />,
        title: 'Accessible education',
        description: 'Create impact locally and globally through accessible tech education',
    },
];

const Beetroot = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title
                    title='Why join Beetroot Academy?'
                    description='Office ipsum you must be muted. Gave invested discussions company dangerous value-added
                        meaningful company. Hammer looking functional.'
                />

                <div className={styles.boxes}>
                    {boxData.map(box => (
                        <div key={box.id} className={styles.box}>
                            <div className={styles.boxImage}>{box.image}</div>
                            <div className={styles.boxTitle}>{box.title}</div>
                            <div className={styles.boxDescription}>{box.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Beetroot;
