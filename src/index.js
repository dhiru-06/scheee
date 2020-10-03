import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import './style.css'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('root')
)
