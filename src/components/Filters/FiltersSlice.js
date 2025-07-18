const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  /** rootReducer có 2 tham số:
   * state: truyền cho nó 1 giá trị mặc định initstate
   * action
   */
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/prioritiesFilterChange":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
