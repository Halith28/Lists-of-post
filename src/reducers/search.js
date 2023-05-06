const initState = {
  searchedValue: '',
};
const search = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchedValue: action?.payload,
      };
    default:
      return state;
  }
};

export default search;
