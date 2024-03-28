import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';

const cards = [
    {
        id: 1,
        title: 'How thiw work?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 2,
        title: 'Are there any additional fee?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 3,
        title: 'How can I get the app?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 4,
        title: 'What features do you offer and other not?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 5,
        title: 'Are there any additional fee?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 6,
        title: 'How can I get the app?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
    {
        id: 7,
        title: 'What features do you offer and other not?',
        details:
            'It is better to see one than hear a hundred. Our free trial lesson helps you decide. You can attend classes and find answers to your questions with the help of our experts.',
    },
];

const Cards = () => {
    return (
        <div className={styles.cards}>
            {cards.map(card => (
                <Card key={card.id} title={card.title} details={card.details} />
            ))}
        </div>
    );
};
export default Cards;
