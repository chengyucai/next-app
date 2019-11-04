import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import * as style from './css.scss';

const About = () => {
    const classnames = 'contactUs_';

    return (
        <div className={style[classnames]}>
            <Head>
                <title>聯絡我們頁</title>
            </Head>
            <div className={style.title}>聯絡我們頁</div>
        </div>
    );
};

export default About;
