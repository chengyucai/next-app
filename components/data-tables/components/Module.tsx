import * as React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Int_cbox from '@components/int_cbox';
import style from '../css.scss';

interface Props {
    onCallback: (data: any) => void;
    tital?: string[];
    type?: string[];
    data: (number | string | boolean)[][];
    children?: any;
}

const DataTables: React.FC<Props> = props => {
    const classnames = 'data-tables';

    const { onCallback, children, tital } = props;
    const [data, setdata] = React.useState(props.data);

    const check_type = () => {
        return data[0].map((data: number | string | boolean) => {
            return typeof data;
        });
    };
    const type = props.type ? props.type : check_type();

    const didMountRef = React.useRef(false);
    React.useEffect(() => {
        didMountRef.current ? onCallback(data) : (didMountRef.current = true);
    }, [data]);

    const checkbox = (state: boolean, c_key: number, r_key: number) => {
        const defult = {
            word: '✔',
            className: style.check_box,
            size: 'x1',
            length: '24px',
        };

        const data = {
            state: state,
            onClick: (state: boolean) => {
                setdata(pre => {
                    pre[c_key][r_key] = state;
                    return [...pre];
                });
            },
        };

        const tital = {
            state: state,
            onClick: (state: boolean) => {
                // setdata(pre => {
                //     pre[c_key][r_key] = state;
                //     return [...pre];
                // });
                console.log(state);
            },
        };

        return c_key >= 0 && r_key >= 0 ? <Int_cbox {...defult} {...data} /> : <Int_cbox {...defult} {...tital} />;
    };
    const checkbox_state = (index: number) => {
        return data.filter((data: any) => {
            return data[index] === true;
        });
    };

    const First = (tital: string[]) => {
        const list = tital.map((data: string, i: number) => {
            return (
                <th className={cx(style.tital, style[type[i]], style[`c_${i}`])} key={`${i}_First`} title={data}>
                    {type[i] === 'boolean' ? checkbox(true, -1, -1) : <span>{data}</span>}
                </th>
            );
        });
        return <tr>{list}</tr>;
    };

    const Data = (alldata: (number | string | boolean)[][]) => {
        const datalist = alldata.map((list: (number | string | boolean)[], c_i: number) => {
            const tList = list.map((data: number | string | boolean, r_i: number) => {
                return (
                    <td className={cx(style[type[r_i]], style[`c_${r_i}`])} key={`${r_i}_Data`}>
                        {typeof data === 'boolean' ? checkbox(data, c_i, r_i) : <span>{data}</span>}
                    </td>
                );
            });
            return <tr key={`${c_i}_Data`}>{tList}</tr>;
        });
        return datalist;
    };

    return (
        <div className={cx(style[classnames])}>
            <table>
                {tital && First(tital)}
                {Data(data)}
            </table>
        </div>
    );
};
/**
 * Props default value write here
 */
DataTables.defaultProps = {};
export default DataTables;
