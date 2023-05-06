import React from 'react';
import { useSelector } from 'react-redux';

const TableBody = () => {
  const { table, pagination, search } = useSelector((state) => state);
  const { pageCount, rowsPerPage } = pagination;
  const { fetchedData, filteredData } = table;
  const { searchedValue } = search;
  const data = searchedValue ? filteredData : fetchedData;
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

export default TableBody;
