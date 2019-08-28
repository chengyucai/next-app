import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import './css.scss';

const About = () => {
    const classnames = 'contactUs_';

    return (
        <div className={classNames(classnames)}>
            <Head>
                <title>聯絡我們頁</title>
            </Head>
            <div className="title">聯絡我們頁</div>
        </div>
    );
};

export default About;
