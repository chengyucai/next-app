import { combineReducers } from 'redux';

import countReducer, { initialState as countReducerInitialState } from './countReducer';
import testReducer, { initialState as testReducerInitialState } from './testReducer';

export const initialState = {
    countState: countReducerInitialState,
    testState: testReducerInitialState,
};

export default combineReducers({
    countState: countReducer,
    testState: testReducer,
});
