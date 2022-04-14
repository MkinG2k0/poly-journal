import {Size} from "../../../Interface/Comp";
import {FC} from "react";

export interface IButton {
    text?: string;
    onClick?: () => void;
    classB?: string;
    classT?: string;
    classI?: string;
    img?: string;
    size?: Size;
    type?: typeB;
    status?: statusB;
    icon?: any;
    spin?: boolean;
    classIcon?: string;
    zero?: boolean;
}

type typeB = "link" | "square" | "circle" | "smooth";
type statusB = "primary" | "danger" | "success" | "warning";

