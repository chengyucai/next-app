import * as React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import IcXicn from '@components/ic_xicn/';
// const styles = require('../css.scss');
import '../css.scss';

export enum Mode {
    simple,
    card,
}

interface Props {
    state: boolean;
    mode: number;
    src?: string;
    pages?: number;
    list?: string[];
    onClickState: (data: any) => void;

    children?: any;
}

const PhotoView: React.FC<Props> = props => {
    const classnames = 'photo_view';
    const { src, state, mode, onClickState, children } = props;
    const [imgbig, setimgbig] = React.useState(false);

    return (
        <div
            className={cx(classnames, { none: !state })}
            onClick={(e: any) => {
                e.target.className === 'ic_xicn ic-cross x2' && onClickState(!state);
            }}
        >
            <IcXicn className="close_page" size={'x15'} word={'✖'} />
            <div className={cx(Mode[mode])}>
                <div className="header">{children[0]}</div>
                <img
                    className={cx({ big: imgbig })}
                    src={src}
                    onClick={() =>
                        setimgbig(prev => {
                            return !prev;
                        })
                    }
                />
                <div className={cx('photoList')}>
                    <div className={cx('')}>You might like it</div>
                    {children[1]}
                </div>
            </div>
        </div>
    );
};
/**
 * Props default value write here
 */
PhotoView.defaultProps = {
    src: '',
    pages: -1,
    list: [],
    onClickState: data => {
        console.log(data);
    },
};
export default PhotoView;
