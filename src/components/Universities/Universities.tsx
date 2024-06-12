import React from 'react';
import styles from './Universities.module.scss';
import bandudu from '../../assets/images/universities/bandudu.png';
import harvard from '../../assets/images/universities/harvard.png';
import stanford from '../../assets/images/universities/stanford.png';
import google from '../../assets/images/universities/google.png';
import tokopedia from '../../assets/images/universities/tokopedia.png';
import cambridge from '../../assets/images/universities/cambridge.png';
import oxford from '../../assets/images/universities/oxford.png';
import microsoft from '../../assets/images/universities/microsoft.png';
import amazon from '../../assets/images/universities/amazon.png';
import samsung from '../../assets/images/universities/samsung.png';
import Image from 'next/image';

const universities = [bandudu, harvard, stanford, google, tokopedia, cambridge, oxford, microsoft, amazon, samsung];

const Universities: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Collaborate with <span className={styles.rating}>100+</span> leading universities and companies
            </div>
            <div className={styles.headerExtra}>
                WOC has contributed to students so that they can work in their dream company, we will continue to stick
                to our commitment to create an advanced generation,
            </div>
            <div className={styles.universities}>
                {universities.map((university, index) => (
                    <div key={index} className={styles.imgContainer}>
                        <Image
                            className={styles.image}
                            src={university.src}
                            alt={'university'}
                            width={university.width}
                            height={university.height}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Universities;
