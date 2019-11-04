import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import * as style from './css.scss';

const About = () => {
    const classnames = 'privacy_';

    return (
        <div className={style[classnames]}>
            <Head>
                <title>隱私權政策</title>
            </Head>
            <div className={style.title}>隱私權政策</div>
        </div>
    );
};

export default About;
