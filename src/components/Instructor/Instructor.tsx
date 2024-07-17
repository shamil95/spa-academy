import React from 'react';
import styles from './Instructor.module.scss';
import Header from '../Header/Header';
import InstructorHeader from '../InstructorHeader/InstructorHeader';
import InstructorAbout from '../InstructorAbout/InstructorAbout';
import InstructorCourses from '../InstructorCourses/InstructorCourses';
import Footer from '../Footer/Footer';
const Instructor = () => {
    return (
        <>
            <Header />
            <InstructorHeader/>
            <InstructorAbout/>
            <InstructorCourses/>
            <Footer/>
        </>
    );
};

export default Instructor;
