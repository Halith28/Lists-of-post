const initState = {
  pageCount: 10,
  rowsPerPage: 10,
};
const pagination = (state = initState, action) => {
  switch (action.type) {
    case 'PREV':
      return {
        ...state,
        pageCount: state?.pageCount - state?.rowsPerPage,
      };
    case 'NEXT':
      return {
        ...state,
        pageCount: state?.pageCount + state?.rowsPerPage,
      };
    case 'ROWS_PER_PAGE':
      return {
        ...state,
        rowsPerPage: action?.payload,
      };
    case 'SET_PAGE_COUNT':
      return {
        ...state,
        pageCount: action?.payload,
      };
    default:
      return state;
  }
};

export default pagination;
