import style from './Layout.module.scss';
import {LeftMenu} from "../LeftMenu/LeftMenu";
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {FC} from 'react';

interface LayoutProps {

}

export const Layout: FC<LayoutProps> = () => {

    return (
        <div className={style.wrap}>
            <Header/>
            <LeftMenu/>
            <Outlet/>
        </div>
    );
};