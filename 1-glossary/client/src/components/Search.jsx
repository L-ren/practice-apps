import React from 'react';

const Search = ({onSearchEntry, onSearchSubmit, setSearchText}) => {
  return (<form onSubmit={onSearchSubmit}>
    <h3>Search for a Word!</h3>
    <input type='text' placeholder='Search' onChange={onSearchEntry}></input>
    <input type='submit'></input>
  </form>);
};

export default Search;