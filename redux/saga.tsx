/* global fetch */
import { takeEvery, takeLatest, put, call, delay } from "redux-saga/effects";
import es6promise from "es6-promise";

import actionTypes from "@constants/actionType";

// import "isomorphic-unfetch";

es6promise.polyfill();

function* incrementAsync(action: any): any {
  console.log(action);
  const time = Date.now();
  console.log(time);
  yield delay(2000);
  yield put({ type: actionTypes.INCREMENT, payload: { time: time } });
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync);
}
