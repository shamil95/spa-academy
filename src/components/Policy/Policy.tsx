import React from 'react';
import styles from './Policy.module.scss';
import TermsHeader from '../TermsHeader/TermsHeader';
import Header from '../Header/Header';
import TermsBody from '../TermsBody/TermsBody';
import Footer from '../Footer/Footer';

const Policy: React.FC = () => {
    const textDiv = <div>Last updated: February 21, 2022</div>;
    return (
        <>
            <Header />
            <TermsHeader title='Privacy Policy' className={styles.container} text={textDiv} />
            <TermsBody />
            <Footer />
        </>
    );
};

export default Policy;
