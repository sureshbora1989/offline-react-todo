import { useState } from "react";

const useTodo = () => {
  const [todoList, setToDoList] = useState([]);

  const addToDoList = ({ toDoItem }) => {
    setToDoList(toDoItem);
  };

  const resetToDoList = () => {
    setToDoList([]);
  };

  return [todoList, addToDoList, resetToDoList];
};

export default useTodo;
