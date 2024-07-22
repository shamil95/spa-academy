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



const ResourcesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {resourcesData.map((data, index) => (
                    <Link href={`/${data.href}`} key={data.id}>
                        <li className={styles.link}>{data.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesDropdown;
