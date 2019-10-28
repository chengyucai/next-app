import * as React from 'react';
import cx from 'classnames';
import styles from '../css.scss';

interface Props {
    className?: string;
    size?: string;
    word: string;
    color?: string;
}

const Module: React.FC<Props> = props => {
    const { className, size, word, color } = props;

    return (
        <i className={cx(styles.ic_xicn, className, styles[`${size}`])} style={{ color: color }}>
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
