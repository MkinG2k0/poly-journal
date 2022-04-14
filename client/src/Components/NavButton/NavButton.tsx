import style from "./NavButton.module.scss";
import {IButton} from 'Lib/Input/Button/IButton';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "../../Lib/Lib";


interface NavButtonProps extends IButton {
    to?: string
}

export const NavButton: FC<NavButtonProps> = ({to = '/', type = 'link', children, ...props}) => {
    return (
        <Link to={to} className={style.wrap}>
            <Button {...props} type={type}>
                {children}
            </Button>
        </Link>
    );
};