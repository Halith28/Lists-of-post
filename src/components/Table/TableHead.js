import React from 'react';
import { TableHeadElem } from './constants';

const TableHead = () => {
  return (
    <thead>
      <tr>
        {TableHeadElem?.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
