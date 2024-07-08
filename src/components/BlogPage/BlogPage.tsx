"use client";
import React, { useRef } from 'react';
import styles from './BlogPage.module.scss';
import Header from '../Header/Header';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import BlogBody from '../BlogBody/BlogBody';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';

const BlogPage: React.FC = () => {
    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        if (positionsRef.current) {
            positionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const upButton = <button className={styles.upButton}>Blog</button>;
    const downButton = (
        <button className={styles.downButton} onClick={scrollToPositions}>
            Subscribe now
        </button>
    );
    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='Read our lates blogs'
                text='Stories to help bring the best ideas to life. Subscribe now to get our best tips, tricks and tutorials for visual content creation in your inbox.'
                downButton={downButton}
            />
            <BlogBody />
            <div ref={positionsRef}>
                <Subscribe
                    title='Subscribe to our blogs'
                    description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
                />
            </div>
            <Footer />
        </>
    );
};

export default BlogPage;
