import * as React from 'react';
import CX from 'classnames';
// import { Mode } from '../';
import '../css.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// const FUNC = require('@config/funtion');

interface bt_bsic_props {
    img_list: (string | undefined)[];
    onClick?: () => void;
}

const Module: React.FC<bt_bsic_props> = props => {
    const classname = 'crol_infinite';
    const { img_list, onClick } = props;
    const [list, setlist] = React.useState(img_list);
    const [direction, setdirection] = React.useState(true);
    // const [page, setpage] = React.useState(0);

    const IMG = (data: (string | undefined)[]) => {
        return data.map((herf: string | undefined, index: number) => {
            return (
                <CSSTransition timeout={0} classNames={direction ? 'Right' : 'Left'} key={`${herf}${index}`}>
                    <img src={herf} key={`${herf}${index}`} />
                </CSSTransition>
            );
        });
    };

    const shift = (data: (string | undefined)[]) => {
        const url = data.shift();
        data.push(url);
        const newl = [...data];
        setdirection(true);
        setlist([...newl]);
    };
    const pop = (data: (string | undefined)[]) => {
        const url = data.pop();
        data.unshift(url);
        const newl = [...data];
        setdirection(false);
        setlist([...newl]);
    };

    return (
        <div className={CX(classname)}>
            <TransitionGroup component={null}>{IMG(list)}</TransitionGroup>
            <div
                className={CX('left_btn')}
                onClick={() => {
                    pop(list);
                }}
            />
            <div
                className={CX('right_btn')}
                onClick={() => {
                    shift(list);
                }}
            />
        </div>
    );
};
export default Module;
