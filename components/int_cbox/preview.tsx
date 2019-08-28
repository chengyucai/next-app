import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import classNames from 'classnames';
const styles = require('./preview.scss');

import { withKnobs, text, boolean } from '@storybook/addon-knobs';

storiesOf('輸入元件(input)', module)
    .addDecorator(withKnobs)
    .add('int_cbox', () => {
        const classnames = 'int_cbox_preview';
        const cx = classNames.bind(styles);
        const props = {
            word: text('word', '✔'),
            className: text('className', 'TT'),
            size: text('size', 'x1'),
            length: text('length', '30px'),
            state: true,
            onClick: (state: boolean) => {
                console.log(state);
            },
        };
        const common = {};

        return (
            <div className={cx(classnames, 'module')}>
                <div>
                    <Module {...props} />
                    <span>我是主角</span>
                </div>
            </div>
        );
    });
