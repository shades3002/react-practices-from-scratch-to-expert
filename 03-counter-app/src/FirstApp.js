import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// const FirstApp = ( props ) => {  console.log(props.hi) }
// Funtional Component
const FirstApp = ( { hi = 'hi', subtitle } ) => {

    const hello = 'Hello World';
    const objHello = {
        name: 'Carlos',
        color: 'Blue'
    }

    console.log(hi);

    // return (
    //     <div>
    //         <h1>Hello World</h1>
    //         <p>My first application</p>
    //     </div>
    // );

    return (
        <Fragment>
            <h1> { hello } </h1>
            <pre>{ JSON.stringify(objHello, null, 3) }</pre>
            <h6> { [1, 6, 9, 10] } </h6>
            {/* <h5> { 5 + 6 } </h5> */}
            <p>My first application</p>
            <p>{ hi }</p>
            <p>{ subtitle }</p>
        </Fragment>
    );

    // short Fragment
    // return (
    //     <>
    //         <h1>Hello World</h1>
    //         <p>My first application</p>
    //     </>
    // );
}

FirstApp.propTypes = {
    hi: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'I am subtitle'
}

export default FirstApp;