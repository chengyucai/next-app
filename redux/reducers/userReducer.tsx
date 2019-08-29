import actionTypes from '@constants/actionType';
import { IAction } from '@interfaces/IreducerAction';

export const initialState: any = {
    userData: null,
};

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                ...{ userData: action.payload.userData },
            };
        default:
            return state;
    }
};

export default reducer;
