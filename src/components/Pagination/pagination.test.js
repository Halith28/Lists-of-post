import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { render, screen, fireEvent } from '@testing-library/react';
// import { shallow, configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Pagination from '.';

// configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe('Pagination', () => {
  // const initialState = { fetchedData: 10 };
  // const mockStore = configureStore();
  // let store;
  // store = mockStore(initialState);
  // const component = shallow(
  //   <Provider store={store}>
  //     <Pagination />
  //   </Provider>
  // );
  let store;
  const WrapperComponent = (props) => (
    <Provider store={store}>
      <Pagination />
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
  it('should render rows per page label', () => {
    render(<WrapperComponent />);
    const rowsPerPageLabel = screen.getByText('rows per page').textContent;
    expect(rowsPerPageLabel).toBe('rows per page');
  });
  it('select element should have initial value', () => {
    render(<WrapperComponent />);
    const selectBox = screen.getByTestId('select-box');
    expect(selectBox.value).toBe('10');
  });
  it('select element should change value', () => {
    render(<WrapperComponent />);
    const selectBox = screen.getByTestId('select-box');
    fireEvent.change(selectBox, { target: { value: '5' } });
    let options = screen.getAllByTestId('select-option');
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
  it('should `prev-button` as enabled when `next-button` clicked', () => {
    render(<WrapperComponent />);
    fireEvent.click(screen.getByTestId('next-button'));
    expect(screen.queryByTestId('prev-button').disabled).toBeFalsy();
  });
});
