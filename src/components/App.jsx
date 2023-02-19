import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = bad + good + neutral;

  const countPositivePercentage = Math.round((good / countTotalFeedback) * 100);

  const increaseFeedback = event => {
    const name = event.target.name;
    if (name === 'bad') {
      setBad(bad + 1);
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (name === 'good') setGood(good + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={increaseFeedback}
        />
        <h2>Statistics</h2>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPositivePercentage}
          />
        )}
      </Section>
    </>
  );
};
