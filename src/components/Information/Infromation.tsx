import React from 'react';
import styles from './Infromation.module.scss';

const Infromation = ({ intro, title, description, children }) => {
    return (
        <div className={styles.info}>
            <div className={styles.intro}>{intro}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                <p> {description}</p>
            </div>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default Infromation;

{
    /* <div className={styles.info}>
<div className={styles.intro}>Yourtech career starts here</div>
<div className={styles.title}>Take the next step toward your personal and professional goals with us.</div>
<div className={styles.description}>
    We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
</div>
<button className={styles.apply}>Apply now</button>
<button className={styles.learnMore}>Learn More</button>
</div> */
}
