import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import './App.css';

function TodoList() {
  const [items, setTodos] = useState([]);
  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };
  const addTodo = (todo) => {
    if (!todo.text || '' ) {
      return;
    }

    const newTodos = [todo, ...items];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...items].filter((todoId) => todoId.id !== id);

    setTodos(removedArr);
  };

  const editTodo = (id, text, todo) => {
    let editTodos = items.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  };

  return (
    <div className='todo-list'>
      <div className='header'>
      <h1 className='header'>ToDo List</h1>
      </div>
      <TodoForm
        onSubmit={addTodo} />
        <div className='items'>
            <Todo
        items={items}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleEditChange={handleEditChange}
        editId={editId}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
        </div>
    
    </div>
  );
}

export default TodoList;
