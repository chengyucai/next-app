import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('scratch', module)
    .addDecorator(withKnobs)
    .add('scratch', () => {
        const props = {
            width: number('width', 500),
            height: number('height', 300),
            lineWidth: number('lineWidth', 40),
            mainImg: text(
                'mainImg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgBDXbpe2fzLEqP_Algq9VqPU8VuwTX4SRExQ17rB0lfulEpwnA&s',
            ),
        };
        return (
            <div>
                <Module {...props} />
            </div>
        );
    });
