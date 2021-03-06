import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import style from './css.scss';
import styles from './ww.scss';
export const config = { amp: 'hybrid' };

import { useAmp } from 'next/amp';
// import { useRouter } from "next/router";

const Home = (props: any) => {
    const classnames = 'home_';
    const { countState, userState } = useSelector((state: { countState: any; userState: any }) => state);

    const [userid, setUserid] = React.useState('');

    const { action } = props;

    const fetchUser = () => {
        console.log('USER : ', userid);
        action('FETCH_USER', { userID: userid });
    };

    return (
        <div className={classNames(style[classnames])}>
            <Head>
                <title>首頁</title>
            </Head>
            <div className={style.title}>首頁{countState.count}</div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.INCREMENT)}>
                    +1
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.DECREMENT)}>
                    -1
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.RESET)}>
                    Reset
                </button>
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.TIME_ASYNC)}>
                    Time Async
                </button>
            </div>
            <div className={style.input}>
                <input type="text" onChange={e => setUserid(e.target.value)} />
                <button onClick={() => fetchUser()}>送出</button>
            </div>
            {userState.userData ? (
                <div className={style.userinfo}>
                    {userState.userData.name || userState.userData.login}
                    <div>{userState.userData.id}</div>
                    <div>
                        <a href={userState.userData.url}>{userState.userData.url}</a>
                    </div>
                </div>
            ) : null}
            <div className={styles.ww} />
            {useAmp() && <img width="300" height="300" src="/S.png" alt="a cool image" />}
        </div>
    );
};

export default Home;
