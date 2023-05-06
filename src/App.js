import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/Search';

export default function App() {
  const dispatch = useDispatch();

  function getData() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        dispatch({ type: 'FETCH_DATA', payload: res?.data });
      })
      .catch((err) => console.log('eer', err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h2>Sample Table</h2>
      <Search />
      <Table />
      <Pagination />
    </div>
  );
}
