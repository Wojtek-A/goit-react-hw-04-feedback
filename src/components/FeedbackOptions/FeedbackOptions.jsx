import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(name => {
    return (
      <button
        key={name}
        type="button"
        className={css.button}
        name={name}
        onClick={onLeaveFeedback}
      >
        {name}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
