import React from 'react';
import styles from './Header.module.scss';
import Navigation from '@/components/Header/Navigation/Navigation';
import Account from '@/components/Header/Account/Account';

const Header = () => {
    return (
        <header className={styles.container}>
            <Navigation />
            <Account />
        </header>
    );
};

export default Header;
