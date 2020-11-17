import styled from 'styled-components';

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  background-color: var(--component-bg-color);
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 12px 16px;
  transition: border-color .3s ease;

  &focus {
    border-color: var(--primary-color);
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchIcon = styled.div`
  color: var(--low-contrast-color);
  position: absolute;
  right: 16px;
  top: 12px;
`;
