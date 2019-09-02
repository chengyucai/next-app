const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    TIME_ASYNC: 'TIME_ASYNC',
    TIME: 'TIME',
    SET_TITLE: 'SET_TITLE',
    SET_USER: 'SET_USER',
    START_INFINITY: 'START_INFINITY',
    STOP_INFINITY: 'STOP_INFINITY',

    LOGOUT_OK: 'LOGOUT_OK',
    LOGIN_OK: 'LOGIN_OK',
    LOGIN: 'LOGIN',
    LOGIN_ALERT: 'LOGIN_ALERT',
    SET_USER_DATA: 'SET_USER_DATA',
};

export enum alert_list {
    Login = '登入成功',
    Logout = '登出成功',
    Login_fail = '登入失敗',
}

export default actionTypes;
