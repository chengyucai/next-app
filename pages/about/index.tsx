import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import './css.scss';

const MyApp = () => {
    const classnames = 'about_';

    return (
        <div className={classNames(classnames)}>
            <Head>
                <title>關於我們</title>
            </Head>
            <div className="title">關於我們</div>
        </div>
    );
};

export default MyApp;
