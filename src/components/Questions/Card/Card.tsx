'use client';
import React, { useState } from 'react';
import { ICONS } from '@/assets/icons';
import styles from './Card.module.scss';
import Image from 'next/image';

const { plusIcon, minusIcon } = ICONS;
const Card = ({ title, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? styles.details : styles.card}>
            <button className={isOpen ? styles.btn2 : styles.btn1} onClick={handleClick}>
                <Image
                    src={isOpen ? minusIcon.src : plusIcon.src}
                    alt={isOpen ? 'minus' : 'plus'}
                    width={30}
                    height={30}
                />
            </button>
            {isOpen ? (
                <div className={styles.text}>
                    <h1 className={styles.header}>{title}</h1>
                    <p>{details}</p>
                </div>
            ) : (
                <h3>{title}</h3>
            )}
        </div>
    );
};

export default Card;
