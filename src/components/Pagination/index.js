import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Pagination = () => {
  const { table, pagination, search } = useSelector((state) => state);
  const { pageCount, rowsPerPage } = pagination;
  const { fetchedData, filteredData } = table;
  const { searchedValue } = search;

  const dispatch = useDispatch();

  const handlePagination = (type) => {
    if (type === 'PREV') {
      pageCount !== rowsPerPage && dispatch({ type: 'PREV' });
    } else {
      if (searchedValue) {
        pageCount < filteredData?.length && dispatch({ type: 'NEXT' });
      } else {
        pageCount < fetchedData?.length && dispatch({ type: 'NEXT' });
      }
    }
  };

  const handleRowsPerPage = (e) => {
    const number = parseInt(e.target.value);
    dispatch({ type: 'ROWS_PER_PAGE', payload: number });
    dispatch({ type: 'SET_PAGE_COUNT', payload: number });
  };

  return (
    <div className="pagination">
      <div>
        {/* select is used to handle the rows per page */}
        <select
          defaultValue={rowsPerPage}
          onChange={handleRowsPerPage}
          data-testid="select-box"
        >
          <option value={5} data-testid="select-option">
            5
          </option>
          <option value={10} data-testid="select-option">
            10
          </option>
          <option value={25} data-testid="select-option">
            25
          </option>
        </select>
        &nbsp;
        <label>rows per page</label>
      </div>
      <div>
        {/* Prev button will be disabled if we are in first page */}
        <button
          disabled={pageCount === rowsPerPage}
          onClick={() => handlePagination('PREV')}
          data-testid="prev-button"
        >
          &lt; Prev
        </button>
        &nbsp;
        {/* Prev button will be disabled if we are in last page */}
        <button
          disabled={
            searchedValue
              ? pageCount >= filteredData?.length
              : pageCount >= fetchedData?.length
          }
          onClick={() => handlePagination('NEXT')}
          data-testid="next-button"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
