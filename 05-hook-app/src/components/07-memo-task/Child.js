import React from 'react';

export const Child = React.memo(({ number, increment }) => {

    console.log('  yupy  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
});
