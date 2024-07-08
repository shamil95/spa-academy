'use client';
import React, { useState } from 'react';
import styles from './BlogBody.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const blogsTitle: string[] = [
    'All Articles',
    'Success stories',
    'Education at SPA',
    'Company news',
    'Career',
    'Impact',
];

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
    {
        id: 4,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Career',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 5,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Impact',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 6,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Success stories',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 7,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Success stories',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 8,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Success stories',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
    {
        id: 9,
        image: <Image src={blogImage} alt='blog image' />,
        date: '27 Jan 2021',
        info: 'Success stories',
        title: 'How one Webflow user grew his single person consultancy',
        description: ' See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
    },
];

const BlogBody: React.FC = () => {
    const initialColoredBoxes = blogsTitle.map((_, index) => (index === 0 ? false : true));
    const [coloredBoxes, setColoredBoxes] = useState<boolean[]>(initialColoredBoxes);

    const handleClick = (index: number) => {
        const updatedBoxes = [...coloredBoxes];
        updatedBoxes[index] = !updatedBoxes[index];
        setColoredBoxes(updatedBoxes);
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.boxes}>
                    {blogsTitle.map((blogT, index) => (
                        <div
                            key={index}
                            className={coloredBoxes[index] ? styles.box : styles.box2}
                            onClick={() => handleClick(index)}
                        >
                            {blogT}
                        </div>
                    ))}
                </div>

                <div className={styles.blogs}>
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

export default BlogBody;
