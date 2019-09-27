import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import style from './css.sass';

const About = () => {
    const classnames = 'faq_';

    return (
        <div className={classNames(style[classnames])}>
            <Head>
                <title>常見問題</title>
            </Head>
            <div className={style.title}>常見問題</div>
        </div>
    );
};

export default About;
