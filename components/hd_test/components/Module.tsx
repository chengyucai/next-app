import * as React from 'react';
import cx from 'classnames';
// import { Mode } from '../';
// import Ic_xicn from '@components/ic_xicn/';
import '../css.scss';

interface hd_test_props {
    class?: string;
}

const Module: React.FC<hd_test_props> = props => {
    const classname = 'hd_test';

    return <div className={cx(classname)}>Head</div>;
};
export default Module;
