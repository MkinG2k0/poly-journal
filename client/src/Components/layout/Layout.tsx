import style from './Layout.module.scss';
import {LeftMenu} from "../LeftMenu/LeftMenu";
import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {FC} from 'react';
import {cn} from "../../Helper/helper";
import {useToggle} from "../../Hook/Hooks";

interface LayoutProps {

}

export const Layout: FC<LayoutProps> = () => {

    const {setToggle, toggle} = useToggle()

    const classLayout = cn({
        [style.open]: toggle,
        [style.close]: !toggle,
    }, style.wrap)

    return (
        <div className={classLayout}>
            <LeftMenu/>
            <Header/>
            <div className={style.wrapContent}>
                <div className={style.content}>
                    <Outlet/>
                    <button onClick={() => setToggle()}>
                        +++
                    </button>
                </div>
            </div>
        </div>
    );
};