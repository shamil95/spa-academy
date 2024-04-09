'use client';
import React, { useState } from 'react';
import clickImage from '../../../assets/images/click.png';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import styles from './Promise.module.scss';

const { downArrowIcon, upArrowIcon } = ICONS;

const Promise = ({ question, isFirst }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isFirst ? (
                <div key={question.id} className={!isOpen ? styles.card2 : styles.card} onClick={handleClick}>
                    <div className={styles.cardText}>
                        <h3>{question.title}</h3>
                        <button className={styles.btn}>
                            <Image
                                src={!isOpen ? downArrowIcon.src : upArrowIcon.src}
                                alt='downIcon'
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                    {!isOpen ? (
                        <div className={styles.details}>
                            {question.details.map((detail, index) => (
                                <div key={index} className={styles.detail}>
                                    <Image src={clickImage.src} width={25} height={25} alt='Check' />
                                    <p>{detail}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                <div key={question.id} className={isOpen ? styles.card2 : styles.card} onClick={handleClick}>
                    <div className={styles.cardText}>
                        <h3>{question.title}</h3>
                        <button className={styles.btn}>
                            <Image
                                src={isOpen ? downArrowIcon.src : upArrowIcon.src}
                                alt='downIcon'
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>
                    {isOpen ? (
                        <div className={styles.details}>
                            {question.details.map((detail, index) => (
                                <div key={index} className={styles.detail}>
                                    <Image src={clickImage.src} width={25} height={25} alt='Check' />
                                    <p>{detail}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            )}
        </>
    );
};

export default Promise;
