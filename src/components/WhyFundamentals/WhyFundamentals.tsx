import React from 'react';
import styles from './WhyFundamentals.module.scss';

import MoneyPng from '../../assets/images/money.png';
import GlobalPng from '../../assets/images/global.png';
import MedalPng from '../../assets/images/medal-star.png';
import Image from 'next/image';

const boxes = [
    {
        id: 1,
        image: <Image src={MoneyPng} alt='money' width={40} height={40} />,
        content: 'Earn high income — already starting at $800 per month at the Junior level.',
    },
    {
        id: 2,
        image: <Image src={GlobalPng} alt='money' width={40} height={40} />,
        content: 'Work from anywhere in the world — as a freelancer or within a company.',
    },
    {
        id: 3,
        image: <Image src={MedalPng} alt='money' width={40} height={40} />,
        content: 'Learn a promising new profession to start a career in IT.',
    },
];

const WhyFundamentals = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Why should you study IT Fundamentals?</h1>
                <p className={styles.text}>
                    Due to global digitalization, it is worth choosing front-end programming training — today, there is
                    virtually no company left that is not online. And this trend will grow even faster in the future. We
                    can safely say that today there is no company that has its own website without a front-end
                    developer. Such a specialist is equally demanded in any country of the world.
                </p>
                <div className={styles.boxes}>
                    {boxes.map(box => (
                        <div key={box.id} className={styles.box}>
                            {box.image}
                            <p>{box.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyFundamentals;
