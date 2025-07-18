// // tạo 1 kho chứa store
// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension"; //cấu hình devtools để debug, xem dữ liệu store

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);
// /** createStore nhận vào 3 tham số:
//  * rootReducer: là 1 function dùng để cập nhập lại các cái giá trị state ở trong cái kho chung này dựa trên action hiện tại
//  * initValue: có nghĩa là khi tạo ra cái kho này mà muốn xét một số các giá trị mặc định nào đó thì truyền vào tham số thứ 2
//  * enhancers: dùng để cấu hình được các meddleware
//  *
//  */
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
}); // tham số là 1 object
//  khi khai báo configureStore bằng redux toolkit thì không cần phải sử dụng combineReducers trong redux
//  không cần phải thêm 1 meddleware composedEnhancers mà tự động thêm vào

export default store;
