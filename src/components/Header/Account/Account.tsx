import React from 'react';
import styles from './Account.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';

interface Props {}

const Account: React.FC<Props> = () => {
    return (
        <div className={styles.account}>
            <div className={styles.language}>
                <Image src={ICONS.LanguageIcon.src} alt={'language'} width={16} height={16} className={styles.lang} />
                <span>Eng</span>
            </div>
            <div className={styles.studentPortal}>
                <Image src={ICONS.AccountIcon.src} alt={'account'} width={16} height={16} />
                <span>Student portal</span>
            </div>
        </div>
    );
};

export default Account;
