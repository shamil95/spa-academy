import React from 'react';
import styles from './WebinarHeader.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ICONS } from '@/assets/icons';

const { arrowRight, blackFbIcon, blackXIcon, blackLnIcon, designLayer, eyeVisible, userCircle } = ICONS;
const footerIcons = [blackFbIcon, blackXIcon, blackLnIcon];

type BlogsDataType = {
    id: number;
    image: React.ReactNode;
    text: string;
};

;

const blogsData: BlogsDataType[] = [
    {
        id: 1,
        image: <Image src={designLayer} alt='Black' width={18} height={18} />,
        text: '7-8 minutes',
    },
    {
        id: 2,
        image: <Image src={eyeVisible} alt='Black' width={18} height={18} />,
        text: 'Success stories',
    },
    {
        id: 3,
        image: <Image src={userCircle} alt='Black' width={18} height={18} />,
        text: 'Andrew Jonson',
    },
];

const WebinarHeader: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <Link href='/'> Home</Link>
                        <Image src={arrowRight} alt='Arrow right' />
                    </div>
                    <div className={styles.link}>
                        <Link href='/blog'>Blog </Link>
                        <Image src={arrowRight} alt='Arrow right' />
                    </div>
                    <div className={styles.link}>
                        <Link href='/'>How one Webflow user grew... </Link>
                    </div>
                </div>
                <div className={styles.title}>How one Webflow user grew his single person consultancy</div>
                <div className={styles.boxContainer}>
                    <div className={styles.boxes}>
                        {blogsData.map((blog, index) => (
                            <div key={blog.id} className={index === 0 ? styles.box2 : styles.box}>
                                {blog.image}
                                {blog.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles.iconsContainer}>
                        <div className={styles.text}>Share on:</div>
                        <div className={styles.smallIcons}>
                            {footerIcons.map((icon, index) => (
                                <div key={index} className={styles.smallIcon}>
                                    <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarHeader;
