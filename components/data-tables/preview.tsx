import React from 'react';
import DataTables from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object, number, select } from '@storybook/addon-knobs';

storiesOf('CY_C|DataTables', module)
    .addDecorator(withKnobs)
    .add(
        'Data_Tables',
        () => {
            // 範例 storiesOf(bc_coxx),module)
            // 以下是number range變數定義範例

            const tital = ['B', 'String', 'Number'];
            const data = [
                [false, 'GOGOGO', 0],
                [true, 'fasdGOGO', 1235645],
                [false, 'GasdfdfdcsadsGO', 12345],
                [true, 'GOGOjhgfGO', 145],
                [false, 'GOGdfgfrgfrgfdfOGO', 12555345],
            ];

            const props = {
                onCallback: (data: any) => console.log(data),
                tital: object('tital', tital),
                data: object('data', data),
            };

            return (
                <React.Fragment>
                    <DataTables {...props}></DataTables>
                </React.Fragment>
            );
        },
        {},
    );
