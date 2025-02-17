// components/SearchBox.js
import React from 'react';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar videojuegos..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
