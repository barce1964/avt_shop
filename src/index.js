import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route} from 'react-router';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import createRootReducer from 'reducers';
import Layout from './node_modules/containers/layouts/';
import Phones from './node_modules/containers/phones';
import reducers from 'reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)