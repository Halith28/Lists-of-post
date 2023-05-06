import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();

describe('App', () => {
  let store;
  const WrapperComponent = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  beforeEach(() => {
    store = mockStore({
      pagination: {
        pageCount: 10,
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
  it('should have a header tag with React Table!', function () {
    render(<WrapperComponent />);
    const searchInput = screen.queryByText('React Table');
    expect(searchInput).toBeDefined();
  });
});
