import { combineReducers } from 'redux';
import nodes from './nodeReducer';
import matrix from './matrixReducer';

export default combineReducers({
    nodes,
    matrix
});