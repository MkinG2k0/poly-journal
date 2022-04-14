import { Duration, Size } from "../../Interface/Comp";
export interface SkeletProps {
    status: boolean | string;
    border?: 0 | 1 | 2 | 3 | 4;
    width?: number | string;
    height?: number | string;
    classSkelet?: string;
    duration?: Duration;
}
export interface SkeletTextProps extends SkeletProps {
    sizeFont?: Size;
}
export interface SkeletTextArrProps extends SkeletTextProps {
    row: number;
}
