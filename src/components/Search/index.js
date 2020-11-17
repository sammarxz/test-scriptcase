import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

// Styles
import { SearchBar, SearchWrapper, SearchIcon } from './styles';

const Search = ({ onSearch, className }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <SearchWrapper className={className || ''}>
      <SearchBar
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleSubmit}
        placeholder="Buscar..."
        className="search"
      />
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
    </SearchWrapper>
  );
};

Search.defaultProps = {
  onSearch: (value) => value, // console.log(`Buscando por ${value}`);

  className: '',
};
Search.propTypes = {
  onSearch: PropTypes.func,
  className: PropTypes.string,
};

export default Search;
