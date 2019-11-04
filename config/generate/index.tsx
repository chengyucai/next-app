import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';
import style from '../css.scss';

const MyApp = () => {
    const classnames = '##_####';

    return (
        <div className={cx(style[classnames])}>
            <Head>
                <title>##_####</title>
            </Head>
            <div className={style.title}>##_####</div>
        </div>
    );
};

export default MyApp;
