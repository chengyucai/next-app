import * as React from 'react';
import classnames from 'classnames';
import IcXicn from '@components/ic_xicn/';
const styles = require('../css.scss');

interface Props {
    className?: string;
    size?: string;
    word: string;
    length?: string;
    state: boolean;
    onClick: (stata: boolean) => void;
}

const Module: React.FC<Props> = props => {
    const { className, size, word, length, state, onClick } = props;
    const cx = classnames.bind(styles);

    return (
        <div
            className={cx('int_cbox', className, { none: !state })}
            style={{ width: length, height: length }}
            onClick={() => {
                onClick(!state);
            }}
        >
            <IcXicn size={size} word={word} />
        </div>
    );
};

Module.defaultProps = {
    className: '',
    state: false,
};

export default Module;
