// const initState = {
//   //giá trị mặc định
//   filters: {
//     //có 3 phần
//     search: "", // các giá trị mặc định
//     status: "All", // lưu lại cái trạng thái lựa chọn
//     priority: [], // độ ưu tiên
//   },
//   todoList: [
//     //Mỗi thành phần tượng trưng cho một cái việc cần làm và mỗi việc này cần lưu: tên việc cần làm, dộ ưu tiên, trạng thái hoàn thành hay chưa
//     { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//     { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   /** rootReducer có 2 tham số:
//    * state: truyền cho nó 1 giá trị mặc định initstate
//    * action
//    */
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload],
//       };

//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         filters: { ...state.filters, search: action.payload },
//       };

//     default:
//       return state;
//   }
// };

import { combineReducers } from "redux"; //là func do redux cung cấp để combine(kết hợp) các reducer này lại
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";

// const rootReducer = (state = {}, action) => {
//   // tính năng split reducer
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

// sau khi combineReducers thực hiện xong thì nó trả ra 1 func y hệt như này:
// (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
