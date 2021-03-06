import * as React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import Bt_bsic, { Mode as Bt_Mode } from '@components/bt_bsic';
// import Ic_xicn from '@components/ic_xicn';
import style from '../css.scss';

interface hd_test_props {
    class?: string;
    children?: any;
    action?: any;
}

const Module: React.FC<hd_test_props> = props => {
    const classname = 'hd_test';
    const { children, action } = props;
    const { loginState } = useSelector((state: { loginState: any }) => state);
    const [logPage, setlogPage] = React.useState(false);
    const UserName: any = React.useRef('');
    const UserPass: any = React.useRef('');
    // console.log('logState', loginState.logState);
    // console.log('alert', loginState.alert);

    const login_props = {
        word: 'Login',
        icon: '➤',
        mode: Bt_Mode.Contained,
        style: { backgroundColor: '#6200ee' },
        onClick: () => {
            // action(actionTypes.LOGIN_OK);
            setlogPage(true);
        },
    };

    const logout_props = {
        word: 'Logout',
        mode: Bt_Mode.Outlined,
        style: { color: '#6200ee', borderColor: '#6200ee' },
        onClick: () => {
            action(actionTypes.LOGOUT_OK, { alert: '成功登出' });
        },
    };

    const submit_props = {
        word: 'Submit',
        mode: Bt_Mode.Contained,
        style: { backgroundColor: '#52804e' },
        onClick: () => {
            action(actionTypes.LOGIN, { userID: UserName.current.value, userPass: UserPass.current.value });
        },
    };

    return (
        <div className={cx(style[classname])}>
            <div>{children}</div>
            <div className={cx(style.icon, { [style.none]: !(loginState.logState === actionTypes.LOGIN_OK) })}>
                😎{loginState.data && loginState.data.name}
            </div>
            {loginState.logState === actionTypes.LOGIN_OK ? (
                <Bt_bsic {...logout_props} />
            ) : (
                <Bt_bsic {...login_props} />
            )}
            <div
                className={cx(style.login_page, {
                    [style.none]: !logPage || loginState.logState === actionTypes.LOGIN_OK,
                })}
                onMouseDown={(e: any) => {
                    e.target.className === 'login_page' && setlogPage(false);
                }}
            >
                <div>
                    <span>UserName:</span>
                    <input type="text" name="name" ref={UserName} />
                    <span>UserPass:</span>
                    <input type="password" name="pass" ref={UserPass} />
                    <Bt_bsic {...submit_props} />
                </div>
            </div>
            <div className={cx(style.wait_page, { [style.none]: !(loginState.logState === actionTypes.LOGIN) })} />
            <div
                className={cx(style.alert_tool, { [style.none]: !loginState.alert })}
                key={`alert_tool_${loginState.alert}`}
            >
                <span>{loginState.alert}</span>
            </div>
        </div>
    );
};
export default Module;
