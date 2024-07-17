import React from 'react';
import styles from './Partners.module.scss';
import harvard from '../../assets/images/universities/harvard.png';
import stanford from '../../assets/images/universities/stanford.png';
import google from '../../assets/images/universities/google.png';
import tokopedia from '../../assets/images/universities/tokopedia.png';
import cambridge from '../../assets/images/universities/cambridge.png';
import Image from 'next/image';

const universities = [cambridge, harvard, stanford, google, tokopedia];

const Partners: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>Our Partners</div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nesciunt unde at expedita, voluptates
                    harum odio eius sint quidem hic esse cum iusto placeat laudantium tempore provident eaque fugit
                    neque!
                </div>
            </div>
            <div className={styles.partners}>
                {universities.map((university, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={university.src}
                            alt={'university'}
                            width={university.width}
                            height={university.height}
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
