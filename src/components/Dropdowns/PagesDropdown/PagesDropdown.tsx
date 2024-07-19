import React from 'react';
import styles from './PagesDropdown.module.scss';
import Link from 'next/link';

type PagesDataType = {
    id: number;
    title: string;
    href?: string;
};

const pagesData: PagesDataType[] = [
    {
        id: 1,
        title: 'About us',
        href: 'about',
    },
    {
        id: 2,
        title: 'Careers',
        href: 'careers',
    },
    {
        id: 3,
        title: 'Instructors',
        href: 'instructors',
    },
    {
        id: 4,
        title: 'Contact us',
        href: 'contact',
    },
];

const PagesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {pagesData.map((data, index) => (
                    <Link href={`/${data.href}`} key={data.id}>
                        <li className={styles.link}>{data.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default PagesDropdown;
