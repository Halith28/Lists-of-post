import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = (props) => {
  const { state, filteredData, isSearching, pageCount, rowsPerPage } = props;
  return (
    <table className="tableComp" data-testid="table-comp">
      <TableHead />
      <TableBody
        data={isSearching ? filteredData : state}
        pageCount={pageCount}
        rowsPerPage={rowsPerPage}
      />
    </table>
  );
};

export default Table;
