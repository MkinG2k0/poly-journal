import { Size } from "../../../Interface/Comp";
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
declare type typeB = "link" | "square" | "circle" | "smooth";
declare type statusB = "primary" | "danger" | "success" | "warning";
export {};
