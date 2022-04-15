import style from './Subjects.module.scss';
import {Clock, Filter, ArrowDown} from "../../Components/Icons/IconSubject";
import {Button} from "Lib/Lib";
import {FC} from 'react';
import {CardSubject} from "../../Components/Generic/CardSubject/CardSubject";
import {CardMessage, CardMessageProps} from "../../Components/Generic/CardMessage/CardMessage";

export const Subjects: FC = () => {
    return (
        <div className={style.wrap}>
            <span>Subjects</span>
            <div className={style.filter}>
                <Button
                    text={'Filter'}
                    classB={style.button}
                    Before={<Filter/>}
                    After={<ArrowDown/>}
                >
                </Button>
                <Button
                    text={'Filter'}
                    classB={style.button}
                    Before={<Clock/>}
                    After={<ArrowDown/>}
                >
                </Button>
            </div>
            <div className={style.wrapContent}>
                <CardSubject color={'#5030E5'} title={'Current task'} count={4} data={dataCard}/>
                <CardSubject color={'#FFA500'} title={'Per month'} count={2} data={dataCard2}/>
                <CardSubject color={'#76A5EA'} title={'During the day'} count={6} data={dataCard3}/>
                <CardSubject color={'#8BC48A'} title={'Title'} count={3}/>
            </div>
        </div>)

};


const dataCard = [
    {
        Component: CardMessage,
        props: {title: 'Почему он используется?', description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст', complexity: 0} as CardMessageProps
    },
    {
        Component: CardMessage,
        props: {
            title: 'Откуда он появился?',
            description: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
            complexity: 1
        } as CardMessageProps
    },
    {
        Component: CardMessage,
        props: {
            title: 'Где его взять?',
            description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации',
            complexity: 2
        } as CardMessageProps
    },
]

const dataCard2 = [
    {
        Component: CardMessage,
        props: {
            title: 'Где его взять?',
            description: 'Есть много вариантов Lorem Ipsum, но большинство ',
            complexity: 2
        } as CardMessageProps
    },
    {
        Component: CardMessage,
        props: {title: 'Почему он используется?', description: 'Давно выяснено, что при оценке дизайна', complexity: 0} as CardMessageProps
    },
]

const dataCard3 = [
    {
        Component: CardMessage,
        props: {
            title: 'Откуда он появился?',
            description: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
            complexity: 1
        } as CardMessageProps
    },
]