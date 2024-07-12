'use client';
import React, { FormEvent, useState } from 'react';
import styles from './EventRegister.module.scss';
import Title from '../Title/Title';
import InformationModal from '../InformationModal/InformationModal';

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
];

const EventRegister: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <div className={styles.container} id='eventRegister'>
            {openModal && <InformationModal closeModal={setOpenModal} />}
            <div className={styles.main}>
                <Title
                    className={styles.titleComponent}
                    title='Event registration'
                    description='Please fill out the form and receive a link to the live broadcast to your email.'
                />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
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
                    <div className={styles.texareaContainer}>
                        <label htmlFor='question'>Question</label>
                        <textarea
                            id='question'
                            name='question'
                            placeholder='If you have some questions,please write here'
                            className={styles.textarea}
                            required
                        />
                    </div>
                    <button type='submit' className={styles.sendBtn} onClick={() => setOpenModal(true)}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventRegister;
