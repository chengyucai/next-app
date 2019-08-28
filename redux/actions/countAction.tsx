import actionTypes from '@constants/actionType';

export function increment() {
    return { type: actionTypes.INCREMENT };
}

export function decrement() {
    return { type: actionTypes.DECREMENT };
}

export function reset() {
    return { type: actionTypes.RESET };
}
