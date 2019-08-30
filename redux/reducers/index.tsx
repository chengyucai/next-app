import { combineReducers } from 'redux';

import countReducer, { initialState as countReducerInitialState } from './countReducer';
import testReducer, { initialState as testReducerInitialState } from './testReducer';
import userReducer, { initialState as userReducerInitialState } from './userReducer';
import loginReducer, { initialState as loginReducerInitialState } from './loginReducer';

export const initialState = {
    countState: countReducerInitialState,
    testState: testReducerInitialState,
    userState: userReducerInitialState,
    loginState: loginReducerInitialState,
};

export default combineReducers({
    countState: countReducer,
    testState: testReducer,
    userState: userReducer,
    loginState: loginReducer,
});
