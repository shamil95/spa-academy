import React from 'react';
import styles from './ProjectManagers.module.scss';

type ServicesDataType = {
    id: number;
    number: string;
    title: string;
    text: string;
};

const servicesData: ServicesDataType[] = [
    {
        id: 1,
        number: '01',
        title: 'Project manager',
        text: 'Responsible for managing projects, setting up project processes, and getting clear results in compliance with the basic parameters: scope, budget, and time.',
    },
    {
        id: 2,
        number: '02',
        title: 'Product owner',
        text: 'Responsible for maximizing the product value resulting from the work of the development team.',
    },
    {
        id: 3,
        number: '03',
        title: 'Scrum master',
        text: 'Responsible for ensuring Scrum practices over the course of a project, facilitating the process for the firm, Product Owner, and team.',
    },
];

const ProjectManagers: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.mainTitle}>Professional IT Project Managers</div>
                <div className={styles.boxes}>
                    {servicesData.map((service, index) => (
                        <div key={service.id} className={index === 0 ? styles.boxBlack : styles.box}>
                            <div className={styles.number}>{service.number}</div>
                            <div className={styles.title}>{service.title}</div>
                            <div className={styles.text}>{service.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectManagers;
