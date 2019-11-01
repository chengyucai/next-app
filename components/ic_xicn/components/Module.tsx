import * as React from 'react';
import cx from 'classnames';
import style from '../css.scss';

interface Props {
    className?: string;
    size?: string;
    word: string;
    color?: string;
}

const Module: React.FC<Props> = props => {
    const { className, size, word, color } = props;

    return (
        <i className={cx(style.ic_xicn, className, style[`${size}`])} style={{ color: color }}>
            {word}
        </i>
    );
};

Module.defaultProps = {
    className: '',
    word: '',
    size: '',
    color: '',
};

export default Module;
