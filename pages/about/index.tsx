import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import * as style from './css.scss';

const MyApp = () => {
    const classnames = 'about_';

    return (
        <div className={style[classnames]}>
            <Head>
                <title>關於我們</title>
            </Head>
            <div className={style.title}>關於我們</div>
        </div>
    );
};

export default MyApp;
