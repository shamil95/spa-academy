import React from 'react';
import styles from './PagesDropdown.module.scss';
import Link from 'next/link';

type PagesDataType = {
    id: number;
    title: string;
};

const pagesData: PagesDataType[] = [
    {
        id: 1,
        title: 'About us',
    },
    {
        id: 2,
        title: 'Careers',
    },
    {
        id: 3,
        title: 'Instructors',
    },
    {
        id: 4,
        title: 'Contact us',
    },
];

const PagesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {pagesData.map(data => (
                    <li className={styles.link} key={data.id}>
                        <Link href=''>{data.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PagesDropdown;
