import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middleWare = [
    thunk, 
    createLogger()
];

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middleWare)
    );
}