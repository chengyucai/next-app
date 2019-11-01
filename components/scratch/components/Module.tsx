import * as React from 'react';
import cx from 'classnames';
import style from '../css.scss';

interface Props {
    onCallback?: (data: any) => void;
    width: number;
    height: number;
    lineWidth?: number;
    mainImg: string;
    canvasImg?: string;
    block?: number;
}

const Module: React.FC<Props> = props => {
    const classnames = 'scratch';

    const { onCallback, mainImg, lineWidth, width, height, block } = props;
    const [canDraw, setcanDraw] = React.useState(false);
    const [first, setfirst] = React.useState(true);
    const [allC, setallC] = React.useState([0]);
    const canvasRef: any = React.useRef(null);

    const drawXY = (e?: any) => {
        const canvas = canvasRef.current;
        const cxt = canvas.getContext('2d');
        const event: any = e || window.event;
        const lastw: number = event.clientX - canvas.offsetLeft; //獲取鼠標相對於canvas畫布的x,y值
        const lasth: number = event.clientY - canvas.offsetTop; //
        return { cxt, lastw, lasth };
    };

    const defCanvas = () => {
        const { cxt } = drawXY();
        cxt.fillStyle = 'lightgray';
        cxt.fillRect(0, 0, width, height);
        cxt.globalCompositeOperation = 'destination-out';
        cxt.lineWidth = `${lineWidth}`;
        cxt.lineCap = 'round';
    };

    React.useEffect(() => {
        if (first) {
            defCanvas();
            setfirst(false);
        }
    });
    return (
        <div className={cx(style[classnames])} style={{ width: `${width}px`, height: `${height}px` }}>
            <img className={cx({ [style.show]: !first })} src={mainImg} />
            <canvas
                ref={canvasRef}
                width={`${width}px`}
                height={`${height}px`}
                onMouseDown={() => {
                    setcanDraw(true);
                    const { cxt, lastw, lasth } = drawXY();
                    // cxt.lineTo(lastw, lasth);
                    cxt.beginPath();
                }}
                onMouseMove={() => {
                    if (canDraw) {
                        const { cxt, lastw, lasth } = drawXY();
                        cxt.lineTo(lastw, lasth);
                        cxt.stroke();
                        setallC(pre => {
                            pre.push(Math.round((lastw / lasth) * ((width + height) / 100)));
                            return [...new Set(pre)];
                        });
                    }
                }}
                onMouseUp={() => {
                    setcanDraw(false);
                    if (allC.length >= block * 100) {
                        defCanvas();
                    }
                    // console.log(allC.length);
                }}
                onTouchStart={(e: any) => {
                    setcanDraw(true);
                    const { cxt, lastw, lasth } = drawXY(e.touches[0]);
                    cxt.lineTo(lastw, lasth);
                    cxt.beginPath();
                }}
                onTouchMove={(e: any) => {
                    // if (canDraw) {
                    const { cxt, lastw, lasth } = drawXY(e.touches[0]);
                    cxt.lineTo(lastw, lasth);
                    cxt.stroke();
                    // }
                }}
                onTouchEnd={() => {
                    setcanDraw(false);
                }}
            />
        </div>
    );
};

/**
 * Props default value write here
 */
Module.defaultProps = {
    block: 0.4,
    lineWidth: 50,
};

export default Module;