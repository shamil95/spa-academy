import React from 'react';
import styles from './OurBenefits.module.scss';
import Content from './Content/Content';
import Image from 'next/image';
import Item from '../../assets/images/students/Item.png';
import Poster from '../../assets/images/Poster.png';

const contents = [
    {
        id: 1,
        title: 'Learn creative skills to achieve your personal and professional goals.',
    },
    {
        id: 2,
        title: 'Connect with a global community of curious creatives.',
    },
    {
        id: 3,
        title: 'Go from junior to middle in a matter of hours.',
    },
];

const OurBenefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.study}>
                    <h1>
                        Why should you study at <br /> our academy?
                    </h1>

                    {contents.map(content => (
                        <Content key={content.id} title={content.title} />
                    ))}
                    <div className={styles.line}>
                        <button className={styles.button}>APPLY NOW</button>
                        <div className={styles.imgContainer}>
                            <Image className={styles.ring1} src={Item.src} alt='student' width={30} height={30} />
                            <Image className={styles.ring2} src={Item.src} alt='student' width={30} height={30} />
                            <Image src={Item.src} alt='student' width={30} height={30} />
                            <Image src={Item.src} alt='student' width={30} height={30} />
                            <Image src={Item.src} alt='student' width={30} height={30} />
                            <p>Over 200 students join us monthly</p>{' '}
                        </div>{' '}
                    </div>
                </div>

                <Image src={Poster.src} className={styles.image} alt='poster' width={790} height={400} />
                <div className={styles.rectangle}></div>
            </div>
        </div>
    );
};

export default OurBenefits;
