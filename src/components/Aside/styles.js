import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--high-contrast-color);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 24px;
  min-width: 260px;
  transform: translateX(-100%);
  transition: transform .3s ease;
  will-change: transform;
  z-index: 9999;

  &.is--active {
    transform: translateX(0);
  }

  @media (min-width: 750px) {
    background-color: #fff;
    margin-top: 60px;
    left: auto;
    top: 36px;
    bottom: 40px;
    padding: 0;
    min-width: auto;
    transform: translateX(0);
  }
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
    bottom: 40px;

    @media (min-width: 750px) {
      bottom: 20px;
    }
  }
`;
