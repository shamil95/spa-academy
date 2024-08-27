'use client';
import React, { useState } from 'react';
import styles from './Subscribe.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { vectorIcon } = ICONS;

type SubscribeProps = {
    title: string;
    description: string;
};

const Subscribe: React.FC<SubscribeProps> = ({ title, description }) => {
    const [buttonTitle, setButtonTitle] = useState<boolean>(false);
    const [buttonStyle, setButtonStyle] = useState<{ width: string; backgroundColor: string }>({
        width: '14.4rem',
        backgroundColor: '#FFC32C',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonTitle(true);

        setButtonStyle({ width: '20rem', backgroundColor: '#e3e2df' });

        setTimeout(() => {
            setButtonStyle({ width: '14.4rem', backgroundColor: '#FFC32C' });
            setButtonTitle(false);
        }, 1000);
    };

    return (
        <div className={styles.container} id='eventRegister'>
            <div className={styles.subscribeContainer}>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type='email' placeholder='Your Email Address' className={styles.input} />
                    <button
                        className={styles.btn}
                        style={{
                            width: buttonStyle.width,
                            backgroundColor: buttonStyle.backgroundColor,
                        }}
                    >
                        {buttonTitle ? (
                            <>
                                <Image src={vectorIcon} width={18} height={18}  alt='vectorIcons' />
                                SUBSCRIBED
                            </>
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;
