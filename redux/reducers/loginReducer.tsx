import actionTypes, { alert_list } from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

interface Props_initialState {
    logState: string;
    alert: string | undefined;
    data: any;
}

export const initialState: Props_initialState = {
    logState: actionTypes.LOGOUT_OK,
    alert: undefined,
    data: undefined,
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.LOGIN_OK:
            return {
                ...state,
                ...{ logState: actionTypes.LOGIN_OK, alert: action.payload.alert, data: action.payload.data },
            };
        case actionTypes.LOGIN:
            return {
                ...state,
                ...{ logState: actionTypes.LOGIN, alert: undefined },
            };
        case actionTypes.LOGOUT_OK:
            return {
                ...state,
                ...{ logState: actionTypes.LOGOUT_OK, alert: action.payload.alert, data: undefined },
            };
        case actionTypes.LOGIN_ALERT:
            return {
                ...state,
                ...{ alert: action.payload.alert },
            };
        case actionTypes.SET_USER_DATA:
            return {
                ...state,
                ...{ data: action.payload.data },
            };
        default:
            return state;
    }
};

export default reducer;
