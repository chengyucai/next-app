import React from 'react';
import Photoview, { Mode } from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('Photoview', module)
    .addDecorator(withKnobs)
    .add(
        'Photoview',
        () => {
            // 範例 storiesOf(bc_coxx),module)
            // 以下是number range變數定義範例
            const props = {
                src: text('main_src', 'https://picsum.photos/500/300'),
                mode: select(
                    'mode',
                    {
                        simple: Mode.simple,
                        card: Mode.card,
                    },
                    Mode.simple,
                ),
                state: boolean('switch', true),
                list: object('photolist', [
                    'https://picsum.photos/500/300',
                    'https://picsum.photos/600/500',
                    'https://picsum.photos/400/500',
                ]),
                onClickState: (data: any) => console.log(data),
            };

            return (
                <React.Fragment>
                    <Photoview {...props}>
                        <div />
                    </Photoview>
                </React.Fragment>
            );
        },
        {},
    );
