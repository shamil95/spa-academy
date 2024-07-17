import styles from './ProjectManagement.module.scss';
import React from 'react';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Title from '../Title/Title';

const { beetrootIcon1 } = ICONS;

type boxDataType = {
    id: number;
    image: React.ReactNode;
    title: string;
    description: string;
};

const boxData: boxDataType[] = [
    {
        id: 1,
        image: <Image src={beetrootIcon1} alt='Document Icon' width={36} height={36} />,
        title: 'Project portfolio management',
        description:
            'IT Project Managers will assist you with concept generation, investment in promising projects, and the delivery of outstanding results via PPM.',
    },
    {
        id: 2,
        image: <Image src={beetrootIcon1} alt='User Icon' width={36} height={36} />,
        title: 'Change management',
        description:
            'If you need to transform the way your business operates, delivers value, and meets challenges via IT solutions, our Project Management experts are here to help.',
    },
    {
        id: 3,
        image: <Image src={beetrootIcon1} alt='Star Icon' width={36} height={36} />,
        title: 'PMaaS',
        description:
            'PMaaS is the most expedient and flexible way to ensure proper project implementation with a dedicated IT Project Manager at your disposal.',
    },
    {
        id: 4,
        image: <Image src={beetrootIcon1} alt='Cup Icon' width={36} height={36} />,
        title: 'Project management consultancy',
        description:
            'Contact us to get access to a source of excellent project management knowledge, professional advice, methodology guidelines, and more.',
    },
    {
        id: 5,
        image: <Image src={beetrootIcon1} alt='Music Icon' width={36} height={36} />,
        title: 'Project scoping and delivery',
        description:
            'Proper and accurate project management estimates are the key prerequisite for cost-effective, competitive, and productive operations.',
    },
    {
        id: 6,
        image: <Image src={beetrootIcon1} alt='Clock Icon' width={36} height={36} />,
        title: 'Process optimization',
        description:
            'Streamline your IT project management processes to save resources and deliver more value with Andersen’s top-notch Project Management experts.',
    },
];

const ProjectManagement: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Title
                    title='Our expertise in IT Project Management'
                    description='Depending on your needs, you can implement or facilitate your corporate IT initiatives via Andersen’s Project Management Expertise and Services.'
                    className={styles.titleComponent}
                />

                <div className={styles.boxes}>
                    {boxData.map(box => (
                        <div key={box.id} className={styles.box}>
                            <div className={styles.boxImage}>{box.image}</div>
                            <div className={styles.boxTitle}>{box.title}</div>
                            <div className={styles.boxDescription}>{box.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;
