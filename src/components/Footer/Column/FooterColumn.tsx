import React from 'react';
import styles from './FooterColumn.module.scss';
import Link from 'next/link';
import {  FooterColumnProps } from '../FooterTypes';

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, routing = [] }) => (
    <div className={styles.col}>
        <h2>{title}</h2>
        <ul>
            {items.map((item, index) => {
                const route = routing[index] ? `/${routing[index]}` : '#';
                return (
                    <li key={index}>
                        {typeof item === 'object' ? (
                            <a href={item.href}>{item.label}</a>
                        ) : routing[index] ? (
                            <Link href={route}>{item}</Link>
                        ) : (
                            item
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
);

export default FooterColumn;
