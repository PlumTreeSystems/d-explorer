import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

console.log(process.env.NODE_ENV);

const middleWare = [
    thunk
];

if (process.env.NODE_ENV === 'development') {
    middleWare.push(createLogger())
}

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middleWare)
    );
}