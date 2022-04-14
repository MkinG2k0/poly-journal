import style from "./Full.module.scss";
import {IFullProps} from "./IFull";
import {FC} from "react";
import {cn} from "Helper/helper";


export const Full: FC<IFullProps> = ({children, open, onClose}) => {
    const ClassFull = cn({
        [style.open]: open,
    });
    return (
        <div className={ClassFull} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    );
};
