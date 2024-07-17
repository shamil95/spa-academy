import React from 'react';
import styles from './Process.module.scss';

type boxData = {
    header: string;
    description: string;
};

const boxes:boxData[] = [
    { header: 'Planning', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { header: 'Conception', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { header: 'Design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { header: 'Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
];
const Process: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <div className={styles.title}>The proscess we follow</div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nemo dolores sint, fuga expedita
                    voluptatem modi quia consequatur sed enim, cumque voluptate eveniet deserunt aliquam. Nobis aut
                    ipsum laborum cum.
                </div>
            </div>
            <div className={styles.down}>
                {boxes.map((box, index) => (
                    <div key={index} className={styles.box}>
                        <div className={styles.light}>
                            <div className={styles.effect}></div>
                            <div className={styles.radius}></div>
                            <div className={styles.border}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>{box.header}</div>
                            <div className={styles.description}>{box.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
