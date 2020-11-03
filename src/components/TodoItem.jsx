import React from "react";

function TodoItem({ id, item, onRemove}) {
    return (
        <li>
            <button className='delete-btn' onClick={() => {onRemove(id)}}>Delete</button>
            {item} 
        </li>
    )
}

export default TodoItem;