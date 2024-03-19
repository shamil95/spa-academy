import React from 'react';
import styles from './HaveAny.module.scss';

export default function HaveAny() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
               Have any questions abour our course? We got you
            </div>
            <div className={styles.text}>
                <p>
                    Pizza ipsum dolor meat lovers buffalo. Tomato wing wing Aussie Bianca. String large pizza sauce
                    Hawaiian. Onions bell Aussie ricotta lot banana tomato personal mouth crust. Red roll ham fresh
                    lovers pan lot steak melted mushrooms.
                </p>
            </div>
            <button className={styles.getInTouch}>Get in touch</button>
        </div>
    );
}
