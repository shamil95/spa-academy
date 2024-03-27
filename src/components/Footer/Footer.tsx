import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Logo from '../../assets/images/Logo.svg';
import { ICONS } from '@/assets/icons';

const { arrowIcon, fbIcon, linkedinIcon, instaIcon, xIcon } = ICONS;

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerHeader}>
                <div className={styles.logo}>
                    <Image src={Logo.src} alt='Logo image' width={33} height={36} />
                    <h3>science park academy</h3>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn1}>Apply now</button>
                    <button className={styles.btn2}>
                        Get to know our courses
                        <Image src={arrowIcon.src} alt='Arrow' width={16} height={16} />
                    </button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h2>Course Catalouge</h2>
                        <ul>
                            <li>IT Fundamentals</li>
                            <li>Programming</li>
                            <li>We Development</li>
                            <li>Data Science</li>
                            <li>Syber Security</li>
                            <li>Cloud Computing</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h2>Academy</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Core Team Members</li>
                            <li>Instructors</li>
                            <li>Contanct Us</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h2>Consulting services</h2>
                        <ul>
                            <li>IT strategy</li>
                            <li>Data analytics</li>
                            <li>It project management</li>
                            <li>Custom solutions</li>
                            <li>Case studies</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h2>Resources</h2>
                        <ul>
                            <li>Blog</li>
                            <li>Events</li>
                            <li>Webinars</li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <a>support@spaacademy.az</a>
                            </li>
                            <li>
                                <a>(+994) 12 502 00 51</a>
                            </li>
                            <li>C.Cabbarli Kuc.42 Caspian Business Center,1-ci Mertebe, Az1065,Baku Azerbaijan</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footerF}>
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Notice</li>
                </ul>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <Image src={fbIcon.src} alt='facebook' width={20} height={20} />
                    </div>
                    <div className={styles.image}>
                        <Image src={xIcon.src} alt='x' width={20} height={20} />
                    </div>
                    <div className={styles.image}>
                        <Image src={instaIcon.src} alt='instagram' width={20} height={20} />
                    </div>
                    <div className={styles.image}>
                        <Image src={linkedinIcon.src} alt='linkedin' width={20} height={20} />
                    </div>
                </div>
                <p>Copyright © 2024. Science Park Academy</p>
            </div>
        </div>
    );
};

export default Footer;
