/* global fetch */
import { takeEvery, takeLatest, put, call, delay, take, fork, cancel } from 'redux-saga/effects';
import es6promise from 'es6-promise';

import actionTypes from '@constants/actionType';

// import "isomorphic-unfetch";

es6promise.polyfill();

function* incrementAsync(action: any): any {
    console.log(action);
    const time = Date.now();
    console.log(time);
    yield delay(2000);
    yield put({ type: actionTypes.TIME_ASYNC, payload: { time: time } });
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

function* infinityAdd(): any {
    let a = 0;
    while (a < 20) {
        yield delay(100);
        yield put({ type: actionTypes.INCREMENT });
        a++;
    }
}

export default function* rootSaga() {
    yield takeLatest('FETCH_USER', getUserAsync);
    yield takeEvery(actionTypes.TIME, incrementAsync);
    while (true) {
        yield take(actionTypes.START_INFINITY);
        const infinityTask = yield call(infinityAdd);

        // yield take(actionTypes.STOP_INFINITY);
        // console.log(345);
        // yield cancel(infinityTask);
    }
}
