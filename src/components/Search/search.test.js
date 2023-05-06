import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from '.';

const mockStore = configureStore();

describe('Search', () => {
  let store;
  const WrapperComponent = (props) => (
    <Provider store={store}>
      <Search />
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
    const searchInput = screen.queryByTestId('search-input');
    expect(searchInput).toBeDefined();
  });
  it('should input have initial value2', () => {
    render(<WrapperComponent />);
    const searchInput = screen.queryByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'search a title' } });
    expect(searchInput.value).toBe('search a title');
  });
});
