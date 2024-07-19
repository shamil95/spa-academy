'use client';
import React, { useState } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import FooterColumn from './Column/FooterColumn';
import ContactModal from '../ContactModal/ContactModal';
import { FooterColumnProps, FooterLinksProps } from './FooterTypes';
import Link from 'next/link';

const { LogoIcon, arrowIcon, fbIcon, linkedinIcon, instaIcon, xIcon, callIcon } = ICONS;

const footerColumns: FooterColumnProps[] = [
    {
        title: 'Popular Courses',
        items: [
            'Data Analysis',
            'Web Development',
            'Full Stack Development',
            'Back-End development',
            'Front-End development',
            'Algorithm Architects',
        ],
    },
    {
        title: 'Academy',
        items: ['About Us', 'Careers', 'Instructors', 'Contact Us'],
        routing: ['about', 'careers', 'instructors', 'contact'],
    },
    {
        title: 'Consulting Services',
        items: ['IT Strategy', 'Data Analytics', 'IT Project Management', 'Custom Solutions', 'Case Studies'],
        routing: ['ITstrategy', 'ITstrategy', 'ITstrategy', 'ITstrategy', 'ITstrategy'],
    },
    {
        title: 'Resources',
        items: ['Blog', 'Events', 'Webinars'],
        routing: ['blog', 'events', 'webinars'],
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

const footerLinks: FooterLinksProps[] = [
    {
        id: 1,
        name: 'Terms of Service',
        href: 'termofservice',
    },
    {
        id: 2,
        name: 'Privacy policy',
         href: 'policy',
    },
    {
        id: 3,
        name: 'Cookie Notice',
         href: 'cookie',
    },
];

const footerIcons = [fbIcon, xIcon, instaIcon, linkedinIcon];

const Footer: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className={styles.footer}>
            {openModal && <ContactModal closeModal={setOpenModal} />}
            <div className={styles.footerHeader}>
                <div className={styles.main}>
                    <Image src={LogoIcon.src} alt={'logo'} width={162} height={40} />
                    <div className={styles.buttons}>
                        <button className={styles.btn1}>
                            <Image src={callIcon.src} alt='Incoming call' width={16} height={16} />
                            Call Our Academy
                        </button>
                        <button className={styles.btn2} onClick={() => setOpenModal(true)}>
                            Get to know our courses
                            <Image src={arrowIcon.src} alt='Arrow' width={16} height={16} />
                        </button>
                    </div>
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
                <div className={styles.main}>
                    <ul className={styles.linksUl}>
                        {footerLinks.map(link => (
                            <li key={link.id}>
                                <Link href={`/${link.href}`}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.images}>
                        {footerIcons.map((icon, index) => (
                            <div key={index} className={styles.socialIcon}>
                                <div className={styles.effects}></div>
                                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                            </div>
                        ))}
                    </div>
                    <p>Copyright © 2024. Science Park Academy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
