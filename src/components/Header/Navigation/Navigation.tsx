'use client';
import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import Image from 'next/image';
import { ICONS } from '@/assets/icons';
import { CoursesDopdown, PagesDropdown, ServicesDropdown, ResourcesDropdown, LanguageDropdown } from '../../Dropdowns';

const { LogoIcon, arrowDownIcon, arrowDown1 } = ICONS;

type NavigationData = {
    id: number;
    title: string;
};

const navigationData: NavigationData[] = [
    {
        id: 1,
        title: 'Academy',
    },
    {
        id: 2,
        title: 'Consulting services',
    },
    {
        id: 3,
        title: 'Resources',
    },
    {
        id: 4,
        title: 'Pricing',
    },
];

const Navigation: React.FC = () => {
    const [dropdownState, setDropdownState] = useState({
        courses: false,
        pages: false,
        services: false,
        resources: false,
    });

    const toggleDropdown = (dropdown: 'courses' | 'pages' | 'services' | 'resources') => {
        setDropdownState(prevState => ({
            courses: dropdown === 'courses' ? !prevState.courses : false,
            pages: dropdown === 'pages' ? !prevState.pages : false,
            services: dropdown === 'services' ? !prevState.services : false,
            resources: dropdown === 'resources' ? !prevState.resources : false,
        }));
    };

    return (
        <div className={styles.navigation}>
            {dropdownState.courses && <CoursesDopdown />}
            {dropdownState.pages && <PagesDropdown />}
            {dropdownState.services && <ServicesDropdown />}
            {dropdownState.resources && <ResourcesDropdown />}

            <div className={styles.navigationLinks}>
                <Image src={LogoIcon.src} alt={'logo'} width={162} height={40} />
                <div className={styles.allCourses} onClick={() => toggleDropdown('courses')}>
                    All courses
                    <Image className={styles.icon} src={arrowDownIcon.src} alt='arrow down' width={20} height={15} />
                </div>
                <ul className={styles.links}>
                    {/* {navigationData.map(data => (
                        <li className={styles.link} key={data.id} onClick={() => toggleDropdown('pages')}>
                            {data.title}
                        </li>
                    ))}
                    <li className={styles.link} onClick={() => toggleDropdown('services')}>
                        Services
                    </li> */}
                    <li className={styles.link} onClick={() => toggleDropdown('pages')}>
                        Academy
                        <Image src={arrowDown1} alt='Arrow down ' width={16} height={16} />
                    </li>
                    <li className={styles.link} onClick={() => toggleDropdown('services')}>
                        Consulting services
                        <Image src={arrowDown1} alt='Arrow down ' width={16} height={16} />
                    </li>
                    <li className={styles.link} onClick={() => toggleDropdown('resources')}>
                        Resources
                        <Image src={arrowDown1} alt='Arrow down ' width={16} height={16} />
                    </li>
                    <li className={styles.link}>Pricing</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
