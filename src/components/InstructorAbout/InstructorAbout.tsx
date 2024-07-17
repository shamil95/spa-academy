import React from 'react';
import styles from './InstructorAbout.module.scss';
import Title from '../Title/Title';

const InstructorAbout: React.FC = () => {
    return (
        <div className={styles.container}>
            <Title
                className={styles.titleComponent}
                title='About'
                description='Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit voluptat em acus antium.
doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dicta sunt explicabo.'
            />
            <div className={styles.contact}>
                <div className={styles.header}>Contact Me</div>
                <div className={styles.address}>
                    Address: <span>North Helenavile, FV77 8WS</span>
                </div>
            </div>
        </div>
    );
};

export default InstructorAbout;
