import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FiHome, FiDatabase, FiPackage, FiLayout, FiSettings, FiHelpCircle,
} from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { Nav, NavList, NavItem } from './styles';

const Aside = ({ menuOpen, openMenu }) => {
  const size = '1.4em';

  const navLinks = [
    {
      path: '/',
      name: 'Projeto',
      icon: <FiHome size={size} />,
      active: true,
    },
    {
      path: '/',
      name: 'Banco de dados',
      icon: <FiDatabase size={size} />,
    },
    {
      path: '/',
      name: 'Aplicações',
      icon: <FiPackage size={size} />,
    },
    {
      path: '/',
      name: 'Layout',
      icon: <FiLayout size={size} />,
    },
    {
      path: '/',
      name: 'Configurações',
      icon: <FiSettings size={size} />,
    },
    {
      path: '/',
      name: 'Ajuda',
      icon: <FiHelpCircle size={size} />,
      isFinal: true,
    },
  ];

  return (
    <Nav className={menuOpen ? 'is--active' : ''}>
      <button type="button" onClick={openMenu}>
        <MdClose size={24} color="#fff" className="hidden--dsk mb--normal" />
      </button>
      <NavList>
        {navLinks.map(({
          path, name, icon, active, isFinal,
        }) => (
          <NavItem key={name} className={isFinal ? 'is--last' : ''}>
            <Link to={path} className={`d--flex ai--center c--low-contrast ${active ? 'is--active' : ''}`}>
              <div className="mr--small">
                {icon}
              </div>
              <p className="fw--bold">{ name }</p>
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

Aside.defaultProps = {
  menuOpen: false,
};

Aside.propTypes = {
  menuOpen: PropTypes.bool,
  openMenu: PropTypes.func.isRequired,
};

export default Aside;
