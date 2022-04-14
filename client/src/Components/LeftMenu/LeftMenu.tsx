import style from './LeftMenu.module.scss';
import {FC} from 'react';
import {Button} from "../../Lib/Lib";
import {Task, Home, Menu} from "../Icons/IconLeftMenu";
import {NavButton} from "../NavButton/NavButton";

interface LeftMenuProps {

}

export const LeftMenu: FC<LeftMenuProps> = ({}) => {

    return (
        <div className={style.wrap}>
            <div className={style.leftMenu}>
                <NavButton>
                    <Menu className={style.icon}/>
                </NavButton>
                <NavButton text={'NavButton'}>
                    <Home className={style.icon}/>
                </NavButton>
                <NavButton>
                    <Home className={style.icon}/>
                </NavButton>
                <NavButton>
                    <Task className={style.icon}/>
                </NavButton>
            </div>
        </div>
    );
};