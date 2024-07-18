import React, { useState } from 'react';
import styles from './VacancyForm.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import InformationModal from '../InformationModal/InformationModal';

const { cloudArrow, folderCopy, cancelX } = ICONS;

type FormDataType = {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    name: string;
};

const formData: FormDataType[] = [
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        type: 'email',
    },
    {
        id: 'number',
        name: 'number',
        label: 'Phone number',
        placeholder: 'Enter phone number',
        type: 'tel',
    },
    {
        id: 'location',
        name: 'loaction',
        label: 'Current location',
        placeholder: 'Enter current location',
        type: 'text',
    },
    {
        id: 'company',
        name: 'company',
        label: 'Current company',
        placeholder: 'Enter current company',
        type: 'text',
    },
];

const VacancyForm: React.FC = () => {
    const [fileData, setFileData] = useState<{ name: string; size: number; type: string }[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
    };
    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const files = e.target.files;

        if (files) {
            const fileList = Array.from(files).map(file => ({
                name: file.name,
                size: file.size,
                type: file.type,
            }));

            setFileData(fileList);
            console.log(fileList);
        }
    };
    return (
        <div className={styles.container} id='applyForm'>
            {openModal && <InformationModal closeModal={setOpenModal} />}
            <div className={styles.main}>
                <div className={styles.title}>Please fill in the form to apply to the vacancy</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.largeInput}>
                        <label htmlFor='name' className={styles.label}>
                            Full Name
                        </label>
                        <input type='text' id='name' name='name' required placeholder='Enter full name' />
                    </div>
                    <div className={styles.inputs}>
                        {formData.map(item => (
                            <div key={item.id} className={styles.smallInput}>
                                <label htmlFor={item.id} className={styles.label}>
                                    {item.label}
                                </label>
                                <input id={item.id} name={item.name} type={item.type} placeholder={item.placeholder} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.largeInput}>
                        <label htmlFor='cv' className={styles.label}>
                            CV Link
                        </label>
                        <input type='text' id='cv' name='cv' required placeholder='Enter cv link url' />
                    </div>

                    <div className={styles.fileInput}>
                        <input
                            id='file-upload'
                            type='file'
                            className={styles.fileUploadInput}
                            onChange={handleFileChange}
                        />
                        <div className={styles.center}>
                            <Image src={cloudArrow} alt='Cloud Arrow' width={44} height={38} />
                            <div className={styles.placeholder}>
                                <div className={styles.header}>Select a file or drag and drop here</div>
                                <div className={styles.header2}>JPG, PNG or PDF, file size no more than 10MB</div>
                            </div>
                        </div>
                        <button className={styles.btn}>Select File</button>
                    </div>

                    {fileData.length > 0 && (
                        <div className={styles.folder} >
                            <div className={styles.folderName}>
                                <Image src={folderCopy} alt='Folder copy icon' />
                                <div>{fileData[0].name}</div>
                            </div>
                            <div className={styles.folderSize}>
                                {(() => {
                                    const mimeType = fileData[0].type;
                                    const pdfWord = mimeType.substring(mimeType.indexOf('/') + 1).toUpperCase();
                                    return (
                                        <>
                                            <div>{pdfWord} file</div>
                                            <div>{(fileData[0].size / (1024 * 1024)).toFixed(2)} MB</div>
                                        </>
                                    );
                                })()}
                                <button className={styles.cancelButton} onClick={() => setFileData([])}>
                                    <Image src={cancelX} alt='cancel' />
                                </button>
                            </div>
                        </div>
                    )}

                    <div className={styles.textareaContainer}>
                        <label className={styles.label} htmlFor='message'>
                            Motivation text
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Enter motivation text'
                            className={styles.textarea}
                        />
                    </div>
                    <button className={styles.apply} onClick={() => setOpenModal(true)}>
                        Apply For This Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VacancyForm;
