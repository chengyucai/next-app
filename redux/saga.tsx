/* global fetch */
import { takeEvery, takeLatest, take, put, call, delay } from 'redux-saga/effects';
import es6promise from 'es6-promise';

import actionTypes from '@constants/actionType';

// import "isomorphic-unfetch";

es6promise.polyfill();

function* incrementAsync(action: any): any {
    console.log(action);
    const time = Date.now();
    console.log(time);
    yield delay(2000);
    yield put({ type: actionTypes.INCREMENT, payload: { time: time } });
}

function* getUserAsync(action: any): any {
    console.log(action);
    const userid = action.payload.userID;
    const userJson = yield fetch(`https://api.github.com/users/${userid}`)
        .then(res => {
            if (res.status !== 200) throw res;
            return res.json();
        })
        .catch(err => {
            return {
                status: err.status,
                statusText: err.statusText,
            };
        });
    // yield delay(5000);
    if (userJson.status) {
        console.error('Fetch Failed');
        yield put({ type: actionTypes.SET_USER, payload: { userData: null } });
    } else yield put({ type: actionTypes.SET_USER, payload: { userData: userJson } });
}

export default function* rootSaga() {
    yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
    yield takeLatest('FETCH_USER', getUserAsync);
}
