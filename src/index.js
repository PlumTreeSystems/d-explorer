import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store.js';
import setSourcesAction from './actions/setSourcesAction';

const paths = {
    sourceUrl: document.getElementById('rootExplorer').getAttribute('data-source'),
    detailsUrl: document.getElementById('rootExplorer').getAttribute('data-details')
};

const store = configureStore();

store.dispatch(setSourcesAction(paths));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('rootExplorer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
