import React from 'react';
import styles from './Login.module.scss';
import { ICONS } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import cloudImage from '../../assets/images/cloudImage.png';
import settingsImage from '../../assets/images/settingsImage.png';

const { LanguageIcon, arrowLeft, loginGroup, appleIcon, googleIcon, instaIcon, xIcon, linkedinIcon, fbIcon } = ICONS;
const socialIcons = [fbIcon, xIcon, instaIcon, linkedinIcon];

const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className={styles.link}>
                <Link href='/'>
                    <Image src={arrowLeft} alt='Arrow left' width={16} height={16} className={styles.arrow} />
                    <span>Back to home</span>
                </Link>
            </button>
            <button className={styles.language}>
                <Image src={LanguageIcon} alt={'language'} width={16} height={16} className={styles.lang} />
                <span>Eng</span>
            </button>

            <div className={styles.loginContainer}>
                <div className={styles.loginCard}>
                    <div className={styles.logo}>
                        <Image src={loginGroup} alt='Login icon' width={30} height={32} />
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>Login to profile</div>
                        <form>
                            <div className={styles.inputFields}>
                                <label htmlFor='email'>Email</label>
                                <input type='text' id='email' name='email' />
                            </div>
                            <div className={styles.inputFields}>
                                <label htmlFor='email'>Password</label>
                                <input type='password' id='password' name='password' />
                            </div>

                            <button type='submit' className={styles.loginBtn}>
                                Login
                            </button>

                            <div className={styles.arrowContainer}>
                                <hr className={styles.customHr} /> <span>or continue with</span>
                                <hr className={styles.customHr} />
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.btn}>
                                    <Image src={googleIcon} alt='Apple icon' width={20} height={20} />
                                    Google
                                </button>
                                <button className={styles.btn}>
                                    <Image src={appleIcon} alt='Apple icon' width={20} height={20} />
                                    Apple
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.text}>
                    <span>
                        Don't have an account?{' '}
                        <Link href='/'>
                            <span className={styles.linkSpan}>Create a profile</span>{' '}
                        </Link>
                    </span>
                </div>
            </div>
            <div className={styles.loginfooter}>
                <div className={styles.cloud}>
                    <Image src={cloudImage.src} alt='Cloud' width={336} height={335} />
                </div>
                <div className={styles.cloud}>
                    <div className={styles.iconContainer}>
                        {socialIcons.map((icon, index) => (
                            <div key={index} className={styles.icon}>
                                <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.cloud}>
                    <Image src={settingsImage.src} alt='Cloud' width={336} height={335} />
                </div>
            </div>
        </div>
    );
};

export default Login;
