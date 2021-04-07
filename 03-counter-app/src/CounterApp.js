import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// use snippet rafcp 

const CounterApp = ({ value = 0 }) => {

    const [count, setCount] = useState(value);

    const handAdd = (e) => {
        setCount(count + 1);
        //setCount((c) => c + 1);
        console.log('event click', count);
    }

    const handReset = (e) => {
        setCount(value);
        console.log('event click', count);
    }

    const handSubtract = (e) => {
        setCount(count - 1);
        console.log('event click', count);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{ count }</h2>

            {/* <button onClick={(e) => {
                console.log('event click');
                value++;
                console.log(value);
            }}>+1</button>   */}

            <button onClick={ handAdd }>+1</button>
            <button onClick={ handReset }>Reset</button>
            <button onClick={ handSubtract }>-1</button>
        </Fragment>
    );
}
 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;