import React from 'react';
import styles from './RelatedArticles.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { blogImage } = ICONS;

type BlogDataType = {
    id: number;
    image: React.ReactNode;
    date: string;
    info: string;
    title: string;
    description: string;
};

const blogsData: BlogDataType[] = [
    {
        id: 1,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Success stories',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 2,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Education at SPA',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 3,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Company news',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
];

const RelatedArticles: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.bigTitle}>Related Articles</div>
                <div className={styles.boxes}>
                    {blogsData.map(blog => (
                        <div key={blog.id} className={styles.blog}>
                            <div className={styles.imageContainer}>{blog.image}</div>
                            <div className={styles.content}></div>
                            <div className={styles.text}>
                                <div className={styles.smallInfo}>
                                    <div className={styles.date}>{blog.date} &#x2022;</div>
                                    <div className={styles.info}>{blog.info}</div>
                                </div>
                                <div className={styles.title}>{blog.title}</div>
                                <div className={styles.description}>{blog.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedArticles;
