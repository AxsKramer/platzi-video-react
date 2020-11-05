import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDom.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('app')
);
