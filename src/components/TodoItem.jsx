import React from "react";

function TodoItem({ id, item, onCheck }) {
    return (
        <li>
            <button className='delete-btn' onClick={() => {onCheck(id)}}>Delete</button>
            {item}  
        </li>
    )
}

export default TodoItem;