import React from 'react';
import { useDispatch } from 'react-redux';

const Search = (props) => {
  const { fetchedData } = props;
  const dispatch = useDispatch();

  // this function is used to filter the data based on searched value"
  const handleInputSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_INPUT', payload: e.target[0].value });
    const filteredData = fetchedData?.filter((item) =>
      item?.title?.includes(e.target[0].value)
    );
    dispatch({ type: 'FILTERED_DATA', payload: filteredData });
  };

  // this function will retrieve all data if searched value is empty without clicking search button
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
