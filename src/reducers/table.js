const initState = {
  fetchedData: [],
  filteredData: [],
  error: '',
};
const table = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        fetchedData: action?.payload,
      };
    case 'FILTERED_DATA':
      return {
        ...state,
        filteredData: action?.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action?.payload,
      };
    default:
      return state;
  }
};

export default table;
