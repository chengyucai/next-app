import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('##_####', module)
    .addDecorator(withKnobs)
    .add('##_####', () => {
        const props = {};
        return (
            <div>
                <Module {...props} />
            </div>
        );
    });
