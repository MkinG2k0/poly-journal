import { WrapTitleProps } from "@lib/WrapTitle/IWrapTitle";
import { Size } from "../../../Interface/Comp";
export interface IInputProps extends WrapTitleProps {
    size?: Size;
    inputRef?: any;
    onChange?: (value: string, name: string, ref: any) => void;
    styleInput?: 1 | 2 | 3;
    spread?: any;
    value?: string;
    inputType?: string;
    name?: string;
    placeholder?: string;
    speedUpdate?: number;
    required?: boolean;
}
