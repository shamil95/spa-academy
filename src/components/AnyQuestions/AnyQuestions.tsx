import React from 'react';
import styles from './AnyQuestions.module.scss';
import Card from './Card/Card';
import { CardType } from './CardType';

const cards: CardType[] = [
    {
        id: 1,
        title: 'How are classes going?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 2,
        title: 'Will the program definitely bring me results?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 3,
        title: 'Is it possible to freeze training for a few days or weeks?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 4,
        title: 'Why don’t you give endless access to courses?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 5,
        title: ' It possible to reschedule the start date of the course?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 6,
        title: 'Do you have a money back guarantee?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
    {
        id: 7,
        title: 'How can i get into the program if I have paid?',
        details:
            'All classes on our website take place online and involve self-study without teacher intervention (although you can always ask a tutor a question via chat). You just need to go to the lesson and complete the tasks that are assigned to you. Because of this, we expect you to exercise self-discipline and take control of your learning process. To do this, we try to provide you with all possible assistance; for example, you can set up email reminders in your personal account in the “Reminders” section.',
    },
];

const AnyQuestions: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.header}>Have any questions about our course? We got you</h1>
                    <p className={styles.content}>
                        Pizza ipsum dolor meat lovers buffalo. Tomato wing wing Aussie Bianca. String large pizza sauce
                        Hawaiian. Onions bell Aussie ricotta lot banana tomato personal mouth crust. Red roll ham fresh
                        lovers pan lot steak melted mushrooms.
                    </p>
                </div>
                <button className={styles.btn}>Get in touch</button>
            </div>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <Card key={card.id} title={card.title} details={card.details} isFirst={index === 0} />
                ))}
            </div>
        </div>
    );
};

export default AnyQuestions;
