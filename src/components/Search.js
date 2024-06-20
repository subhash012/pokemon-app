import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
