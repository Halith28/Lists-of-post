const initState = {
  fetchedData: [],
  filteredData: [],
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
    default:
      return state;
  }
};

export default table;
