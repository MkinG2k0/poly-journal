import {WrapTitleProps} from "Lib/WrapTitle/IWrapTitle";

export interface InputDateProps extends WrapTitleProps {
    onChange?: (e, name: string) => void;
    name?: string;
    value?: string;
    required?: boolean;
}
