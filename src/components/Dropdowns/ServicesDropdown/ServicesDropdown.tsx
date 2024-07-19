import React from 'react';
import styles from './ServicesDropdown.module.scss';
import Link from 'next/link';

type ServicesesDataType = {
    id: number;
    title: string;
    href?: string;
};

const servicesData: ServicesesDataType[] = [
    {
        id: 1,
        title: 'IT strategy',
        href: 'ITstrategy',
    },
    {
        id: 2,
        title: 'Data analytics',
    },
    {
        id: 3,
        title: 'IT project management',
    },
    {
        id: 4,
        title: 'Custom solutions',
    },
    {
        id: 4,
        title: 'Case studies',
    },
];

const ServicesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {servicesData.map((data, index) => (
                    <Link href={`/${data.href}`} key={data.id}>
                        <li className={styles.link}>{data.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ServicesDropdown;
