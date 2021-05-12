import React, { useEffect, useState } from 'react'
import './effects.css';


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log( formState );
    }, [] );

    useEffect( () => {
        console.log( "change email" );
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />


            <div className="form-group mb-2">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placerholder="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placerholder="you email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

        </>
    )
}
