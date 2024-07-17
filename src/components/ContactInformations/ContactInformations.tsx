import React from 'react';
import styles from './ContactInformations.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';

const { inboxFavorite, phoneNotebook, loactionGps } = ICONS;

type ContactDataTpe = {
    id: number;
    image: React.ReactNode;
    title: string;
    content1: string;
    content2: string;
};

const ContactData: ContactDataTpe[] = [
    {
        id: 1,
        image: <Image src={phoneNotebook} alt='Phone Notebook' />,
        title: 'Phone',
        content1: '+994 50 000 00 00',
        content2: '+994 50 000 00 00',
    },
    {
        id: 2,
        image: <Image src={inboxFavorite} alt='Inbox Favorite' />,
        title: 'Email',
        content1: 'support@spa.az',
        content2: 'hello@spa.az',
    },
    {
        id: 3,
        image: <Image src={loactionGps} alt='Location GPS' />,
        title: 'Address',
        content1: 'J.Jabbarli 44, Caspian Plaza,',
        content2: 'Baku, Azerbaijan',
    },
];

const ContactInformations: React.FC = () => {
    return (
        <div className={styles.container}>
            {ContactData.map(contact => (
                <div key={contact.id} className={styles.box}>
                    <div className={styles.imageContainer}>{contact.image}</div>
                    <div className={styles.text}>
                        <div className={styles.title}>{contact.title}</div>
                        <div className={styles.content}>
                            <div>{contact.content1}</div>
                            <div>{contact.content2}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactInformations;
