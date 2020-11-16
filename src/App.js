import React, { useRef, useState } from 'react';
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState(false);
    const inp = useRef('');

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

    function yi(){
     setEdit(true) 
      
            
    }

    function yyy(index) {

        setEdit(false)

        console.log(inp.current.value)
    //    items[0]= inp.current.value

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
              edit ? 
              <div> 
                <input 
                type='text'
                defaultValue={item}
                ref={inp}
                /> 
                <button type='submit'
                onClick={yyy}>OK</button>
        </div>
              :                 
                <TodoItem
              key={index}
              id={index}
              item={item}
              onRemove={removeItem}
              onEdit={yi}
          />
        )) }

            </ul>
          </div>
      </div>
    );
}

export default App;


