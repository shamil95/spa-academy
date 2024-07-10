import React from 'react';
import styles from './ManagementServices.module.scss';
import Title from '../Title/Title';

type ServicesDataType = {
    id: number,
    title: string,
    text: string
}

const servicesData: ServicesDataType[] = [
    {
        id: 1,
        title: 'Accurate assessment of IT needs',
        text: 'Get exactly what you need to succeed in the extremely competitive environment with our professional outlook to reduce costs and get things done properly.',
    },
    {
        id: 2,
        title: 'Effective resource planning practices',
        text: 'Enhance your planning processes and transform the way you envision the Agile implementation of your ambitious initiatives .',
    },
    {
        id: 3,
        title: 'Robust team assembly and management',
        text: "Andersen's professionals get things done by assigning well-thought-out tasks and applying elaborate metrics to drive.",
    },
];

const ManagementServices: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title
                    className={styles.titleComponent}
                    title='Achieve success with IT Project Management Services'
                    description='Depending on your needs, you can implement or facilitate your corporate IT initiatives via Andersen’s Project Management Expertise and Services.'
                />
                <div className={styles.boxes}>
                    {servicesData.map((service,index) => (
                        <div key={service.id} className={index===0 ?styles.boxBlack:styles.box}>
                            <div className={styles.title}>{service.title}</div>
                            <div className={styles.text}>{service.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementServices;

