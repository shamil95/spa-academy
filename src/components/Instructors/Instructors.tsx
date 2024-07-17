import React from 'react';
import styles from './Instructors.module.scss';
import Header from '../Header/Header';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import InstructorsBody from '../InstructorsBody/InstructorsBody';
import Footer from '../Footer/Footer';

const upButton = <button className={styles.topButton}>Instructors</button>;

const Instructors = () => {
    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Meet our Instructors'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam.Eum ad aspernatur in.'
            />
           <InstructorsBody/>
           <Footer/>
        </>
    );
};

export default Instructors;
