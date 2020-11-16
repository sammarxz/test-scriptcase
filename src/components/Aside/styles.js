import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  margin-top: 80px;
  top: 36px;
  bottom: 40px;
`;

export const NavList = styled.ul`
  height: 100%;
  position: relative;
`;

export const NavItem = styled.li`
  padding: 8px 0;
  margin-bottom: 8px;

  a {
    transition: color .3s ease;
  }
  
  &:hover a {
    color: var(--primary-color);
  }

  & a.is--active {
    color: var(--primary-color);
  }

  &.is--last {
    position: absolute;
    bottom: 0;
  }
`;
