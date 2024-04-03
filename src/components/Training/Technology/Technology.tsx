'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Technology.module.scss';
import { ICONS } from '@/assets/icons';

const { arrowDown2Icon, arrrowUpIcon } = ICONS;

const Technology = ({ lesson }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={lesson.id} className={isOpen ? styles.lessonDetails : styles.lesson}>
            <div className={styles.lessonRectangle}>
                <div className={isOpen ? styles.lessonTitle : styles.lessonTitle2}>
                    <h3>{lesson.name}</h3>
                    <p>{lesson.lessonCount}</p>
                    {isOpen ? (
                        <div className={styles.lessonInfo}>
                            <ul>
                                {lesson.details.map(detail => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <button className={styles.btnDown} onClick={handleClick}>
                    <Image src={isOpen ? arrrowUpIcon.src : arrowDown2Icon.src} alt='up' width={33} height={33} />
                </button>
            </div>
        </div>
    );
};

export default Technology;
