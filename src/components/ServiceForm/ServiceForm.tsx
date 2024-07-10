'use client';
import React, { FormEvent, useState } from 'react';
import styles from './ServiceForm.module.scss';
import InformationModal from '../InformationModal/InformationModal';

const ServiceForm: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    type FieldsType = {
        id: string;
        label: string;
        placeholder: string;
        type: string;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
    ];

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {openModal && <InformationModal closeModal={setOpenModal} />}
                <div className={styles.header}>Ready to book consulting service?</div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.learn}>
                        <div>I want to talk to your experts in:</div>
                        <select className={styles.select} required>
                            <option value='' disabled selected>
                                Select a course
                            </option>
                            <option value='course1'>Course 1</option>
                            <option value='course2'>Course 2</option>
                            <option value='course3'>Course 3</option>
                        </select>
                    </div>
                    <div className={styles.forms}>
                        {formFields.map((field, index) => (
                            <div key={index} className={styles.info}>
                                <label htmlFor={field.id}>{field.label}</label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    className={styles.input}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                    <button type='submit' className={styles.sendBtn} onClick={() => setOpenModal(true)}>
                        Send request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;
