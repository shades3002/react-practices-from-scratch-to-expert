import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './style.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const addTodoAction = {
            type: 'add',
            payload: newTodo
        };

        dispatch( addTodoAction );
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush ">
                        {
                            todos.map( (todo, i)  => (
                                <li
                                    key={ todo.id }
                                    className="list-group-item w-100"
                                > 
                                    <p 
                                        className={ `w-50 ${ todo.done && 'complete' }`}
                                        onClick={ () => handleToggle( todo.id ) }
                                    >
                                        { i + 1}. { todo.desc } 
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
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Todo ..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-outline-primary mt-1 btn-block"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
