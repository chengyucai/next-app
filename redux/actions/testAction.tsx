import actionTypes from '@constants/actionType';

interface ISetTitle {
    title: string;
}
export function setTitle(payload: ISetTitle) {
    return { type: actionTypes.SET_TITLE, payload: payload };
}
