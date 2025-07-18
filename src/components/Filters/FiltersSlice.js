// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   /** rootReducer có 2 tham số:
//    * state: truyền cho nó 1 giá trị mặc định initstate
//    * action
//    */
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    // => không cần phải khai báo 1 action riêng ra nữa -> createSlice tự động tạo action
    // có thể viết code mutation nghĩa là thao tác trực tiếp lên trên 1 object hay array nhưng nó hoạt động code như 1 unmutation vì redux toolkit đã cài đặt sẵn IMMER
    searchFilterChange: (state, action) => {
      // mutation || IMMER
      state.search = action.payload;
    }, // đối với 1 thuộc tính trong reducer nó sẽ tạo ra 1 action creators với type = name<filters>/key<searchFilterChange>
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    }, // type: filters/statusFilterChange
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
}); //filtersSlice: khái niệm quy định trong redux-toolkit
