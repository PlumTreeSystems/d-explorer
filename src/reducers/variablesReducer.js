import setLoadingAction from '../actions/Loading/setLoadingAction';
import setLoadedAction from '../actions/Loading/setLoadedAction';
import setSourcesAction from '../actions/setSourcesAction';

const defaultState = {
    maxColumnSize: 5,
    loading: false,
    sourceUrl: '',
    detailsUrl: '',
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
        default:
            return state;
    }
}
