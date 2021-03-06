import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import style from '../css.scss';
import { useRouter } from 'next/router';

const Module = () => {
    const classnames = '##_####';
    const router = useRouter();

    return (
        <div className={cx(style[classnames])}>
            <Head>
                <title>{router.query.index}頁</title>
            </Head>

            <div className={style.title}>{router.query.index}頁</div>
        </div>
    );
};

export default Module;
