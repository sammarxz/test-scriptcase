import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import { FiFolder, FiBell } from 'react-icons/fi';

// Components
import Search from '../Search';

// Styles
import {
  Header as H, Logo, Version, Notification, User,
} from './styles';

const Header = ({ user: { name, thumb } }) => (
  <H className="d--grid ai--center jc--space-between grid-layout">
    <Logo to="/">
      <img src="./images/logo.svg" alt="ScriptCase Logo" />
    </Logo>
    <Search className="hidden--mb ga--1-2" />
    <div className="d--flex ai--center jc--flex-end ga--1-4">
      <Version className="d--flex ai--center hidden--mb">
        <FiFolder size="1.2em" className="d--inline-block c--primary mr--small" />
        <p className="d--inline-block">samples 1.0.0</p>
      </Version>
      <div className="bg--component-outline divisor hidden--mb" />
      <Notification>
        <FiBell size="1.2em" className="c--primary" />
      </Notification>
      <div className="bg--component-outline divisor" />
      <User className="d--flex ai--center">
        <p className="mr--normal hidden--mb">
          Olá,
          {' '}
          <strong>{name}</strong>
          <FaChevronDown size="0.8em" />
        </p>
        <img src={thumb} className="avatar" alt={name} />
      </User>
    </div>
  </H>
);

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
