import React from 'react';
import styles from './Vacancy.module.scss';
import Header from '../Header/Header';
import VacancyHeader from '../VacancyHeader/VacancyHeader';
import VacancyBody from '../VacancyBody/VacancyBody';
import Footer from '../Footer/Footer';
import VacancyForm from '../VacancyForm/VacancyForm';

const Vacancy: React.FC = () => {
    return (
        <>
            <Header />
            <VacancyHeader />
            <VacancyBody />
            <VacancyForm/>
            <Footer />
        </>
    );
};

export default Vacancy;
