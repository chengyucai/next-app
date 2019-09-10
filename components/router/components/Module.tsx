import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Btn, { Mode } from '@components/bt_bsic/';
// import { PageList } from './list';
import PageList from '@config/json/router.json';
import '../css.scss';

const Module = () => {
    const classname = 'routes';
    const [clik, setclik] = React.useState('Home');
    return (
        <div className={classNames(classname)}>
            <Btn word={'Slide'} mode={Mode.Contained} />
            <div className={classNames(`${classname}-list`)}>
                {PageList.map((table: any, index: number) => {
                    const Menu = table.subMenu.map((data: any, index: number) => {
                        // return table.subMenu.map((data: any, index: number) => {
                        return (
                            <div key={index}>
                                <Link {...data.link}>
                                    <a
                                        className={classNames({ link: data.title === clik })}
                                        onClick={() => setclik(data.title)}
                                    >
                                        {data.title}
                                    </a>
                                </Link>
                            </div>
                        );
                    });
                    return (
                        <React.Fragment key={index}>
                            <h3>{table.cate}</h3>
                            {Menu}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Module;
