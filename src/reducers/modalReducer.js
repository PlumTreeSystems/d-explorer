import openModalAction from '../actions/Modal/openModalAction';
import closeModalAction from '../actions/Modal/closeModalAction';

const defaultState = {
    open: false,
    content: {
        enrolleeId: ''
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {   
        case openModalAction(state).type:
            {
                const data = {
                    open: true,
                    content: {
                        ...action.data
                    }
                };

                return {...state, ...data};
            }            
        case closeModalAction(state).type:
            {
                const data = {
                    open: false,
                    content: {
                        enrolleeId: ''
                    }
                };

                return {...state, ...data};
            }
        default:
            return state
    }
}
