import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import * as style from './css.scss';
import { useRouter } from 'next/router';
const About = () => {
    const classnames = 'category_';
    const router = useRouter();
    return (
        <div className={style[classnames]}>
            <Head>
                <title>{router.query.index}分類頁</title>
            </Head>
            <div className={style.title}>{router.query.index}分類頁</div>
        </div>
    );
};

export default About;
