import React from 'react';
import ReactDOM from 'react-dom';

// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render( <FirstApp hi="Hi" />, divRoot);

// ReactDOM.render( <CounterApp value={ 122 } />, divRoot)

ReactDOM.render( <CounterApp />, divRoot)
