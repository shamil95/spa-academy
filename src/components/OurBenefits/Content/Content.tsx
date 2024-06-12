import React from 'react';
import styles from './Content.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import { ContentProps } from '../ContentProps';
const { starIcon } = ICONS;




const Content: React.FC< ContentProps> = ({ title }) => {
    return (
        <div className={styles.container}>
            <Image src={starIcon.src} alt='start' height={25} width={25} />
            <p>{title}</p>
        </div>
    );
};

export default Content;
