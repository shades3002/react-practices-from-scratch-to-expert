import React, { useMemo, useState } from 'react';
import { processHeavy } from '../../helpers/processHeavy';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoProcessHeavy = useMemo(() => processHeavy(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h2>Counter: <small>{ counter }</small> </h2>
            <hr />
            
            <p>{ memoProcessHeavy }</p>

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
