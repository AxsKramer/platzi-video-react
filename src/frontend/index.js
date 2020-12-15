import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router'; 
import reducer from './reducers';
// import initialState from './initialState';

const history = createBrowserHistory();

const preloadedState = window.__PREOLOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, preloadedState, composeEnhancers() );

delete window.__PREOLOADED_STATE__;

ReactDom.hydrate(
    <Provider store={store}>
        <Router history={history}>
            <App />,
        </Router>
    </Provider>, 
    document.getElementById('app')
);
