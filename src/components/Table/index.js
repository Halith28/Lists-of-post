import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = (props) => {
  return (
    <table className="tableComp" data-testid="table-comp">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
