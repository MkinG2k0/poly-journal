import {Size} from "../../../Interface/Comp";
import {ReactElement} from "react";

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
    zero?: boolean;
    Before?: ReactElement
    After?: ReactElement
}

type typeB = "link" | "square" | "circle" | "smooth";
type statusB = "primary" | "danger" | "success" | "warning";

