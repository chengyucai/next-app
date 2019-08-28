import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module, { Mode } from './index';

import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';
storiesOf('Button(按鈕)', module)
    .addDecorator(withKnobs)
    .add('bt_bsic', () => {
        const style = {
            color: '',
            backgroundColor: '#6200ee',
            borderColor: '#6200ee',
        };
        const props = {
            word: text('Word', 'Button'),
            icon: text('icon', ''),
            mode: select(
                'Mode',
                {
                    Text: Mode.Text,
                    Outlined: Mode.Outlined,
                    Contained: Mode.Contained,
                },
                Mode.Contained,
            ),
            style: object('Style', style),
            onClick: () => console.log('按下'),
        };
        return (
            <div>
                <div>
                    <div>我是主角</div>
                    <Module {...props} />
                </div>
                <div>
                    <div>{Mode[Mode.Text]}</div>
                    <Module word={'Button'} mode={Mode.Text} />
                </div>
                <div>
                    <div>{Mode[Mode.Outlined]}</div>
                    <Module word={'Button'} mode={Mode.Outlined} />
                </div>
                <div>
                    <div>{Mode[Mode.Contained]}</div>
                    <Module word={'Button'} mode={Mode.Contained} />
                </div>
                <div>
                    <div>icon_{Mode[Mode.Contained]}</div>
                    <Module icon={'✚'} word={'Button'} mode={Mode.Contained} />
                </div>
            </div>
        );
    });
