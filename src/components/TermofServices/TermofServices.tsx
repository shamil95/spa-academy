import React from 'react';
import styles from './TermofServices.module.scss';
import Header from '../Header/Header';
import TermsHeader from '../TermsHeader/TermsHeader';
import TermsBody from '../TermsBody/TermsBody';
import Footer from '../Footer/Footer';

const TermofServices: React.FC = () => {
    return (
        <>
            <Header />
            <TermsHeader title='Terms of Sevices'  />
            <TermsBody/>
            <Footer/>
        </>
    );
};

export default TermofServices;
