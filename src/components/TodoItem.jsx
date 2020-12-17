import React from "react";

function TodoItem({ id, item, onRemove, onEdit}) {

    return (
        <li>
            <button className='delete-btn' onClick={() => {onRemove(id)}}>X</button>
            <button className='edit-btn' onClick={() => {onEdit(item, id)}}>Edit</button>
           {item}
             
        </li>
    )
}

export default TodoItem;