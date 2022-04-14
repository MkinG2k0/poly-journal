import style from './LeftMenu.module.scss';
import {Bag, Book, Chat, Contacts, Home, Layout, Menu, Settings, Task} from "../Icons/IconLeftMenu";
import {Button, Map} from "../../Lib/Lib";
import {Link} from "react-router-dom";
import {FC, memo,} from 'react';
import {useStore} from "../../Redux/Store/Redux.hooks";
import store from "../../Redux/Store/store";
import {toggleLayout} from "../../Redux/Actions/Visible/Visible.Slice";


export const LeftMenu: FC = memo(() => {

    const {leftMenu} = useStore(({visible}) => visible.layout)

    function toggleMenu() {
        store.dispatch(toggleLayout('leftMenu'))
        console.log(';sd')
    }

    return (
        <div className={style.wrap}>
            <div className={style.leftMenu}>
                <BurgerButton onClick={toggleMenu} open={leftMenu}/>
                <Map Comp={NavItem} data={listButtons} spread={{open: leftMenu}}/>
            </div>
        </div>
    );
})

interface NavItemProps {
    Icon: any,
    text: string,
    to: string
    open?: boolean
}

const NavItem: FC<NavItemProps> = ({Icon, to, text, open}) => {
    return (
        <Link to={to} className={style.navLink}>
            <Button type={'link'} zero={true}>
                <Icon/>
            </Button>
            {open && <span>{text}</span>}
        </Link>
    )
};

const BurgerButton = ({onClick, open}) => (
    <div className={style.navLink} onClick={onClick}>
        <Button type={'link'} zero={true}>
            <Menu/>
        </Button>
        {open && <span>{'Menu'}</span>}
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