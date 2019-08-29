import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('Header', module)
    .addDecorator(withKnobs)
    .add('hd_test', () => {
        return (
            <>
                <Module />
            </>
        );
    });
