import React from 'react';
import styles from './HaveAny.module.scss';

export default function HaveAny() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Have any questions abour our course? We got you</h2>
            </div>
            <div className={styles.text}>
                <p>
                    Pizza ipsum dolor meat lovers buffalo. Tomato wing wing Aussie Bianca. String large pizza sauce
                    Hawaiian. Onions bell Aussie ricotta lot banana tomato personal mouth crust. Red roll ham fresh
                    lovers pan lot steak melted mushrooms.
                </p>
            </div>

            <div>
                <button className={styles.button}>Get in touch</button>
            </div>
        </div>
    );
}
