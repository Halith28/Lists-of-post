import { configureStore } from '@reduxjs/toolkit';
import pagination from './pagination';
import search from './search';
import table from './table';

const store = configureStore({
  reducer: { pagination: pagination, table: table, search: search },
});
export default store;
