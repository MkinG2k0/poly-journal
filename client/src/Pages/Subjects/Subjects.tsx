import style from './Subjects.module.scss';
import {FC} from 'react';
import {Button} from "../../Lib/Lib";
import {Clock, Filter, ArrowDown} from "../../Components/Icons/IconSubject";

interface SubjectsProps {

}

export const Subjects: FC<SubjectsProps> = ({}) => {
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
            <div className={style.wrapCard}>

            </div>
        </div>)

};