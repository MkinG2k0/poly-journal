import style from "./Button.module.scss";
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
                                        text,
                                        img,
                                        onClick,
                                        children,
                                        zero,
                                        Before,
                                        After,
                                        styleB,
                                    }) => {


    const ClassButton = cn(
        {
            [style[type]]: type,
            [style[status]]: status,
            [classB]: classB,
            "p-0 m-0": zero,
        },
        style.btn, style[`${type}_${status}`]
    );

    const ClassText = cn(
        {
            [classT]: classT,
            [`f-${size}`]: size,
            "p-0 m-0": zero,
        },
        style.bTitle
    );

    const ClassImage = cn({
        [classI]: classI
    }, style.btnImg)


    return (
        <button onClick={onClick} className={ClassButton} style={styleB}>
            {Before}
            {children}
            {img && <img className={ClassImage} src={img} alt={""}/>}
            {text && <span className={ClassText}>{text}</span>}
            {After}
        </button>
    );
};

Button.defaultProps = {type: "square", status: "primary"};

