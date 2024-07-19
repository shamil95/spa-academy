import React from 'react';
import styles from './ResourcesDropdown.module.scss';
import Link from 'next/link';

type ResourcesDataType = {
    id: number;
    title: string;
    href?: string;
};

const resourcesData: ResourcesDataType[] = [
    {
        id: 1,
        title: 'Blog',
        href: 'blog',
    },
    {
        id: 2,
        title: 'Events',
        href: 'events',
    },
    {
        id: 3,
        title: 'Webinars',
        href: 'webinars',
    },
];

// const resourcesHref: string[] = ['blog', 'events', 'webinars'];

const ResourcesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {resourcesData.map((data, index) => (
                    <li className={styles.link} key={data.id}>
                        <Link href={`/${data.href}`}>{data.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesDropdown;
