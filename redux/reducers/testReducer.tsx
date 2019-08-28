import actionTypes from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    title: '',
};

function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case actionTypes.SET_TITLE:
            return {
                ...state,
                ...{ title: action.payload.title },
            };
        default:
            return state;
    }
}

export default reducer;
