'use client';
import React, { useState } from 'react';
import styles from './CourseForm.module.scss';
import InformationModal from '../InformationModal/InformationModal';

const CourseForm: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
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

    return (
        <div className={styles.container}>
            {openModal && <InformationModal closeModal={setOpenModal} />}
            <div className={styles.header}>I Want To Learn This Course</div>

            <form className={styles.form}>
                <div className={styles.learn}>
                    <div>I want to learn</div>
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
    );
};

export default CourseForm;
