import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  className, label, isActive, onClick,
}) => (
  <li className={className}>
    <button
      type="button"
      className={isActive ? 'is--active' : ''}
      onClick={onClick}
    >
      {label}
    </button>
  </li>
);

Tab.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
