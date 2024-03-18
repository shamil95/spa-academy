import React from 'react';
import styles from './BlogPosts.module.scss';
import Image from 'next/image';
import blog1 from '../../assets/images/blog1.png';

const blogPosts = [
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={360} height={220} />,
        date: '08-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
    },
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={360} height={220} />,
        date: '09-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.',
    },
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={100} height={70} />,
        date: '10-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'Believing neglected so so allowance existence...',
    },
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={100} height={70} />,
        date: '01-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'Believing neglected so so allowance existence...',
    },
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={100} height={70} />,
        date: '02-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'Believing neglected so so allowance existence...',
    },
    {
        image: <Image className={styles.image} src={blog1.src} alt={'blog'} width={100} height={70} />,
        date: '03-01-2024',
        category: 'Category',
        title: 'Believing neglected so so allowance existence departure.',
        body: 'Believing neglected so so allowance existence...',
    },
];

const BlogPosts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>Our Latest Blog Posts</div>
                <button className={styles.seeAllButton}>See All Blog Posts</button>
            </div>
            <div className={styles.headerExtra}>
                Stay up-to-date on our regular course activities and new job openings from our actively shared blog
                posts.
            </div>
            <div className={styles.blogPosts}>
                {blogPosts.slice(0, 2).map(blogPost => (
                    <div key={blogPost.date} className={styles.blogPost}>
                        {blogPost.image}
                        <div className={styles.dateAndCategory}>
                            <div> {blogPost.date}</div>
                            <div className={styles.category}> {blogPost.category}</div>
                        </div>
                        <div className={styles.title}>{blogPost.title}</div>
                        <div>{blogPost.body}</div>
                    </div>
                ))}
                <div>
                    {blogPosts.slice(2).map(blogPost => (
                        <div key={blogPost.date} className={styles.miniblogPost}>
                            {blogPost.image}
                            <div className={styles.info}>
                                <div className={styles.miniDate}>
                                    <div> {blogPost.date}</div>
                                    <div className={styles.category}> {blogPost.category}</div>
                                </div>
                                <div className={styles.body}>{blogPost.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPosts;
