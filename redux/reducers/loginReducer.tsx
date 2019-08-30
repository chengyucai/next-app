import actionTypes from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    logState: actionTypes.LOGOUT_OK,
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.LOGIN_OK:
            return {
                ...state,
                ...{ logState: actionTypes.LOGIN_OK },
            };
        case actionTypes.LOGIN:
            return {
                ...state,
                ...{ logState: actionTypes.LOGIN },
            };
        case actionTypes.LOGOUT_OK:
            return {
                ...state,
                ...{ logState: actionTypes.LOGOUT_OK },
            };
        default:
            return state;
    }
};

export default reducer;
