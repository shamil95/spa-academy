import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './InformationModal.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';

const { vectorIcon, closeIcon } = ICONS;
interface InformationModalProps {
    closeModal: (open: boolean) => void;
}

const InformationModal: React.FC<InformationModalProps> = ({ closeModal }) => {
    const modalContent = (
        <div className={styles.background}>
            <div className={styles.container}>
                <button className={styles.closeBtn} onClick={() => closeModal(false)}>
                    <Image src={closeIcon} alt='Close button' />
                </button>
                <div className={styles.inside}>
                    <div className={styles.rectangle}>
                        <div className={styles.imageContainer}>
                            <Image src={vectorIcon} alt='Vector' width={47} height={30} />
                        </div>
                    </div>
                    <div className={styles.header}>We have received your information!</div>
                    <div className={styles.text}>
                        The information you send will be reviewed by our staff shortly.We will contact you as soons as
                        possible.
                    </div>
                </div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(modalContent, document.body);
};

export default InformationModal;
