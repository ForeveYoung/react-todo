import React from "react";

const Todo = ({
  items,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue
}) => {
  return items.map((todo) => (
    <div>
      {editId === todo.id ? (
        <div className='item'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
          <button onClick={() => editTodo(todo.id, inputValue)}>Submit</button>
        </div>
      ) : (
        <div className='item'>
        <button className='delete-btn' onClick={() => removeTodo(todo.id)}> X </button>
        <button className='edit-btn' onClick={() => handleEditChange(todo.id, todo.text)}> Edit </button>
        <div className='todo-element'  key={todo.id}>
          {todo.text} 
        </div>
         </div>
      )}
    </div>
  ));
};

export default Todo;
