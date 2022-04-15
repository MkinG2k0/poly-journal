import style from './Dot.module.scss';
import {FC} from 'react';

interface DotProps {
    size?: number | string
    color?: string
}

export const Dot: FC<DotProps> = ({color, size}) =>
    <div className={style.wrap} style={{width: size, height: size, background: color}}/>

Dot.defaultProps = {
    color: '#161625',
    size: 10
}
