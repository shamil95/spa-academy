import React from 'react';
import styles from './LanguageDropdowns.module.scss';
import Link from 'next/link';

type ServicesesDataType = {
    id: number;
    title: string;
};

const servicesData: ServicesesDataType[] = [
    {
        id: 1,
        title: 'Eng',
    },
    {
        id: 2,
        title: 'Aze',
    },
    {
        id: 3,
        title: 'Rus',
    },
];

const ServicesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {servicesData.map(data => (
                    <li className={styles.link} key={data.id}>
                        <Link href=''>{data.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesDropdown;
