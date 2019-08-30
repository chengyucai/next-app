import * as React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import Bt_bsic, { Mode as Bt_Mode } from '@components/bt_bsic';
// import Ic_xicn from '@components/ic_xicn';
import '../css.scss';

interface hd_test_props {
    class?: string;
    children?: any;
    action?: any;
}

const Module: React.FC<hd_test_props> = props => {
    const classname = 'hd_test';
    const { children, action } = props;
    const { loginState } = useSelector((state: { loginState: any }) => state);

    console.log(loginState.logState);

    const login_props = {
        word: 'Login',
        mode: Bt_Mode.Contained,
        style: { backgroundColor: '#6200ee' },
        onClick: () => {
            console.log('Log in');
            action(actionTypes.LOGIN_OK);
        },
    };

    const logout_props = {
        word: 'Logout',
        mode: Bt_Mode.Outlined,
        style: { color: '#6200ee', borderColor: '#6200ee' },
        onClick: () => {
            console.log('Logout');
            action(actionTypes.LOGOUT_OK);
        },
    };

    return (
        <div className={cx(classname)}>
            <div>{children}</div>
            <div className={cx('icon', { none: !loginState.logState })}>😎</div>

            {loginState.logState ? <Bt_bsic {...logout_props} /> : <Bt_bsic {...login_props} />}
        </div>
    );
};
export default Module;
