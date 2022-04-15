import style from './Subject.module.scss';
import {FC} from 'react';
import {useParams} from "react-router-dom";

export const Subject: FC = () => {
    const {name} = useParams();

    return (
        <div className={style.wrap}>
            Subject {name}
        </div>)
};