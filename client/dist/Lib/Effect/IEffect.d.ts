import { Duration } from "../../Interface/Comp";
export interface IEffectProps {
    type: TType;
    duration?: Duration;
    open?: boolean;
    wh?: boolean;
    width?: TStyleSize;
    height?: TStyleSize;
    onEndAnim?: TCallAnim;
    onStartAnim?: TCallAnim;
}
declare type TType = "zoom" | "fade";
declare type TCallAnim = (e: any) => void;
declare type TStyleSize = number | string;
export {};
