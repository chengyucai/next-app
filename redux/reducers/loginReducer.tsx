import actionTypes from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    logState: false,
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.LOGIN_OK:
            return {
                ...state,
                ...{ logState: true },
            };
        case actionTypes.LOGOUT_OK:
            return {
                ...state,
                ...{ logState: false },
            };
        default:
            return state;
    }
};

export default reducer;
