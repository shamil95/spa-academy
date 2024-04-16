'use client';
import React, { useState } from 'react';
import { ICONS } from '@/assets/icons';
import styles from './Card.module.scss';
import Image from 'next/image';

const { plusIcon, minusIcon } = ICONS;
const Card = ({ title, details, isFirst }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isFirst ? (
                <div className={!isOpen ? styles.card2 : styles.card} onClick={handleClick}>
                    <div className={styles.cardText}>
                        <button className={styles.btn}>
                            <Image
                                src={!isOpen ? minusIcon.src : plusIcon.src}
                                alt={isOpen ? 'minus' : 'plus'}
                                width={30}
                                height={30}
                            />
                        </button>
                        <h1>{title}</h1>
                    </div>
                    {!isOpen ? (
                        <div className={styles.details}>
                            <p>{details}</p>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                <div className={isOpen ? styles.card2 : styles.card} onClick={handleClick}>
                    <div className={styles.cardText}>
                        <button className={styles.btn}>
                            <Image
                                src={isOpen ? minusIcon.src : plusIcon.src}
                                alt={isOpen ? 'minus' : 'plus'}
                                width={30}
                                height={30}
                            />
                        </button>
                        <h1>{title}</h1>
                    </div>
                    {isOpen ? (
                        <div className={styles.details}>
                            <p>{details}</p>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            )}
        </>
    );
};

export default Card;
