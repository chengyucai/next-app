import * as React from 'react';
import cx from 'classnames';
import style from '../css.scss';

interface Props {
    onClick?: () => void;
}

const Module: React.FC<Props> = props => {
    const classnames = '##_####';

    const { onClick } = props;

    return (
        <div className={cx(style[classnames])} onClick={() => onClick()}>
            <span>{`我是components的${classnames}專案`}</span>
        </div>
    );
};

/**
 * Props default value write here
 */
Module.defaultProps = {
    onClick: () => console.log('##_####'),
};

export default Module;
