import React from 'react';
import styles from './OurBenefits.module.scss';
import Content from './Content/Content';
import Image from 'next/image';
import Item from '../../assets/images/students/Item.png';
import Item1 from '../../assets/images/students/Item1.png';
import Item2 from '../../assets/images/students/Item2.png';
import Item3 from '../../assets/images/students/Item3.png';
import Item4 from '../../assets/images/students/Item4.png';
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

const images = [Item, Item1, Item2, Item3, Item4];

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
                            {images.map((image, index) => (
                                <Image
                                    key={index}
                                    className={styles.studentImages}
                                    style={{ left: `${index * 15}px` }}
                                    src={image.src}
                                    alt='student'
                                    width={30}
                                    height={30}
                                />
                            ))}
                        </div>
                        <p>Over 200 students join us monthly</p>
                    </div>
                </div>
                <Image src={Poster.src} className={styles.image} alt='poster' width={790} height={400} />
                <div className={styles.rectangle}></div>
            </div>
        </div>
    );
};

export default OurBenefits;
