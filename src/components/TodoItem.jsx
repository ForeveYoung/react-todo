import React from "react";

function TodoItem({ id, item, onRemove, onEdit}) {

    return (
        <li>
            <button className='delete-btn' onClick={() => {onRemove(id)}}>Delete</button>
            <button className='delete-btn' onClick={() => {onEdit(item)}}>Edit</button>
            {item} 
        </li>
    )
}

export default TodoItem;