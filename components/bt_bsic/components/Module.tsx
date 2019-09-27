import * as React from 'react';
import classNames from 'classnames';
import { Mode } from '../';
import Ic_xicn from '@components/ic_xicn/';
import style from '../css.scss';

interface Style {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
}

interface bt_bsic_props {
    word: string;
    mode: number;
    url?: string;
    icon?: string;
    color?: string[];
    style?: Style;
    onClick?: () => void;
}

const Module: React.FC<bt_bsic_props> = props => {
    const classname = 'bt_bsic';
    const { word, mode, onClick, icon } = props;

    const btn_Style: Style = { ...props.style };
    btn_Style && mode !== Mode.Contained && delete btn_Style.backgroundColor;

    return (
        <button
            className={classNames(style[classname], style[Mode[mode]])}
            onClick={() => onClick && onClick()}
            style={{ ...btn_Style }}
        >
            {icon && <Ic_xicn word={icon} />}
            <span>{word}</span>
        </button>
    );
};
export default Module;
