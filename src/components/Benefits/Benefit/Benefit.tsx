import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Benefit.module.scss';
import classNames from 'classnames';
import { ICONS } from '@/assets/icons';

const { benefitIcon, benefitIcon2 } = ICONS;

const Benefit = ({ benefit, isActive, onClick }) => {
    return (
        <div
            key={benefit.title}
            className={classNames(styles.benefit, { [styles.active]: isActive })}
            onClick={onClick}
        >
            {isActive ? (
                <Image src={benefitIcon.src} alt={'benefit'} width={40} height={40} />
            ) : (
                <Image src={benefitIcon2.src} alt={'benefit'} width={40} height={40} />
            )}

            <div className={styles.title}>{benefit.title}</div>
            <div>{benefit.body}</div>
        </div>
    );
};

export default Benefit;
