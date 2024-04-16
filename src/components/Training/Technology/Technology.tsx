'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Technology.module.scss';
import { ICONS } from '@/assets/icons';

const { arrowDown2Icon, arrrowUpIcon } = ICONS;

const Technology = ({ lesson, isFirst }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log(isFirst);
        console.log(isOpen);
    };

    return (
        <>
            {isFirst ? (
                <div key={lesson.id} className={!isOpen ? styles.lessonDetails : styles.lesson} onClick={handleClick}>
                    <div className={styles.lessonRectangle}>
                        <div className={!isOpen ? styles.lessonTitle : styles.lessonTitle2}>
                            <h3>{lesson.name}</h3>
                            <p>{lesson.lessonCount}</p>
                            {!isOpen ? (
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

                        <Image src={!isOpen ? arrrowUpIcon.src : arrowDown2Icon.src} alt='up' width={43} height={43} />
                    </div>
                </div>
            ) : (
                <div key={lesson.id} className={isOpen ? styles.lessonDetails : styles.lesson} onClick={handleClick}>
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

                        <Image src={isOpen ? arrrowUpIcon.src : arrowDown2Icon.src} alt='up' width={43} height={43} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Technology;
