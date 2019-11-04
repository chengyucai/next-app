import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import * as style from './css.scss';

const About = () => {
    const classnames = 'terms_';

    return (
        <div className={style[classnames]}>
            <Head>
                <title>會員條款頁</title>
            </Head>
            <div className={style.title}>會員條款頁</div>
        </div>
    );
};

export default About;
