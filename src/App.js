import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './features/todos/todosSlice';
import ToDoList from './components/ToDoList';
import NewToDo from './components/AddNewToDo';

export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleAddTodo = (task) => {
    dispatch(addTodo(task));
  };

  return (
      <div className="wrapper">
        <h3>List</h3>
        <ToDoList todos={todos} toggleTodo={handleToggle} />
        <NewToDo addTodo={handleAddTodo} />
      </div>
  );
}
