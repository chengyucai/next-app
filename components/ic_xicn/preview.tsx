import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Module from './index';
import cx from 'classnames';
import styles from './preview.scss';

import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('圖示(iconfont)', module)
    .addDecorator(withKnobs)
    .add('ic_xicn', () => {
        const classnames = 'ic_xicn_preview';

        const props = {
            word: text('word', '🀘'),
            className: text('className', 'TT'),
            size: text('size', 'x2'),
            color: text('color', '#000'),
        };
        const common = {
            size: 'x3',
            color: text('color', '#000'),
        };

        const root_url = 'https://www.toptal.com/designers/htmlarrows';

        const fache_icon = () => {
            const icon =
                '😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😙😚☺🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀☠👻👽👾🤖💩😺😸😹😻😼😽';
            return [...icon].map((data: string, index: number) => {
                return (
                    <div key={`icon_${index}`}>
                        <Module {...common} word={data} />
                    </div>
                );
            });
        };

        const link = (name: string, url = 'symbols') => {
            return <a href={`${root_url}/${url}/${name}`}>{name}</a>;
        };

        return (
            <div className={cx(styles[classnames], styles.module)}>
                <div>
                    <Module {...props} />
                    <span>我是主角</span>
                </div>
                <div>
                    <Module {...common} word={'✓'} />
                    {link('check-mark')}
                </div>
                <div>
                    <Module {...common} word={'✔'} />
                    {link('heavy-check-mark')}
                </div>
                <div>
                    <Module {...common} word={'✕'} />
                    {link('multiplication-x')}
                </div>
                <div>
                    <Module {...common} word={'✖'} />
                    {link('heavy-multiplication-x')}
                </div>
                <div>
                    <Module {...common} word={'✗'} />
                    {link('ballot-x')}
                </div>
                <div>
                    <Module {...common} word={'✘'} />
                    {link('heavy-ballot-x')}
                </div>
                <div>
                    <Module {...common} word={'❤'} />
                    {link('heavy-black-heart')}
                </div>
                <div>
                    <Module {...common} word={'❪'} />
                    {link('medium-flattened-left-parenthesis-ornament')}
                </div>
                <div>
                    <Module {...common} word={'❬'} />
                    {link('medium-left-pointing-angle-bracket-ornament')}
                </div>
                <div>
                    <Module {...common} word={'❮'} />
                    {link('heavy-left-pointing-angle-quotation-mark-ornament')}
                </div>
                <div>
                    <Module {...common} word={'❰'} />
                    {link('heavy-left-pointing-angle-bracket-ornament')}
                </div>
                <div>
                    <Module {...common} word={'❲'} />
                    {link('light-left-tortoise-shell-bracket-ornament')}
                </div>
                <div>
                    <Module {...common} word={'❴'} />
                    {link('medium-left-curly-bracket-ornament')}
                </div>
                <div>
                    <Module {...common} word={'★'} />
                    {link('black-star')}
                </div>
                <div>
                    <Module {...common} word={'✡'} />
                    {link('star-of-david')}
                </div>
                <div>
                    <Module {...common} word={'✪'} />
                    {link('circled-white-star')}
                </div>
                <div>
                    <Module {...common} word={'☎'} />
                    {link('black-telephone')}
                </div>
                <div>
                    <Module {...common} word={'☀'} />
                    {link('black-sun-with-rays')}
                </div>
                <div>
                    <Module {...common} word={'☼'} />
                    {link('white-sun-with-rays')}
                </div>
                <div>
                    <Module {...common} word={'☁'} />
                    {link('cloud')}
                </div>
                <div>
                    <Module {...common} word={'☂'} />
                    {link('umbrella')}
                </div>
                <div>
                    <Module {...common} word={'☰'} />
                    {link('trigram-for-heaven')}
                </div>
                <div>
                    <Module {...common} word={'♀'} />
                    {link('female-sign')}
                </div>
                <div>
                    <Module {...common} word={'♂'} />
                    {link('male-sign')}
                </div>
                <div>
                    <Module {...common} word={'™'} />
                    {link('trade-mark-sign', 'punctuation')}
                </div>
                <div>
                    <Module {...common} word={'@'} />
                    {link('at-symbol', 'punctuation')}
                </div>
                <div>
                    <Module {...common} word={'&'} />
                    {link('ampersand', 'punctuation')}
                </div>
                <div>
                    <Module {...common} word={'$'} />
                    {link('dollar-sign', 'currency')}
                </div>
                <div>
                    <Module {...common} word={'¥'} />
                    {link('yen-sign', 'currency')}
                </div>
                <div>
                    <Module {...common} word={'↶'} />
                    {link('anticlockwise-top-semicircle-arrow', 'arrows')}
                </div>
                <div>
                    <Module {...common} word={'↷'} />
                    {link('clockwise-top-semicircle-arrow', 'arrows')}
                </div>
                <div>
                    <Module {...common} word={'↺'} />
                    {link('anticlockwise-open-circle-arrow', 'arrows')}
                </div>
                <div>
                    <Module {...common} word={'↻'} />
                    {link('clockwise-open-circle-arrow', 'arrows')}
                </div>
                {fache_icon()}
            </div>
        );
    });
