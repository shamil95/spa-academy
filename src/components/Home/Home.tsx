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
import Questions from '../Questions/Questions';
import OurBenefits from '../OurBenefits/OurBenefits';
import Footer from '../Footer/Footer';
import HeaderText from '../HeaderText/HeaderText';
import Information from '../Information/Infromation';


const courses:string[] = [
    'IT Fundamentals',
    'Programming',
    'Web Development',
    'Data Science',
    'Cyber Security',
    'Cloud Computing',
];

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <Information
                        intro='Yourtech career starts here'
                        title='Take the next step toward your personal and professional goals with us'
                        description='  We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.'
                    >
                        <div className={styles.buttons}>
                            <button className={styles.apply}>Apply now</button>
                            <button className={styles.learnMore}>Learn More</button>
                        </div>
                    </Information>

                    <Image className={styles.image} src={HomeImage.src} alt={'homeImage'} width={575} height={520} />
                </div>
            </div>

            <div className={styles.courses}>
                {courses.map(course => (
                    <div className={styles.course} key={course}>
                        <div className={styles.point}>.</div>
                        <div className={styles.courseText}>{course}</div>
                    </div>
                ))}
            </div>

            <Courses />
            <StudentFeedback />
            <Universities />
            <WhyWe />
            <Benefits />
            <BlogPosts />
            <Questions />
            <OurBenefits />
            <Footer />
        </>
    );
};

export default Home;
