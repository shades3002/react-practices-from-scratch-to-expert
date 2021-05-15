import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log(' change email ');
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    };

    return (
        <form onSubmit={ handleSubmit } >
            <h1>FormWithCustomHook</h1>
            <hr />


            <div className="form-group mb-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="you email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mb-2">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    )
}
