import React from 'react';
import styles from './Questions.module.scss';
import HaveAny from './HaveAny/HaveAny';
import HowThisWork from './HowThisWork/HowThisWork';

export default function Questions() {
    return (
        <div className={styles.container}>
            <HaveAny />
            <HowThisWork/>
        </div>
    );
}
