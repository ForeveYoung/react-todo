import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className='todoform'>
      <input
        placeholder="Add task..."
        value={input}
        onChange={handleChange}
        name="text"
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default TodoForm;
