import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);

    const handleDelete = ( id ) => {

        const deleteTodoAction = {
            type: 'delete',
            payload: id
        };

        dispatch( deleteTodoAction );
    }

    const handleToggle = ( id ) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    const handleAddTodo = ( todo ) => {
        dispatch( {
            type: 'add',
            payload: todo
        });
    };

    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos= { todos }
                        handleDelete= { handleDelete } 
                        handleToggle= { handleToggle } 
                    />
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    )
}
