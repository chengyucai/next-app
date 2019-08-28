import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import { Mode } from './components/Module';

import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';
storiesOf('Button(按鈕)', module)
    .addDecorator(withKnobs)
    .add('bt_bsic', () => {
        const props = {
            word: text('tital', 'Button'),
            mode: select(
                'data',
                {
                    Text: Mode.Text,
                    Outlined: Mode.Outlined,
                    Contained: Mode.Contained,
                },
                Mode.Text,
            ),
            onClick: () => console.log('按下'),
        };
        return (
            <div>
                <Module {...props} />
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
            </div>
        );
    });
