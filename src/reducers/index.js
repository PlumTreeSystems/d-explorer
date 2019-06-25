import { combineReducers } from 'redux';
import nodes from './nodeReducer';
import matrix from './matrixReducer';
import modal from './modalReducer';
import variables from './variablesReducer';

export default combineReducers({
    nodes,
    matrix,
    modal,
    variables,
});