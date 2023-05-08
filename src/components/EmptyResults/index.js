import React from 'react';
import { useSelector } from 'react-redux';

export const EmptyResults = () => {
  const { table, search } = useSelector((state) => state);
  const { filteredData } = table;
  const { searchedValue } = search;
  if (searchedValue && filteredData?.length === 0)
    return <h5 className="empty-results">No Matchings Found</h5>;
  else return null;
};

export default EmptyResults;
