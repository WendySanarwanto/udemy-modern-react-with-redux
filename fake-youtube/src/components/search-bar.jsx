import React from 'react';

const SearchBar = ({onSearchChanged}) => {
  return (
    <div className="search-bar">
      <input placeholder="Search" onChange={ event => onSearchChanged(event.target.value) } />
    </div>
  );
}

export default SearchBar;