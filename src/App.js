import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [state, setState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState('');
  const [pageCount, setPageCount] = useState(10);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function getData() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setState(res?.data);
      })
      .catch((err) => console.log('eer', err));
  }

  useEffect(() => {
    getData();
  }, []);

  const handleInputSearch = (e) => {
    e.preventDefault();
    setIsSearching(e.target[0].value);
    const filteredData = state?.filter((item) =>
      item?.title?.includes(e.target[0].value)
    );
    setFilteredData(filteredData);
  };

  const handleInput = (e) => {
    if (e.target.value.length === 0) setIsSearching('');
  };

  const handleRowsPerPage = (e) => {
    const number = parseInt(e.target.value);
    setRowsPerPage(number);
    setPageCount(number);
  };

  const handlePagination = (type) => {
    if (type === 'PREV') {
      pageCount !== rowsPerPage && setPageCount((prev) => prev - rowsPerPage);
    } else {
      if (isSearching) {
        pageCount < filteredData?.length &&
          setPageCount((prev) => prev + rowsPerPage);
      } else {
        pageCount < state?.length && setPageCount((prev) => prev + rowsPerPage);
      }
    }
  };

  const TableBody = ({ data }) => {
    return (
      <tbody>
        {data?.slice(pageCount - rowsPerPage, pageCount)?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
              <td>{item?.body}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="App">
      <h2>Sample Table</h2>
      {/* <input onChange={handleInputSearch} className="search" /> */}
      <form onSubmit={handleInputSearch}>
        <input
          name="search"
          placeholder="Type a keyword"
          onChange={handleInput}
        />
        <input value="Search" type="submit" />
      </form>
      <table className="tableComp">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <TableBody data={isSearching ? filteredData : state} />
      </table>
      <div className="pagination">
        <div>
          <select value={rowsPerPage} onChange={handleRowsPerPage}>
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
          &nbsp;
          <label>rows per page</label>
        </div>
        <div>
          <button onClick={() => handlePagination('PREV')}>&lt; Prev</button>
          &nbsp;
          <button onClick={() => handlePagination('NEXT')}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
}
