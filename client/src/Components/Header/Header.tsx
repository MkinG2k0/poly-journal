import style from './Header.module.scss';
import {FC} from 'react';
import {Button, Input} from "../../Lib/Lib";
import {ArrowDown, Calendar, MessageQuestion, Notification, Search} from "../Icons/Icons";


export const Header: FC = () => {

    function handleSearch(value) {
        console.log(value)
    }

    return (
        <div className={style.wrap}>
            <header className={style.header}>
                <div className={style.searchWrap}>
                    <Input onChange={handleSearch} placeholder={'Search for anything...'}>
                        <Button type={'circle'}>
                            <Search/>
                        </Button>
                    </Input>
                </div>
                <div className={style.navProfile}>
                    <Button type={'circle'}>
                        <Calendar/>
                    </Button>
                    <Button type={'circle'} status={'warning'}>
                        <MessageQuestion/>
                    </Button>
                    <Button type={'circle'}>
                        <Notification/>
                    </Button>
                    <div className={style.profile}>
                        <span>Kama Mut</span>
                        <span>Dagestan </span>
                    </div>
                    <Button type={'circle'}>
                        <ArrowDown/>
                    </Button>
                </div>
            </header>
        </div>
    );
};