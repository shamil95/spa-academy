import React from 'react';
import styles from './Account.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';

const { LanguageIcon, AccountIcon } = ICONS;

const Account = () => {
    return (
        <div className={styles.account}>
            <div className={styles.language}>
                <Image src={LanguageIcon.src} alt={'language'} width={16} height={16} className={styles.lang} />
                <span>Eng</span>
            </div>
            <div className={styles.studentPortal}>
                <Image src={AccountIcon.src} alt={'account'} width={16} height={16} />
                <span>Student portal</span>
            </div>
        </div>
    );
};

export default Account;
