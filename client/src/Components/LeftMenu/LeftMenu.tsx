import style from './LeftMenu.module.scss';
import {Bag, Book, Chat, Contacts, Home, Layout, Menu, Settings, Task} from "../Icons/IconLeftMenu";
import {Button, Map} from "../../Lib/Lib";
import {Link} from "react-router-dom";
import {FC, memo,} from 'react';


export const LeftMenu: FC = memo(() => {

    function toggleMenu() {

    }

    return (
        <div className={style.wrap}>
            <div className={style.leftMenu}>
                <BurgerButton onClick={toggleMenu}/>
                <Map Comp={NavItem} data={listButtons}/>
            </div>
        </div>
    );
})

interface NavItemProps {
    Icon: any,
    text: string,
    to: string
}

const NavItem: FC<NavItemProps> = ({Icon, to, text}) => {
    return (
        <Link to={to} className={style.navLink}>
            <Button type={'link'}>
                <Icon/>
            </Button>
            <span>{text}</span>
        </Link>
    )
};

const BurgerButton = ({onClick}) => (
    <div className={style.navLink} onClick={onClick}>
        <Button type={'link'}>
            <Menu/>
        </Button>
        <span>{'Menu'}</span>
    </div>
)

const listButtons: NavItemProps[] = [
    {Icon: Home, text: 'Home', to: '/'},
    {Icon: Bag, text: 'Bag', to: '/'},
    {Icon: Book, text: 'Book', to: '/'},
    {Icon: Layout, text: 'App', to: '/'},
    {Icon: Chat, text: 'Chat', to: '/'},
    {Icon: Task, text: 'Task', to: '/'},
    {Icon: Contacts, text: 'Contacts', to: '/'},
    {Icon: Settings, text: 'Settings', to: '/'},
]