import React from 'react';
import styles from './CoursesDropdpwn.module.scss';
import Link from 'next/link';

type CoursesType = {
    id: number;
    title: string;
};
const NavigationCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Mathematics for Programming',
    },
    {
        id: 1,
        title: 'Programming Fundamentlas',
    },
    {
        id: 1,
        title: 'Computer Architecure and Systems',
    },
    {
        id: 1,
        title: 'Web Development Fundamentlas',
    },
    {
        id: 1,
        title: 'Graphic Design Fundamentlas',
    },
];
const MathCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Mathematics for Programming',
    },
    {
        id: 2,
        title: 'Mathematics for Data Science',
    },
];
const DataScienceCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Mathematics for Data Science',
    },
    {
        id: 2,
        title: 'Programming',
    },
    {
        id: 3,
        title: 'Data Analysis',
    },
    {
        id: 4,
        title: 'AI and Machine learning Fundamentals',
    },
];
const MarketingCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Social Media Marketing',
    },
    {
        id: 2,
        title: 'Search Engine Optimization',
    },
    {
        id: 3,
        title: 'Influencer Marketing',
    },
];
const DesignCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Graphic Desing',
    },
    {
        id: 2,
        title: 'UI/UX Design',
    },
];
const DevelopmentCourses: CoursesType[] = [
    {
        id: 1,
        title: 'Java',
    },
    {
        id: 2,
        title: 'Python',
    },
    {
        id: 3,
        title: 'Golang',
    },
    {
        id: 4,
        title: 'Web Development',
    },
];
const BootCamps: CoursesType[] = [
    {
        id: 1,
        title: 'Full Stack Development',
    },
    {
        id: 2,
        title: 'Back-End Development',
    },
    {
        id: 3,
        title: 'Front-End Development',
    },
    {
        id: 4,
        title: 'Algorithm Architects',
    },
];

const CoursesDropdown: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.title}>For Teenagers</div>
                <ul className={styles.links}>
                    {NavigationCourses.map(data => (
                        <li className={styles.link} key={data.id}>
                            <Link href=''>{data.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.title}>Mathematics</div>
                    <ul className={styles.links}>
                        {MathCourses.map(data => (
                            <li className={styles.link} key={data.id}>
                                <Link href=''>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.row}>
                    <div className={styles.title}>Data Science</div>
                    <ul className={styles.links}>
                        {DataScienceCourses.map(data => (
                            <li className={styles.link} key={data.id}>
                                <Link href=''>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.title}>Digital Marketing</div>
                    <ul className={styles.links}>
                        {MarketingCourses.map(data => (
                            <li className={styles.link} key={data.id}>
                                <Link href=''>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.row}>
                    <div className={styles.title}>Design</div>
                    <ul className={styles.links}>
                        {DesignCourses.map(data => (
                            <li className={styles.link} key={data.id}>
                                <Link href=''>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.title2}>Software Development</div>
                <ul className={styles.links}>
                    {DevelopmentCourses.map(data => (
                        <li className={styles.link} key={data.id}>
                            <Link href=''>{data.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>BootCamps</div>
                <ul className={styles.links}>
                    {BootCamps.map(data => (
                        <li className={styles.link} key={data.id}>
                            <Link href=''>{data.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CoursesDropdown;


// import React from 'react';
// import styles from './CoursesDropdpwn.module.scss';
// import CourseSection from './CourseSection/CourseSection';

// const NavigationCourses = [
//     { id: 1, title: 'Mathematics for Programming' },
//     { id: 2, title: 'Programming Fundamentals' },
//     { id: 3, title: 'Computer Architecture and Systems' },
//     { id: 4, title: 'Web Development Fundamentals' },
//     { id: 5, title: 'Graphic Design Fundamentals' },
// ];

// const MathCourses = [
//     { id: 1, title: 'Mathematics for Programming' },
//     { id: 2, title: 'Mathematics for Data Science' },
// ];

// const DataScienceCourses = [
//     { id: 1, title: 'Mathematics for Data Science' },
//     { id: 2, title: 'Programming' },
//     { id: 3, title: 'Data Analysis' },
//     { id: 4, title: 'AI and Machine Learning Fundamentals' },
// ];

// const MarketingCourses = [
//     { id: 1, title: 'Social Media Marketing' },
//     { id: 2, title: 'Search Engine Optimization' },
//     { id: 3, title: 'Influencer Marketing' },
// ];

// const DesignCourses = [
//     { id: 1, title: 'Graphic Design' },
//     { id: 2, title: 'UI/UX Design' },
// ];

// const DevelopmentCourses = [
//     { id: 1, title: 'Java' },
//     { id: 2, title: 'Python' },
//     { id: 3, title: 'Golang' },
//     { id: 4, title: 'Web Development' },
// ];

// const BootCamps = [
//     { id: 1, title: 'Full Stack Development' },
//     { id: 2, title: 'Back-End Development' },
//     { id: 3, title: 'Front-End Development' },
//     { id: 4, title: 'Algorithm Architects' },
// ];

// const CoursesDropdown: React.FC = () => {
//     return (
//         <div className={styles.container}>
//             <CourseSection title="For Teenagers" courses={NavigationCourses} />
//             <div className={styles.column}>
//                 <CourseSection title="Mathematics" courses={MathCourses} />
//                 <CourseSection title="Data Science" courses={DataScienceCourses} />
//             </div>
//             <div className={styles.column}>
//                 <CourseSection title="Digital Marketing" courses={MarketingCourses} />
//                 <CourseSection title="Design" courses={DesignCourses} />
//             </div>
//             <CourseSection title="Software Development" courses={DevelopmentCourses} />
//             <CourseSection title="BootCamps" courses={BootCamps} />
//         </div>
//     );
// };

// export default CoursesDropdown;

