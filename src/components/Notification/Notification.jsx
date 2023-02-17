import propTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h4>{message}</h4>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
