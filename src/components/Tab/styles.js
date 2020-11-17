import styled from 'styled-components';

export const TabItem = styled.li`
  display: inline-block;
`;

export const TabLink = styled.button`
  border-bottom: 2px solid transparent;
  color: var(--low-contrast-color);
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 8px;
  margin-right: 16px;
  transition: all .3s ease;

  &.is--active {
    color: var(--primary-color);
    font-weight: 600;
    border-color: var(--primary-color);
  }
`;
