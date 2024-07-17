import React from 'react';
import styles from './ResourcesDropdown.module.scss';
import Link from 'next/link';

type ResourcesDataType = {
    id: number;
    title: string;
};

const resourcesData: ResourcesDataType[] = [
    {
        id: 1,
        title: 'Blog',
    },
    {
        id: 2,
        title: 'Events',
    },
    {
        id: 3,
        title: 'Webinars',
    },
];

const resourcesHref: string[] = ['blog', 'events', 'webinars'];

const ResourcesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {resourcesData.map((data, index) => (
                    <li className={styles.link} key={data.id}>
                        <Link href={`/${resourcesHref[index]}`}>{data.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesDropdown;
