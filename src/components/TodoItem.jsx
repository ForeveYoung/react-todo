import React from "react";

function TodoItem({ id, item, onRemove, onEdit}) {

    return (
        <li>
            <button className='delete-btn' onClick={() => {onRemove(id)}}>Delete</button>
            <span title='Click to edit task' className='item-span'  onClick={() => {onEdit(item)}}>{item}</span>
             
        </li>
    )
}

export default TodoItem;