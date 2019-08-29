import { combineReducers } from 'redux';

import countReducer, { initialState as countReducerInitialState } from './countReducer';
import testReducer, { initialState as testReducerInitialState } from './testReducer';
import userReducer, { initialState as userReducerInitialState } from './userReducer';

export const initialState = {
    countState: countReducerInitialState,
    testState: testReducerInitialState,
    userState: userReducerInitialState,
};

export default combineReducers({
    countState: countReducer,
    testState: testReducer,
    userState: userReducer,
});
