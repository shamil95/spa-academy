'use client';
import React, { useState } from 'react';
import styles from './Account.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageDropdown } from '../../Dropdowns';
import { bool } from 'prop-types';

interface Props {}

const Account: React.FC<Props> = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={styles.account}>
            {open && <LanguageDropdown />}
            <div className={styles.language} onClick={() => setOpen(!open)}>
                <Image src={ICONS.LanguageIcon.src} alt={'language'} width={16} height={16} className={styles.lang} />
                <span>Eng</span>
            </div>
            <Link href='/login' className={styles.studentPortal}>
                <Image src={ICONS.AccountIcon.src} alt={'account'} width={16} height={16} />
                <span>Student portal</span>
            </Link>
        </div>
    );
};

export default Account;
