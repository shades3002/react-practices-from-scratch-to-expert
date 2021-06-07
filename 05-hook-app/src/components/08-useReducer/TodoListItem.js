import React from 'react'

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li
            className="list-group-item w-100"
        > 
            <p 
                className={ `w-50 ${ todo.done && 'complete' }`}
                onClick={ () => handleToggle( todo.id ) }
            >
                { index + 1}. { todo.desc } 
            </p>
            <div className="d-grid gap-2 d-md-flex w-50 justify-content-md-start">
                <button
                    className="btn btn-danger ms-2"
                    onClick={ () => handleDelete(todo.id) }
                >
                    Delete
                </button>
            </div>
        </li> 
    )
}
