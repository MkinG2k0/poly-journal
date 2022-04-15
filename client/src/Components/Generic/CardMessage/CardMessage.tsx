import style from './CardMessage.module.scss';
import {FC} from 'react';
import {Dot} from "../../../Lib/Dot/Dot";
import {cn} from "../../../Helper/helper";

export interface CardMessageProps {
    title: string
    description: string
    complexity: 0 | 1 | 2
}

export const CardMessage: FC<CardMessageProps> = ({complexity, description, title}) => {
    const ClassComplexity = cn({}, style.complexity, style[Words[complexity]])

    return (
        <div className={style.wrap}>
            <div className={style.head}>
                <span className={ClassComplexity}>
                    {Words[complexity]}
                </span>

                <div className={style.dot}>
                    <Dot size={3}/>
                    <Dot size={3}/>
                    <Dot size={3}/>
                </div>
            </div>
            <span className={style.title}>{title}</span>
            <span className={style.description}>{description}</span>
        </div>)
};


CardMessage.defaultProps = {
    complexity: 1
}


const Words = ['Low', 'Middle', 'High']