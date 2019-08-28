import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import actionTypes from '@constants/actionType';
import './css.scss';
// import { useRouter } from "next/router";

const Home = (props: any) => {
    const classnames = 'home_';
    const { count } = useSelector((state: { countState: any }) => state.countState);

    const { action } = props;

    return (
        <div className={classNames(classnames)}>
            <Head>
                <title>首頁</title>
            </Head>
            <div className="title">首頁{count}</div>
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
                <button style={{ padding: '5px', margin: '5px' }} onClick={() => action(actionTypes.INCREMENT_ASYNC)}>
                    +1 Async
                </button>
            </div>
        </div>
    );
};

export default Home;
