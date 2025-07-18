import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux"; // useDispatch để lấy ra được dispatch, useSelector: lấy dữ liệu ở trong cái kho chung để hiển thị trong UI
// import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid"; //tự động ren ra id ngẫu nhiên và duy nhất
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todosSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState(""); // tạo ra state để lưu trữ được thông tin hiện tại -> để lấy ra được
  const [priority, setPriority] = useState("Medium");

  // Ở trong component của react để có thể lấy được dữ liệu ở store thì dùng useSelector react hook của react-redux
  const todoList = useSelector(todosRemainingSelector); //useSelector sẽ nhận vào 1 selector func dùng để lấy ra dữ liệu trong store
  // (state) => state.todoList: Nên viết 1 func selector riêng để tránh lặp code

  // tạo, lấy ra func dispatch:
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    // sử dụng 1 function dispatch() để bắn đi 1 cái action
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(), // uuidv4 tự tạo giá trị cho id duy nhất
        name: todoName,
        priority: priority,
        completed: false, // trạng thái chưa hoàn thành
      })
    );

    // reset lại mặc định
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value); //e.target.value: lấy giá trị thay đổi trong input
  };

  const handlePriorityChange = (value) => {
    // do sử dụng antd nên value không còn là 1 event object nữa mà trả thẳng giá trị value
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
