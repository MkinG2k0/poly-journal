import style from './Layout.module.scss';
import {LeftMenu} from "../LeftMenu/LeftMenu";
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {FC} from 'react';
import {cn} from "../../Helper/helper";

interface LayoutProps {

}

export const Layout: FC<LayoutProps> = () => {

    const classLayout = cn({}, style.wrap)


    return (
        <div className={classLayout}>
            <LeftMenu/>
            <Header/>
            <div className={style.wrapContent}>
                <div className={style.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};