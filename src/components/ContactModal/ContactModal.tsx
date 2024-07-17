import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ContactModal.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';

const { closeIcon } = ICONS;

interface ContactModalProps {
    closeModal: (open: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ closeModal }) => {
    const modalContent = (
        <div className={styles.background}>
            <div className={styles.container}>
                    <button className={styles.closeBtn} onClick={() => closeModal(false)}>
                        <Image src={closeIcon} alt='Close button' />
                    </button>
                <div className={styles.contact}>
                    <div className={styles.text}>
                        <div className={styles.header}>We will contact you</div>
                        <p>The phone number can be used to receive special offers.</p>
                        <form className={styles.form}>
                            <div className={styles.formDiv}>
                                <label htmlFor='fullName'>Full name</label>
                                <input type='text' id='fullName' name='fullName' required />
                            </div>
                            <div className={styles.formDiv}>
                                <label htmlFor='phoneNumber'>Phone number</label>
                                <input
                                    type='tel'
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    required
                                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.footer}>
                    <button className={styles.btnSend}>Send</button>
                    <p>
                        By clicking on the button, I agree to the processing of personal data and the rules for using the
                        Platform.
                    </p>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default ContactModal;
