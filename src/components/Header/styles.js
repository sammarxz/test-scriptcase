import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  left: 5%;
  right: 5%;

  .divisor {
    margin: 0 16px;
    height: 38px;
    width: 2px;
  }
`;

export const Version = styled.div`

`;

export const Notification = styled.div`

`;

export const User = styled.div`
  svg {
    transform: translate(3px, 2px)
  }
`;

export const Logo = styled(Link)`
  color: red;
`;
