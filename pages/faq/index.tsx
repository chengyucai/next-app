import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import './css.scss';

const About = () => {
    const classnames = 'faq_';

    return (
        <div className={classNames(classnames)}>
            <Head>
                <title>常見問題</title>
            </Head>
            <div className="title">常見問題</div>
        </div>
    );
};

export default About;
