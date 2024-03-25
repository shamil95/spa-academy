import React from 'react';
import styles from './Content.module.scss';

import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { starIcon } = ICONS;

const Content = ({ title }) => {
    return (
        <div className={styles.container}>
            <Image src={starIcon.src} alt='start' height={25} width={25} />
            <p>{title}</p>
        </div>
    );
};

export default Content;
