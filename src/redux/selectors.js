// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   }); // chỉ trả về nhưng todo nào thỏa mãn điều kiện return true

//   return todosRemaining;
// };

// export const searchTextSelector = (state) => state.filters.search;

// Trong dự án thực tế thì sử dụng reselect -> nó giúp viets lồng các selector trên => để tiện, dễ nhìn
// redux tookit cũng cấp sẵn reselect đó
// yarn add reselect

import { createSelector } from "reselect";
// giải quyết bài toàn có 1 todoListSelector đang dựa vào dữ liệu của searchTextSelector
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
); //gồm tham số là các selector, func callback chưa tham số lần lượt là kết quả trả ra của selector trước đó
