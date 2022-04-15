import style from './CardSubject.module.scss';
import {FC, ReactNode} from 'react';
import {Button, Map} from "../../../Lib/Lib";
import {Dot} from "../../../Lib/Dot/Dot";
import {Plus} from "../../../Components/Icons/IconSubject";

interface CardSubjectProps {
    color: string
    title: string
    count: number
    data?: { Component: FC<any>, props?: object }[]
}

export const CardSubject: FC<CardSubjectProps> = ({color, title, data, count, children}) => {
    return (
        <div className={style.wrap}>
            <div className={style.headWrap}>
                <div className={style.head}>
                    <div className={style.headLeft}>
                        <Dot color={color}/>
                        <span>{title}</span>
                        <span className={style.count}>{count}</span>
                    </div>
                    <Button classB={style.headB} styleB={{background: color}}>
                        <Plus/>
                    </Button>
                </div>
                <div className={style.line} style={{background: color}}/>
            </div>
            <div className={style.content}>
                {data &&
                    data.map(({Component, props}, index) => <Component key={index} {...props}/>)
                }
                {!data && <div className={style.noContent}><span>No content</span></div>}
            </div>
        </div>
    )
}

const CardMessage: FC = () => {
    return (<div>

    </div>)
}