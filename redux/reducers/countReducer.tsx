import actionTypes from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    count: 0,
};

function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                ...{ count: state.count + 1 },
            };

        case actionTypes.TIME_ASYNC:
            const time = action.payload.time ? action.payload.time : Date.now();
            return {
                ...state,
                ...{ count: time },
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                ...{ count: state.count - 1 },
            };

        case actionTypes.RESET:
            return {
                ...state,
                ...{ count: initialState.count },
            };

        default:
            return state;
    }
}

export default reducer;
