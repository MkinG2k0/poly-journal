import Style from "./Button.module.scss";
import {IButton} from "./IButton";
import {FC} from "react";
import {cn} from "Helper/helper";

export const Button: FC<IButton> = ({
                                        classI = "",
                                        classT = "",
                                        classB,
                                        size = 4,
                                        type = "",
                                        status = "",
                                        classIcon = "",
                                        text,
                                        img,
                                        onClick,
                                        children,
                                        icon,
                                        spin,
                                        zero,
                                    }) => {


    const ClassButton = cn(
        {
            [Style[type]]: type,
            [Style[status]]: status,
            classB: classB,
            "p-0 m-0": zero,
        },
        Style.btn, Style[`${type}_${status}`]
    );

    const ClassText = cn(
        {
            [classT]: classT,
            [`f-${size}`]: size,
            "p-0 m-0": zero,
        },
        Style.bTitle
    );


    return (
        <button onClick={onClick} className={ClassButton}>
            {children}
            {img && <img className={classI} src={img} alt={""}/>}
            {text && <span className={ClassText}>{text}</span>}
        </button>
    );
};

Button.defaultProps = {type: "square", status: "primary"};

