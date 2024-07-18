import React from 'react';
import styles from './VacancyBody.module.scss';

const VacancyBody: React.FC = () => {
    const requirements: string[] = [
        'middle or senior QA manual engineer',
        'strong communication skills',
        'you have a native-level Romanian and upper-intermediate/advanced written and spoken English skills ',
        'experience in drawing up a test plan and test documentation',
        'experience with databases (MySQL, PostgreSQL)',
        'experience with project/test management systems (Jira, Azure DevOps, TestRail, etc.)',
        'understanding the principles of load and auto testing',
        'knowledge of software development methodologies (Agile in particular)',
        'experience with Git',
    ];
    const additionalRequirements: string[] = [
        'teach students in live classes via Zoom 2-3 times a week;',
        'check their progress and correct the learning process according to their needs;',
        'build a supportive classroom community; ',
        'motivate and inspire students to overcome challenges they face during studying;',
        'support diversity, equity, and inclusion in communication;',
        'participating in our events as a speaker is an option.',
    ];
    const benefits: string[] = [
        'Deep and structure your knowledge base by preparing for the classes',
        'Develop your leadership skills by teaching',
        'Promote yourself at work by showing teaching experience',
        'Find a trainee or junior specialist for your team, if needed',
        'Get access to free English lessons after your first group graduates, join any of our courses for free and get a 50% discount for family members after the third one.',
    ];

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    Join the global community of industry experts to play a crucial role in growing the next generation
                    of tech talents. Providing a life-changing educational experience, you will help people worldwide
                    build great tech careers. You will teach online, in up to 15 students' live classes, during evening
                    hours (and on weekends if previously agreed), combining it with your main work or/and family. Our
                    team of methodologists will guide you through the teaching process and support you at every stage to
                    help you achieve the best results as a teacher at Science Park Academy.
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>Who are we looking for?</div>
                    <ul>
                        <li>
                            We are looking for an impact-driven person thrilled to share gained knowledge and
                            professional experience with our students.{' '}
                        </li>
                    </ul>
                </div>

                <div className={styles.text}>
                    <div className={styles.title}>The main requirements are:</div>
                    <ul>
                        {requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>Will be a bonus:</div>
                    <ul>
                        {additionalRequirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>What we offer:</div>
                    <ul>
                        {benefits.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
                <text>
                    If you like the perspective of being a teacher at Science Park Academy, apply now. We will contact
                    you and describe the next steps of the recruitment process. 
                </text>
            </div>
        </div>
    );
};

export default VacancyBody;
