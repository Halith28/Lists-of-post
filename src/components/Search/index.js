import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
  const { fetchedData } = useSelector((state) => state?.table);
  const dispatch = useDispatch();

  const handleInputSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_INPUT', payload: e.target[0].value });
    const filteredData = fetchedData?.filter((item) =>
      item?.title?.includes(e.target[0].value)
    );
    dispatch({ type: 'FILTERED_DATA', payload: filteredData });
  };
  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      dispatch({ type: 'SEARCH_INPUT', payload: '' });
    }
  };

  return (
    <form onSubmit={handleInputSearch}>
      <input
        name="search"
        placeholder="Type a keyword"
        onChange={handleInput}
        data-testid="search-input"
      />
      <input value="Search" type="submit" />
    </form>
  );
};

export default Search;
