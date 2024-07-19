import React from 'react';
import styles from './ContactPage.module.scss';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Header from '../Header/Header';
import ContactInformations from '../ContactInformations/ContactInformations';
import Loaction from '../Location/Loaction';
import Footer from '../Footer/Footer';

const { fbIcon, linkedinIcon, instaIcon, xIcon, callIcon } = ICONS;
const footerIcons = [fbIcon, xIcon, instaIcon, linkedinIcon];

const ContactPage: React.FC = () => {
    const upButton = <button className={styles.topButton}>Contact us</button>;
    const downButton = (
        <div className={styles.images}>
            {footerIcons.map((icon, index) => (
                <div key={index} className={styles.image}>
                     <div className={styles.effects}></div>
                    <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                </div>
            ))}
        </div>
    );
    return (
        <>
            <Header />
            <ComponentHeader
                upButton={upButton}
                title='A UX Case Study on Creating Studious Environment for Students'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad aspernatur in. Non fugiat molestiae laboriosam, nihil excepturi perferendis molestias dolorem.'
                downButton={downButton}
            />
            <ContactInformations/>
            <Loaction/>
            <Footer/>
        </>
    );
};

export default ContactPage;
