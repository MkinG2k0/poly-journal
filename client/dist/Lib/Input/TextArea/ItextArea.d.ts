import { WrapTitleProps } from "@lib//WrapTitle/IWrapTitle";
export interface ITextArea extends WrapTitleProps {
    value?: string;
    spread?: object;
    name?: string;
    onChange?: (value: string, name: string, ref: any) => void;
}
