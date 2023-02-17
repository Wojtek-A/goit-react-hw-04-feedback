import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const names = Object.keys(options);
  return names.map(name => {
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
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
