import React from 'react';
import styles from './Questions.module.scss';
import Cards from './Cards/Cards';
import HeaderText from '../HeaderText/HeaderText';

const Questions = () => {
    return (
        <div className={styles.container}>
            <HeaderText
                title='Have any questions about our course? We got you'
                text='Pizza ipsum dolor meat lovers buffalo. Tomato wing wing Aussie Bianca. String large pizza sauce Hawaiian. Onions bell Aussie ricotta lot banana tomato personal mouth crust. Red roll ham fresh lovers pan lot steak melted mushrooms.'
            >
                <button className={styles.getInTouch}>Get in touch</button>
            </HeaderText>
            <Cards />
        </div>
    );
};
export default Questions;
