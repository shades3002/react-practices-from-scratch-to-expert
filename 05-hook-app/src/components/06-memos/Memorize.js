import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />
            <h1>Counter: <Small value={ counter } /> </h1>

            <button
                className="btn btn-primary me-3"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary me-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
            
        </div>
    )
}
