import React, { useState } from 'react';
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        if (input !== ''){
            setItems(prevData => [...prevData, input]
            );
            setInput("");
        }
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => index !== id
            )
        });
    }   

    function editItem(item, id){
       setInput(item)
               setItems(prevData => {
            return prevData.filter((item, index) => index !== id
            )
        });
    }

    return (
      <div className="todolist">
          <div className="header">
              <h1 className="title">To-Do List</h1>
          </div>
              <input
                placeholder="Add task..."
                type="text"
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
              />
              <button onClick={addItem}>Add</button>

          <div className="items">
                <ul>
                     {items.map((item, index) => (               
                <TodoItem
              key={index}
              id={index}
              item={item}
              onRemove={removeItem}
              onEdit={editItem}
              
          />
        )) }

            </ul>
          </div>
      </div>
    );
}

export default App;


