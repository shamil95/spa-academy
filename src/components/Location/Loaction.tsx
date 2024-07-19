'use client';
import React, { FormEvent, useState } from 'react';
import styles from './Loaction.module.scss';
import Image from 'next/image';
import mapImage from '../../assets/images/mapImg.png';
import InformationModal from '../InformationModal/InformationModal';
import MapComponent from '../MapComponent/MapComponent';

type FieldsType = {
    id: string;
    label: string;
    placeholder: string;
    type: string;
};

const formFields: FieldsType[] = [
    {
        id: 'fullName',
        label: 'Full Name',
        placeholder: 'Enter full name',
        type: 'text',
    },
    {
        id: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        type: 'email',
    },
    {
        id: 'number',
        label: 'Phone number',
        placeholder: 'Enter phone number',
        type: 'tel',
    },
    {
        id: 'message',
        label: 'Message',
        placeholder: 'Enter message',
        type: 'textarea',
    },
];

const Loaction: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            {openModal && <InformationModal closeModal={setOpenModal} />}
            <div className={styles.formContainer}>
                <div className={styles.text}>
                    <div className={styles.title}>Get in Touch</div>
                    <div className={styles.description}>
                        Office ipsum you must be muted. Gave invested discussions company dangerous value-added
                        meaningful company. Hammer looking functional
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {formFields.map((field, index) => (
                        <div key={index} className={styles.info}>
                            <label htmlFor={field.id}>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    className={styles.textarea}
                                    required
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    className={styles.input}
                                    required
                                />
                            )}
                        </div>
                    ))}
                    <button type='submit' className={styles.sendBtn} onClick={() => setOpenModal(true)}>
                        Apply For This Job
                    </button>
                </form>
            </div>
            <div className={styles.mapContainer}>
                {/* <Image src={mapImage.src} alt='Map' width={549} height={724} /> */}
                <MapComponent/>
            </div>
        </div>
    );
};

export default Loaction;
