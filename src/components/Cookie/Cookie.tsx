import React from 'react';
import styles from './Cookie.module.scss';
import Header from '../Header/Header';
import TermsHeader from '../TermsHeader/TermsHeader';
import Footer from '../Footer/Footer';
import CookieBody from '../CookieBody/CookieBody';

const Cookie = () => {
    return (
        <div>
            <Header />
            <TermsHeader title='Cookie Notice' />
            <CookieBody />
            <Footer />
        </div>
    );
};

export default Cookie;
