import { WrapTitleProps } from "@lib/WrapTitle/IWrapTitle";
export interface InputDateProps extends WrapTitleProps {
    onChange?: (e: any, name: string) => void;
    name?: string;
    value?: string;
    required?: boolean;
}
