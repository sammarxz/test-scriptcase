import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { TabItem, TabLink } from './styles';

const Tab = ({
  className, label, isActive, onClick,
}) => (
  <TabItem className={className}>
    <TabLink
      type="button"
      className={isActive ? 'is--active' : ''}
      onClick={onClick}
    >
      {label}
    </TabLink>
  </TabItem>
);

Tab.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
