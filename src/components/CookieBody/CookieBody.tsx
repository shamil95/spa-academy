import React from 'react';
import styles from './CookieBody.module.scss';

const CookieBody: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.infoTitle}>
                    <p>
                        We use cookies and similar technologies. This Cookie Policy explains how we use cookies in
                        connection with the Platform and your related choices.
                    </p>
                    <p>
                        Capitalized terms used in this Cookie Policy but not defined here will have the meanings given
                        to them in our Privacy Policy.
                    </p>
                    <p>You may also contact us at privacy@spacademy.com with any additional questions.</p>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.title}>What are Cookies, Pixels and Local Storage?</div>
                    <div className={styles.text}>
                        <p>
                            We use both 1st party cookies (which are set by us) and 3rd party cookies (which are set by
                            a server located outside the domain of our Site). Some of the cookies or similar
                            technologies that we use are “strictly necessary” in that they are essential to the Site.
                            Without them, the Site will not work. Other cookies or similar technologies, while not
                            essential, help us improve our Platform or measure audiences. Why we use cookies is describe
                            below in more detail.
                        </p>
                        <p>
                            Pixel tags (also known as web beacons or pixels) are small blocks of code on a web page or
                            in an email notification. Pixels allow companies to collect information such as an
                            individual’s IP address, when the individual viewed the pixel and the type of browser used.
                            We use pixel tags to understand whether you’ve interacted with content on our Platform,
                            which helps us measure and improve our Platform and personalize your experience.
                        </p>
                        <p>
                            Local storage allows a website to store information locally on your computer or mobile
                            device. Local storage is mainly used to store and retrieve data in HTML pages from the same
                            domain. We use local storage to customize what we show you based on your past interactions
                            with our Platform.
                        </p>
                        <p>
                            It is important to understand that cookies (and the technologies listed above) collect
                            personal information as well as non-identifiable information.
                        </p>
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.title}>How and Why do We Use Cookies?</div>
                    <div className={styles.text}>
                        <p>
                            We use both 1st party cookies (which are set by us) and 3rd party cookies (which are set by
                            a server located outside the domain of our Site). Some of the cookies or similar
                            technologies that we use are “strictly necessary” in that they are essential to the Site.
                            Without them, the Site will not work. Other cookies or similar technologies, while not
                            essential, help us improve our Platform or measure audiences. Why we use cookies is describe
                            below in more detail.
                        </p>
                        <p>
                            <span> Strictly Necessary or Essential Cookies </span>: These cookies are necessary for the
                            Site to function and cannot be switched off in our systems. For example, we use cookies to
                            authenticate you. When you log on to our websites, authentication cookies are set which let
                            us know who you are during a browsing session. We have to load essential cookies for
                            legitimate interests pursued by us in delivering our Site’s essential functionality to you.
                        </p>
                        <p>
                            <span> Functionality Cookies </span>: These cookies are used to enable certain additional
                            functionality on our Site, such as storing your preferences (e.g. username) and assisting us
                            in providing support or payment services to you so we know your browser or operating system.
                            This functionality improves user experience and enables us to provide better Services and a
                            more efficient Platform.
                        </p>
                        <p>
                            <span> Performance and Analytics Cookies </span>: These cookies allow us to count visits and
                            traffic sources so we can measure and improve the performance of our Site. They help us to
                            know which pages are the most and least popular and see how visitors navigate the Site.
                            Performance cookies are used to help us with our analytics, including to compile statistics
                            and analytics about your use of and interaction with the Site, including details about how
                            and where our Site are accessed, how often you visit or use the Site, the date and time of
                            your visits, your actions on the Site, and other similar traffic, usage, and trend data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBody;
