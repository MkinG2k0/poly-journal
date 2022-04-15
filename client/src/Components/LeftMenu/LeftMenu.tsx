import style from './LeftMenu.module.scss';
import {R_Bag, R_Book, R_Chat, R_Contacts, R_Home, R_Settings, R_Task, R_Subject, R_App, R_Subject_Name, R_Subjects} from 'Routes/Route'
import {App, Bag, Book, Chat, Contacts, Home, Menu, Plus, Settings, Task, Subject} from "../Icons/IconLeftMenu";
import {toggleLayout} from "../../Redux/Actions/Visible/Visible.Slice";
import {useStore} from "../../Redux/Store/Redux.hooks";
import store from "../../Redux/Store/store";
import {Button, Map} from "../../Lib/Lib";
import {Link} from "react-router-dom";
import {Dot} from "../../Lib/Dot/Dot";
import {FC, memo} from 'react';

export const LeftMenu: FC = memo(() => {

    const {leftMenu} = useStore(({visible}) => visible.layout)

    const toggleMenu = () => store.dispatch(toggleLayout('leftMenu'))

    const addSubject = () => {

    }


    return (
        <div className={style.wrap}>
            <div className={style.leftMenu}>
                <BurgerButton onClick={toggleMenu} open={leftMenu}/>
                <Map Comp={NavItem} data={listButtons} spread={{open: leftMenu}}/>
            </div>
            <div className={style.leftMenu}>
                <AddButton onClick={addSubject} open={leftMenu}/>
                <Map Comp={NavSubject} data={listSubject} spread={{open: leftMenu}}/>
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

interface ItemSubject {
    name: string
    color: string
    to: string
}

const NavItem: FC<NavItemProps> = ({Icon, to, text, open}) => (
    <Link to={to} className={style.navLink}>
        <Button type={'link'} zero={true}>
            <Icon/>
        </Button>
        {open && <span>{text}</span>}
    </Link>
)


const BurgerButton = ({onClick, open}) => (
    <div className={style.navLink} onClick={onClick}>
        <Button type={'link'} zero>
            <Menu/>
        </Button>
        {open && <span>{'Menu'}</span>}
    </div>)

const AddButton = ({onClick, open}) => (
    <div className={style.navLink} onClick={onClick}>
        <Button type={'link'} zero>
            <Plus/>
        </Button>
        {open && <span>{'Subject'}</span>}
    </div>)


const NavSubject = ({name, color, to, open}) => (
    <Link to={`${R_Subject_Name}${to}`} className={style.navLink}>
        <Button type={'link'} zero>
            <Dot size={24} color={color}/>
        </Button>
        {open && <span>{name}</span>}
    </Link>
)

const listButtons: NavItemProps[] = [
    {Icon: Home, text: 'Home', to: R_Home},
    {Icon: Subject, text: 'Subject', to: R_Subjects},
    {Icon: Bag, text: 'Bag', to: R_Bag},
    {Icon: Book, text: 'Book', to: R_Book},
    {Icon: App, text: 'App', to: R_App},
    {Icon: Chat, text: 'Chat', to: R_Chat},
    {Icon: Task, text: 'Task', to: R_Task},
    {Icon: Contacts, text: 'Contacts', to: R_Contacts},
    {Icon: Settings, text: 'Settings', to: R_Settings},
]

const listSubject: ItemSubject[] = [
    {name: 'Biology', to: 'Biology', color: '#7AC555'},
    {name: 'Programming', to: 'Programming', color: '#FFA500'},
    {name: 'Physics', to: 'Physics', color: '#E4CCFD'},
    {name: 'Chemistry', to: 'Chemistry', color: '#76A5EA'},
]