import React from 'react';
import propTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  titel: propTypes.string.isRequired,
};
