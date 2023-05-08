import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/Search';
import ErrorComp from './components/ErrorComp';
import EmptyResults from './components/EmptyResults';

export default function App() {
  const dispatch = useDispatch();
  const { fetchedData, error } = useSelector((state) => state?.table);

  // axios is used to get the data from the API to render Table with data
  function getData() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        dispatch({ type: 'FETCH_DATA', payload: res?.data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error });
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h2>React Table</h2>
      {fetchedData.length > 0 ? (
        <>
          {/* Search component is used to filter the lists of posts */}
          <Search fetchedData={fetchedData} />
          {/* Table component is used to display the lists of posts */}
          <Table />
          {/* EmptyResults component is used to handle empty results when filtering */}
          <EmptyResults />
          {/* Pagination component is used to handle the page views */}
          <Pagination />
        </>
      ) : (
        <>
          {/* ErrorComp is used to handle errors when fetching API */}
          <ErrorComp errorMessage={error?.message} />
        </>
      )}
    </div>
  );
}
