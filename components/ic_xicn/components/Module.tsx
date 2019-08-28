import * as React from 'react';
import classnames from 'classnames';
const styles = require('../css.scss');

interface Props {
    className?: string;
    size?: string;
    word?: string;
    color?: string;
}

const Module: React.FC<Props> = props => {
    const { className, size, word, color } = props;

    const cx = classnames.bind(styles);

    return (
        <i className={cx('ic_xicn', className, size)} style={{ color: color }}>
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
