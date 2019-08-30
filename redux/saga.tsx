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

function* login(payload: { userID: string; userPass: string }): any {
    const { userID, userPass } = payload;
    // console.log('ID', userID, 'Pass', userPass);
    const userJson = yield fetch(`http://${window.location.host}/api/users`)
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

    const user = userJson.data.find(function(user: any) {
        return user.userID === userID;
    });

    yield delay(1000);
    // console.log(user);
    if (user !== undefined && user.userPass === userPass) {
        yield put({ type: actionTypes.LOGIN_OK });
    } else {
        yield put({ type: actionTypes.LOGOUT_OK });
    }
}

export default function* rootSaga() {
    yield takeLatest('FETCH_USER', getUserAsync);
    yield takeEvery(actionTypes.TIME, incrementAsync);
    while (true) {
        const { payload } = yield take(actionTypes.LOGIN);
        yield call(login, payload);

        // yield take(actionTypes.LOGOUT_OK);
        // console.log('OK');
        // yield cancel(infinityTask);
    }
}
