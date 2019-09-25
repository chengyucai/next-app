import * as React from 'react';
import cx from 'classnames';
import '../css.scss';

interface Props {
    onCallback?: (data: any) => void;
}

const Module: React.FC<Props> = props => {
    const classnames = '##_####';

    const { onCallback } = props;

    return (
        <div className={cx(classnames)}>
            <span>{`我是components的${classnames}專案`}</span>
        </div>
    );
};

/**
 * Props default value write here
 */
Module.defaultProps = {};

export default Module;
