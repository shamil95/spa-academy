import React from 'react';
import Header from '@/components/Header/Header';
import styles from './Home.module.scss';
import Image from 'next/image';
import HomeImage from '../../assets/images/homeImage.png';
import Courses from '@/components/Courses/Courses';
import StudentFeedback from '@/components/StudentFeedback/StudentFeedback';
import Universities from '@/components/Universities/Universities';
import WhyWe from '@/components/WhyWe/WhyWe';
import Benefits from '@/components/Benefits/Benefits';
import BlogPosts from '@/components/BlogPosts/BlogPosts';

const courses = [
    'IT Fundamentals',
    'Programming',
    'Web Development',
    'Data Science',
    'Cyber Security',
    'Cloud Computing',
];

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.info}>
                        <div className={styles.intro}>Yourtech career starts here</div>
                        <div className={styles.title}>
                            Take the next step toward your personal and professional goals with us.
                        </div>
                        <div className={styles.description}>
                            We’re a nonprofit with the mission to provide a free, world-class education for anyone,
                            anywhere.
                        </div>
                        <button className={styles.apply}>Apply now</button>
                        <button className={styles.learnMore}>Learn More</button>
                    </div>
                    <Image src={HomeImage.src} alt={'homeImage'} width={575} height={520} />
                </div>
            </div>
            <div className={styles.courses}>
                {courses.map(course => (
                    <>
                        <div key={course}>{course}</div>
                        <div className={styles.point} />
                    </>
                ))}
            </div>
            <Courses />
            <StudentFeedback />
            <Universities />
            <WhyWe />
            <Benefits />
            <BlogPosts />
        </>
    );
};

export default Home;
