import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Logo from '../../assets/images/Logo.svg';
import { ICONS } from '@/assets/icons';
import FooterColumn from './Column/FooterColumn';

const { LogoIcon, arrowIcon, fbIcon, linkedinIcon, instaIcon, xIcon } = ICONS;

const footerColumns = [
    {
        title: 'Course Catalogue',
        items: [
            'IT Fundamentals',
            'Programming',
            'Web Development',
            'Data Science',
            'Cyber Security',
            'Cloud Computing',
        ],
    },
    {
        title: 'Academy',
        items: ['About Us', 'Careers', 'Core Team Members', 'Instructors', 'Contact Us'],
    },
    {
        title: 'Consulting Services',
        items: ['IT Strategy', 'Data Analytics', 'IT Project Management', 'Custom Solutions', 'Case Studies'],
    },
    {
        title: 'Resources',
        items: ['Blog', 'Events', 'Webinars'],
    },
    {
        title: 'Contact',
        items: [
            { label: 'support@spaacademy.az', href: 'mailto:support@spaacademy.az' },
            { label: '(+994) 12 502 00 51', href: 'tel:+994125020051' },
            'C.Cabbarli Kuc.42 Caspian Business Center,1-ci Mertebe, Az1065,Baku Azerbaijan',
        ],
    },
];

const footerLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Notice'];
const footerIcons = [fbIcon, xIcon, instaIcon, linkedinIcon];

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.footerHeader}>
            <Image src={LogoIcon.src} alt={'logo'} width={162} height={40} />
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
                {footerColumns.map((column, index) => (
                    <FooterColumn key={index} {...column} />
                ))}
            </div>
        </div>
        <div className={styles.footerF}>
            <ul>
                {footerLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
            <div className={styles.images}>
                {footerIcons.map((icon, index) => (
                    <div key={index} className={styles.image}>
                        <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                    </div>
                ))}
            </div>
            <p>Copyright © 2024. Science Park Academy</p>
        </div>
    </div>
);

export default Footer;
