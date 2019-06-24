import setLoadingAction from '../actions/Loading/setLoadingAction';
import setLoadedAction from '../actions/Loading/setLoadedAction';
import setSourcesAction from '../actions/setSourcesAction';
import addLevelWidth from '../actions/addLevelWidth';
import setFocus from '../actions/setFocus';

const defaultState = {
    visibleIndex: 0,
    maxColumnSize: 5,
    loading: false,
    sourceUrl: '',
    detailsUrl: '',
    focusNode: 1,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case setLoadingAction(state).type:
            {
                return {...state, ...action.data};
            }
        case setLoadedAction(state).type:
            {
                return {...state, ...action.data};
            }
        case setSourcesAction(state).type:
            {
                return {...state, ...action.data};
            }
        case addLevelWidth(state).type:
            {
                return {...state, maxColumnSize: action.levelWidth};
            }
        case setFocus(state).type:
            {
                return {...state, focusNode: action.id};
            }
        default:
            return state;
    }
}
