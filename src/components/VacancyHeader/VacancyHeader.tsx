import React from 'react';
import styles from './VacancyHeader.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { arrowRight } = ICONS;

type BlogsDataType = {
    id: number;
    text: string;
};

const blogsData: BlogsDataType[] = [
    {
        id: 1,
        text: 'Full-time',
    },
    {
        id: 2,
        text: 'Full-time, SPA Head office',
    },
    {
        id: 3,
        text: 'Deadline: August 30, 2024',
    },
];

const VacancyHeader = () => {
    const scrollToRegister = () => {
        const element = document.getElementById('applyForm');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <Link href='/'>Home</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link}>
                            <Link href='/careers'>Careers</Link>
                            <Image src={arrowRight} alt='Arrow right' />
                        </div>
                        <div className={styles.link2}>
                            <Link href='/'>QA manual teacher</Link>
                        </div>
                    </div>
                    <div className={styles.title}>QA manual teacher</div>
                    <div className={styles.boxes}>
                        {blogsData.map((blog, index) => (
                            <div key={blog.id} className={index === 0 ? styles.box2 : styles.box}>
                                {blog.text}
                            </div>
                        ))}
                    </div>
                </div>

                <button className={styles.apply} onClick={scrollToRegister}>
                    Apply For This Job
                </button>
            </div>
        </div>
    );
};

export default VacancyHeader;
