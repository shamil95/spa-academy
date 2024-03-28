import React from 'react';
import styles from './FooterColumn.module.scss';
const FooterColumn = ({ title, items }) => (
    <div className={styles.col}>
        <h2>{title}</h2>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{typeof item === 'object' ? <a href={item.href}>{item.label}</a> : item}</li>
            ))}
        </ul>
    </div>
);
export default FooterColumn;
