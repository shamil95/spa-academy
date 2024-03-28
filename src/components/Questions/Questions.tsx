import React from 'react';
import styles from './Questions.module.scss';
import HaveAny from './HaveAny/HaveAny';
import Cards from './Cards/Cards';

const Questions = () => {
    return (
        <div className={styles.container}>
            <HaveAny />
            <Cards />
        </div>
    );
};
export default Questions;
