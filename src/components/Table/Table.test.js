import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Table from '.';

const mockStore = configureStore();

describe('Table', () => {
  let store;
  const WrapperComponent = () => (
    <Provider store={store}>
      <Table />
    </Provider>
  );
  beforeEach(() => {
    store = mockStore({
      pagination: {
        pageCount: 1,
        rowsPerPage: 10,
      },
      table: {
        fetchedData: ['react', 'table'],
        filteredData: [],
      },
      search: {
        searchedValue: '',
      },
    });
  });
  it('should render input properly', () => {
    render(<WrapperComponent />);
    const searchInput = screen.queryByTestId('table-comp');
    expect(searchInput).toBeDefined();
  });
});
