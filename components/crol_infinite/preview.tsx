import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';

import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';
storiesOf('carousel(輪播)', module)
    .addDecorator(withKnobs)
    .add('crol_infinite', () => {
        const props = {
            img_list: object('img_list', [
                'https://picsum.photos/500/300',
                'https://picsum.photos/600/500',
                'https://picsum.photos/700/500',
                'https://picsum.photos/500/500',
                'https://picsum.photos/600/300',
                'https://picsum.photos/600/400',
                'https://picsum.photos/500/700',
                'https://picsum.photos/700/700',
            ]),
        };
        return (
            <>
                <Module {...props}></Module>
            </>
        );
    });
