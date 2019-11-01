import * as React from 'react';
import cx from 'classnames';
import IcXicn from '@components/ic_xicn/';
import style from '../css.scss';

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

    return (
        <div
            className={cx(style.int_cbox, className, { [style.none]: !state })}
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
