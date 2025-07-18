// //Action
// export const addTodoAction = {  //nó là 1 object có 2 field:
//   type: 'todoList/addTodo',  // là 1 đoạn text để mô tả hành động này là gì: tính năng/hành động
//   payload: {}  //truyền thông tin người dùng nhập trên UI
// };

//Action creators: là 1 function dùng để trả về 1 cái action => nên sử dụng để tránh lặp, dễ mở rộng, tái sử dụng
export const addTodo = (data) => {
  //data: đây chính là dữ liệu của việc cần làm hiện tại
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
